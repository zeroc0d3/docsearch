import docsearch from '../index.js';

docsearch({
  inputSelector: '#search-input',
  debug: true,
  multiQuery: [{
    key: 'Docs',
    appId: 'RQS4RLRZ4O',
    apiKey: '43caaae16da76e14be8cacb1e8872576',
    indexName: 'stripe',
  }, {
    key: 'API',
    appId: 'RQS4RLRZ4O',
    apiKey: '43caaae16da76e14be8cacb1e8872576',
    indexName: 'stripe-api',
  }]
});

document.getElementById('search-input').focus();
