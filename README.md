# comichron-data/urls

Url builder for accessing https://github.com/comichron-data/api

This is a helper module for implementing your own client. See [comichron-data/browser-client](https://github.com/comichron-data/browser-client) for an existing client module.

## Install

`npm install comichron-data-urls --save`

## API

```js
var urls = require('comichron-data-urls');
```

### urls.titles()

Makes url for getting titles.

### urls.byMonth(id)

Makes url for getting by-month data.

- id - Comic id from titles response

### urls.byIssue(id)

Makes url for getting by-issue data.

- id - Comic id from titles response

### urls.sourceData(year, month)

Makes url for getting source data.

- year - 4 digit year. String or Number.
- month - 1 or 2 digit month. January is 1. String or Number.

## License

MIT
