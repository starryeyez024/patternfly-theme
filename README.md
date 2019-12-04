# Welcome to the PatternFly Theme

This repo contains a set of theme variables for usage within the PatternFly Elements project and other web properties.  It defines how styles are applied to create a unified experience across the company.

## Installation

This repo is separate from the main Drupal repo or the WebRH pattern library and has its own build system.  Be sure to complete the steps below to get set up.

### Download and install dependencies

1. **Clone the repo**
    - Check out the repository and go into the directory:
        `git@github.com:starryeyez024/patternfly-theme.git && cd redhat-theme`
2. **Node package manager**
    - `$ npm -v`
        - This will test if node package manager is installed on your system already. If npm is not installed, visit [NodeJS](https://nodejs.org/en/) and follow instructions for your OS.
    - `$ npm install`
        - Install all the defined packages for this repo.
        - Do **not** run `npm update` unless your story is intended to update versions of dependencies.

## Build tools

When making updates to the variables, please do so in the sass files as part of the source directory (`./src`) and do not make changes directly to the css files in the compiled folder (`./dist`).

- `npm run start`: This will watch the `./src` directory for changes and recompile the css files in the `./dist` directory.
- `npm run build`: This compiles the assets from the `./src` directory into a `.css` file, a map file, and a minified version in the `./dist` directory.

## Creating a release tag

Release tags should contain the compiled assets. Force add the assets to a temp branch and create the release tag from that. 

```
git branch -D temp || git checkout master && git fetch origin && git pull origin && git status && git checkout -b temp && npm install && npm run build && git add dist -f
git commit -m "release-tag-2.x.0"
git tag 2.x.0 && git push origin 2.x.0
```

## TODO

- Import a few components from PatternFly Elements to allow for an easy preview of the changes