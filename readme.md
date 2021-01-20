WinCrash.js
---
for when `process.exit()` just isn't enough.

Crashes windows v. 1904-2004.  is this wrong?  Open an issue on github.  It worked in my VMs.

example use:
```javascript
const crash = require('crash');
if (user.hasWorkingWindowsComputer) {
    crash.crash();
}
```

Comes with tool binary!

if you have a problem, email iwontlookatthis@hecancanyou.xyz