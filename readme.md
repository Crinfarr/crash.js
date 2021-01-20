WinCrash.js
---
for when `process.exit()` just isn't enough.

example use:
```javascript
const crash = require('crash');
if (user.hasWorkingWindowsComputer) {
    crash();
}
```

Comes with tool binary!

if you have a problem, email iwontlookatthis@hecancanyou.xyz