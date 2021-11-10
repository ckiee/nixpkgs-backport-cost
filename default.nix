with import <nixpkgs> { };
let
  yarn2nix = yarn2nix-moretea.override {
    nodejs = nodejs-17_x;
    yarn = pkgs.yarn.override { inherit nodejs; };
  };
in yarn2nix.mkYarnPackage rec {
  name = "nixpkgs-backport-cost";
  src = ./.;
  packageJSON = ./package.json;
  yarnLock = ./yarn.lock;
  yarnNix = ./yarn.nix;
  buildPhase = "yarn --offline run postinstall";
}
