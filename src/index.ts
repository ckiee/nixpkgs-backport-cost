import { Octokit } from "@octokit/rest";
import prettyMilliseconds from "pretty-ms";
import { mean, std } from "mathjs";

const octokit = new Octokit();

async function main() {
    const backportedPulls = (await octokit.rest.search.issuesAndPullRequests({
        q: `is:pr label:"backport release-21.05" is:closed `,
        per_page: 100
    })).data.items;

    const backportPulls = (await octokit.rest.search.issuesAndPullRequests({
        q: `is:closed is:pr author:app/github-actions [Backport release-21.05]`,
        per_page: 100
    })).data.items;

    const backportDelays = backportPulls.map(pull => {
        const trimmedTitle = pull.title.replace(/^\[Backport release-\d{2}\.\d{2}\] /, "");
        const originalPull = backportedPulls.filter(basePull => basePull.title == trimmedTitle)[0];
        if (!originalPull || !originalPull.closed_at || !pull.closed_at) return;
        // `${originalPull.title} -- ${pull.title}` evals to:
        // apacheHttpd: 2.4.50 -> 2.4.51 -- [Backport release-21.05] apacheHttpd: 2.4.50 -> 2.4.51
        // or undefined
        const origCloseMs = new Date(originalPull.closed_at).getTime();
        const backportCloseMs = new Date(pull.closed_at).getTime();
        return {
            mergeToBackportMs: backportCloseMs - origCloseMs,
            originalPull,
            backportPull: pull
        };
    }).filter(bp => !!bp);

    console.table(backportDelays.map(bp => {
        if (!bp) return;
        return { t: bp.originalPull.title, d: prettyMilliseconds(bp.mergeToBackportMs) };
    }));


    const diffs = backportDelays.map(bp => {
        return bp!.mergeToBackportMs;
    });

    console.log("Sample size", diffs.length);
    console.log(`Mean: ${mean(diffs)} ± ${std(diffs)}`);
    console.log(`Human mean: ${prettyMilliseconds(mean(diffs))} ± ${prettyMilliseconds(std(diffs))}`);

}
main();
