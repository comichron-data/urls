var test = require('tape');

var urls = require('./index.js');

test('titles', function(t) {
  t.plan(1);

  t.equal(urls.titles(), 'https://comichron-data.github.io/api/titles.json');
});

test('by month', function(t) {
  t.plan(1);

  t.equal(urls.byMonth('blah'), 'https://comichron-data.github.io/api/titles/blah/by-month.json');
});

test('by issue', function(t) {
  t.plan(1);

  t.equal(urls.byIssue('blah'), 'https://comichron-data.github.io/api/titles/blah/by-issue.json');
});

test('source data with single digit month', function(t) {
  t.plan(1);

  t.equal(urls.sourceData(2001, 9), 'https://comichron-data.github.io/api/source-data/2001-09.json');
});

test('source data with double digit month', function(t) {
  t.plan(1);

  t.equal(urls.sourceData(2001, 11), 'https://comichron-data.github.io/api/source-data/2001-11.json');
});
