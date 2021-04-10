Minimal repo to reproduce the build loop bug in copy-webpack-plugin

## How to reproduce the bug
I have found two ways to reproduce this issue.

1. 　
   - `npm run build -- --watch`
   - Modify any `./some-file*.txt` or `./index.js`
2. 　
   - Uncomment the first and only line of code inside `./index.js`
   - `npm run build -- --watch`
