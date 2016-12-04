'use strict'; // eslint-disable-line

const fs = require('fs');
const buildHandler = require('./build-handler');
const mkdirParentSync = require('./mkdir-parent-sync');

module.exports = (log, stage, source, tmp) => {
  mkdirParentSync(tmp, '0777');
  return buildHandler(source, tmp);
};
