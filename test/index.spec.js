const bundler = require('../index');
const log = require('../utils/log');

bundler(log('test'),
  'empty',
  'dev',
  'C:/Users/Administrator/Desktop/empty/',
  'C:/Users/Administrator/Desktop/empty/.atomable/deploy-1/tmp/',
  'C:/Users/Administrator/Desktop/empty/.atomable/deploy-1/bundle/',
  true);
