with import <nixpkgs> { };
mkYarnPackage rec {
  name = "nixpkgs-backport-cost";
  src = ./.;
  packageJSON = ./package.json;
  yarnLock = ./yarn.lock;
  yarnNix = ./yarn.nix;
  buildPhase = "yarn --offline run postinstall";
}
