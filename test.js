var test = require('tape');

var urls = require('./index.js');

test('titles', function(t) {
  t.plan(1);

  t.equal(urls.titles(), 'https://comichron-data.github.io/api/titles.json');
});

test('byMonth', function(t) {
  t.plan(1);

  t.equal(urls.byMonth('blah'), 'https://comichron-data.github.io/api/titles/blah/by-month.json');
});

test('byIssue', function(t) {
  t.plan(1);

  t.equal(urls.byIssue('blah'), 'https://comichron-data.github.io/api/titles/blah/by-issue.json');
});

test('sourceData with single digit month', function(t) {
  t.plan(2);

  t.equal(urls.sourceData(2001, 9), 'https://comichron-data.github.io/api/source-data/2001-09.json');
  t.equal(urls.sourceData('2001', '9'), 'https://comichron-data.github.io/api/source-data/2001-09.json');
});

test('sourceData with double digit month', function(t) {
  t.plan(2);

  t.equal(urls.sourceData(2001, 11), 'https://comichron-data.github.io/api/source-data/2001-11.json');
  t.equal(urls.sourceData('2001', '11'), 'https://comichron-data.github.io/api/source-data/2001-11.json');
});

test('sourceData only pads month if needed', function(t) {
  t.plan(1);

  t.equal(urls.sourceData('2001', '09'), 'https://comichron-data.github.io/api/source-data/2001-09.json');
});
