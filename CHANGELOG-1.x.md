## 3.0.1 ( TBD )

- []() DE21491 Add default broadcast variables

## 3.0.0 ( 2019-11-27 )
Tag: [3.0.0](patternfly-theme/commits/3.0.0)

- [US215587](https://rally1.rallydev.com/#/270861059696d/detail/userstory/310920434260) Update name of broadcast variables to match pfe changes, update PFE packages to prerelease.30, update JS paths in demo file 

## 2.5.0 ( 2019-11-25 )
Tag: [2.5.0](patternfly-theme/commits/2.5.0)

- Updated gulp task so that it launches the demo in the browser.
- Modify disabled UI color for better accessibility
- Set subnavigation z-index value lower than navigation
- Remove overlay from z-index

## 2.4.1 (2019-08-30)
Tag: [2.4.1](patternfly-theme/commits/2.4.1)

- Update pfelements to prerelease.22

## 2.4.0 (2019-08-21)
Tag: [2.4.0](patternfly-theme/commits/2.4.0)

- Update pfelements to prerelease.20
- Set sass map for z-index

## 2.3.0 (2019-07-29)
Tag: [2.3.0](patternfly-theme/commits/2.3.0)

- Changed ui-complement color to #151515 (from #464646).

## 2.2.2 (2019-05-20)
Tag: [2.2.2](patternfly-theme/commits/2.2.2)

- Remove *:first-child styles as they are too specific and interfere with styles coming from the web component (see card header for example which needs a negative margin on first child).
- Add 3px border-radius to match DSC styles
- Remove .PFElement h* scoped styles as they add too much specificity; letting styles be opt-in instead using the classes

## 2.2.1 (2019-05-09)
Tag: [2.2.1](patternfly-theme/commits/2.2.1)

- Remove extra quotes from pfe-text placeholder

## 2.2.0 (2019-05-02)
Tag: [2.2.0](patternfly-theme/commits/2.2.0)

- Add typography placeholders
- Add a pfe-text extend
- Add map-deep-get function
- Update components to prerelease.14

## 2.1.0 (2019-04-22)
Tag: [2.1.0](patternfly-theme/commits/2.1.0)

- Use postcss to apply variable fallbacks automagically

## 2.0.2 (2019-04-09)
Tag: [2.0.2](patternfly-theme/commits/2.0.2)

- Update .PFElement HTML heading tags to include font-size, font-weight & line-height
- Fix .pfe-headline classes: remove --heading from line-height and font-size variables
- Update demo file to show pfe-headline classes and plain HTML headings (outside of web components)

## 2.0.1 (2019-04-08)
Tag: [2.0.1](patternfly-theme/commits/2.0.1)

- Fix error with font-family variables where it prints heading twice
- Update ui-accent--hover color

## 2.0.0 (2019-04-04)
Tag: [2.0.0](patternfly-theme/commits/2.0.0)

- [US202840](https://rally1.rallydev.com/#/detail/userstory/286532200592?fdp=true) Add newest logo reference to theme set
- Add colors and logo variable to demo file
- Update variable values for new font, new logos, new colors
- Add typography classes for inclusion/extension

## 1.1.0 (2019-04-02)
Tag: [1.1.0](patternfly-theme/commits/1.1.0)

- Add support for the broadcasted text color
- Set text sizes in pixels for consistency
- Add colors and logo variable to demo file

## 1.0.0 (2019-03-27)
Tag: [1.0.0](patternfly-theme/commits/1.0.0)

- [US202840](https://rally1.rallydev.com/#/270861059696d/detail/userstory/286532200592/tasks) Add logo variables to theme set
- Add @redhat org to package name
- Repository tidying: updating packages, injecting prefix variable, remove the container-padding variable from pfe-cta context, add logo variables

## 0.4.0 (2019-02-20)
Tag: [0.4.0](patternfly-theme/commits/0.4.0)

- [US191918](https://rally1.rallydev.com/#/270861059696d/detail/userstory/264656053444) Add accordion to demo to show container spacing; Adjust the value of container spacing & padding variables; Add the Overpass font to basic PFElements in the advanced css file

## 0.3.0 (2019-02-18)
Tag: [0.3.0](patternfly-theme/commits/0.3.0)

- [US191918](https://rally1.rallydev.com/#/270861059696d/detail/userstory/264656053444) Add build tools to compile sass to css and minify the resulting css files and incorporates a demo page to preview variables against components

## 0.2.0 (2019-01-21)
Tag: [0.2.0](patternfly-theme/commits/0.2.0)

- [US191918](https://rally1.rallydev.com/#/270861059696d/detail/userstory/264656053444/tasks) Add CSS variables for PatternFly Elements on RH.com; set up infrastructure for repo
