# SlickGrid ES6 

> This is a clone of the [6pac fork](https://github.com/6pac/SlickGrid/) of SlickGrid

## Goals: 

* Make it easy to consume in Webpack/Babel/ES6 codebases
* Make dependency consumption implicit and not reliant on globals
* Attempt to keep things consistent and backwards compatible by exporting onto the global `Slick` object
* Speed improvements where possible, move to `requestAnimationFrame` where makes sense
* Create adapters for mobx / rxjs as DataViews 

## Changes completed as per `0.1.1`:

The goal is to keep the grid API of the 6pac repository unchanged. Howe 

* converted to ES6
* dropped IE8 support
* jquery 3.1.0
* dropped jquery-ui (replaced with interact.js)
* dropped event.drag (replaced with interact.js)
* move to LESS (SCSS soon)

![Imgur](http://i.imgur.com/cDQ9SVt.png)

## Installing and use

```sh
$ npm i slickgrid-es6 --save
```

In code:

```js
import { Grid, Data, Formatters } from 'slickgrid-es6';
import { options, columns } from './grid-config';

const gridColumns = [{
  id: "%", 
  name: "% Complete", 
  field: "percentComplete", 
  formatter: Formatters.PercentCompleteBar
}, ...columns]; // some column def

const dataView = new Data.DataView();
dataView.setItems([ ... ]); // some data

const grid = new Grid('someid', dataView, columns, options);

```

To import stylesheets in LESS (for now):
```less
// some vars like @grid-border-color: red;, see slick.grid.variables.less

@import "~slickgrid-es6/dist/slick.grid.less";
@import "~slickgrid-es6/dist/slick-default-theme.less";
...
```

## Examples and development

Currently, the examples are being ported. You can start a webpack-dev-server with hot reload like this:

```sh
$ npm start
```

Then point your browser to [http://localhost:8888/](http://localhost:8888/).

To create a new build for `dist`, run:

```sh
$ npm run build
```

## Contributing

Any pull requests and help with this are appreciated - both from conversion stand point and from slickgrid bug fixes or 
feature additions. 


# Original mleibman README follows:



Find documentation and examples in [the wiki](https://github.com/mleibman/SlickGrid/wiki).

# Welcome to SlickGrid

## SlickGrid is an advanced JavaScript grid/spreadsheet component

Some highlights:

* Adaptive virtual scrolling (handle hundreds of thousands of rows with extreme responsiveness)
* Extremely fast rendering speed
* Supports jQuery UI Themes
* Background post-rendering for richer cells
* Configurable & customizable
* Full keyboard navigation
* Column resize/reorder/show/hide
* Column autosizing & force-fit
* Pluggable cell formatters & editors
* Support for editing and creating new rows.
* Grouping, filtering, custom aggregators, and more!
* Advanced detached & multi-field editors with undo/redo support.
* “GlobalEditorLock” to manage concurrent edits in cases where multiple Views on a page can edit the same data.
* Support for [millions of rows](http://stackoverflow.com/a/2569488/1269037)
