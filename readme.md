WinCrash.js
---
for when `process.exit()` just isn't enough.

Crashes windows v. 1709 through 2004.  is this wrong?  Open an issue on github.

example use:
```javascript
const crash = require('WinCrash.js');
if (user.hasWorkingWindowsComputer) {
    crash();
}
```

Comes with tool binary!

if you have a problem, email wincrash@hecancanyou.xyz

updates
---
* 1.1.0: Migrated from `child-process` to `open`
* 1.1.0: Automatically opens in ms edge for consistency