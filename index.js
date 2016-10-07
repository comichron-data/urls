var baseUrl = 'https://comichron-data.github.io';

module.exports = {
  titles: titles,
  byMonth: byMonth,
  byIssue: byIssue,
  sourceData: sourceData
};

function titles() {
  return baseUrl + '/api/titles.json';
}

function byMonth(id) {
  return baseUrl + '/api/titles/' + id + '/by-month.json';
}

function byIssue(id) {
  return baseUrl + '/api/titles/' + id + '/by-issue.json';
}

function sourceData(year, month) {
  return baseUrl + '/api/source-data/' + year + '-' + zeroPadMonth(month) + '.json';
}

function zeroPadMonth(value) {
  if (String(value).length == 1) {
    return '0' + value;
  } else {
    return value;
  }
}
