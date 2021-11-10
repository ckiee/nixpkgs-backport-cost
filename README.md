# nixpkgs-backport-cost

A little statistical adventure.

## Usage

``` shell
$ nix-build
$ ./result/bin/nixpkgs-backport-cost
```

## License
MIT, check `LICENSE` file.

## Output
``` shell
┌─────────┬──────────────────────────────────────────────────────────────────┬───────────────────┐
│ (index) │                                t                                 │         d         │
├─────────┼──────────────────────────────────────────────────────────────────┼───────────────────┤
│    0    │                       'Kernels 2021-11-02'                       │   '17h 31m 26s'   │
│    1    │                       'Kernels 2021-10-27'                       │   '6h 17m 43s'    │
│    2    │              'electron: mark versions <= 11 as EOL'              │   '15h 6m 54s'    │
│    3    │                       'Kernels 2021-10-20'                       │ '2d 13h 52m 47s'  │
│    4    │                      'alpine: 2.24 → 2.25'                       │    '1h 2m 7s'     │
│    5    │       'firefox-bin: add libXtst and libXrandr to lib path'       │ '7d 19h 56m 28s'  │
│    6    │           'create_amis.sh: fix logic for non-zfs amis'           │     '30m 1s'      │
│    7    │             'nanopb: Use protoc from buildPackages'              │   '4h 59m 12s'    │
│    8    │                       'Kernels 2021-10-17'                       │ '1d 19h 37m 49s'  │
│    9    │                    'vscode: 1.61.2 -> 1.62.0'                    │   '15h 15m 49s'   │
│   10    │                   'vscodium: 1.61.2 -> 1.62.0'                   │    '1h 7m 59s'    │
│   11    │                    'nixos/subsonic: use jre8'                    │   '1h 12m 11s'    │
│   12    │                'signal-desktop: 5.22.0 -> 5.23.0'                │   '23h 56m 4s'    │
│   13    │                       'Kernels 2021-10-13'                       │     '53m 33s'     │
│   14    │                'matrix-synapse: 1.45.1 -> 1.46.0'                │  '2d 1h 59m 21s'  │
│   15    │        'firefox-bin: 93.0 -> 94.0 [High security fixes]'         │     '4m 53s'      │
│   16    │               'mautrix-whatsapp: 0.1.9 -> 0.1.10'                │      '5m 2s'      │
│   17    │       'pidgin: use system certificates to fix letsencrypt'       │   '6h 26m 27s'    │
│   18    │            'honcho: 1.0.1 -> 1.1.0, fix the package'             │   '4h 24m 16s'    │
│   19    │                'mautrix-whatsapp: 0.1.8 -> 0.1.9'                │  '3d 5h 52m 49s'  │
│   20    │                'signal-desktop: 5.20.0 -> 5.21.0'                │   '1h 27m 17s'    │
│   21    │             '[CVSS 10.0] discourse: 2.7.8 -> 2.7.9'              │   '10h 28m 32s'   │
│   22    │                       'Kernels 2021-10-07'                       │   '15h 50m 41s'   │
│   23    │              'imagemagick6: 6.9.12-19 -> 6.9.12-26'              │    '6h 44m 5s'    │
│   24    │        'ungoogled-chromium: 94.0.4606.81 -> 95.0.4638.54'        │ '8d 13h 59m 26s'  │
│   25    │                'yt-dlp: 2021.10.10 -> 2021.10.22'                │     '10m 13s'     │
│   26    │ 'discourse: Fix the public directory path reported by Discourse' │   '3h 52m 27s'    │
│   27    │                'signal-desktop: 5.19.0 -> 5.20.0'                │    '2h 6m 23s'    │
│   28    │                 'tamarin-prover: 1.6.0 → 1.6.1'                  │     '35m 26s'     │
│   29    │                    'vscode: 1.61.0 -> 1.61.1'                    │     '45m 12s'     │
│   30    │                    'vscode: 1.61.1 -> 1.61.2'                    │    '3h 9m 50s'    │
│   31    │                   'vscodium: 1.61.1 -> 1.61.2'                   │    '2h 1m 12s'    │
│   32    │        'ungoogled-chromium: 94.0.4606.71 -> 94.0.4606.81'        │   '1h 45m 26s'    │
│   33    │             'chromium: 94.0.4606.71 -> 94.0.4606.81'             │   '19h 27m 6s'    │
│   34    │                     'nix: 2.3.15 -> 2.3.16'                      │ '10d 14h 50m 58s' │
│   35    │                'signal-desktop: 5.18.1 -> 5.19.0'                │     '57m 31s'     │
│   36    │                   'vscodium: 1.61.0 -> 1.61.1'                   │   '6h 15m 43s'    │
│   37    │                 'emacs-sv-kalender: 1.9 -> 1.11'                 │    '5h 9m 5s'     │
│   38    │                    'redmine: 4.2.2 -> 4.2.3'                     │ '1d 20h 53m 23s'  │
│   39    │                    'gitlab: 14.3.2 -> 14.3.3'                    │   '4h 22m 51s'    │
│   40    │                      'leo2: 1.6.2 → 1.7.0'                       │     '32m 28s'     │
│   41    │             'element-{web,desktop}: 1.9.0 -> 1.9.2'              │ '3d 15h 48m 48s'  │
│   42    │                   'vscodium: 1.60.2 -> 1.61.0'                   │  '2d 5h 50m 39s'  │
│   43    │                    'vscode: 1.60.2 -> 1.61.0'                    │   '1h 31m 51s'    │
│   44    │                 'apacheHttpd: 2.4.50 -> 2.4.51'                  │  '2d 7h 9m 41s'   │
│   45    │               'github-runner: 2.283.1 -> 2.283.3'                │     '38m 1s'      │
└─────────┴──────────────────────────────────────────────────────────────────┴───────────────────┘
Sample size 46
Mean: 102570130.43478261 ± 199149671.55914655
Human mean: 1d 4h 29m 30.1s ± 2d 7h 19m 9.6s
```
