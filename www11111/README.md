# ionic-starter-requirejs

This is an addon starter template with [RequireJS](http://requirejs.org/) for the [Ionic Framework](http://ionicframework.com/).

![ionic-starter-requirejs](https://cloud.githubusercontent.com/assets/2264672/9639233/58bad3f8-51ab-11e5-81b4-db58a583503b.jpg)

## How to use this template

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project.

## Explanation

With RequireJS you can simply split your projects js-files in as many parts you want.

### special files:
- main.js --> RequireJS config
- app/boot.js --> manual bootstrap of the app
- app/app.js --> Definition of the app/module
- app/routes.js --> Definition of states
- app/config.js --> additional config-blocks (e.g. configure your ionic here)
- app/run.js --> run-blocks

But you can structure your app as you want --> no need to split everything in separated files.

Additionally you can use the packaging tool [almond](https://github.com/jrburke/almond) to build own releases (uglified, minified and packaged in one file).

For a simple way to use you can install grund-cli and use [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/KillerCodeMonkey/ionic-starter-requirejs/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

