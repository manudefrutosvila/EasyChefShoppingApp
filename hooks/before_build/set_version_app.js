#!/usr/bin/env node

require('shelljs/global');

process.stdout.write('\n >>> Setting app version from package.json \n');

exec('gulp package-version-to-app');
