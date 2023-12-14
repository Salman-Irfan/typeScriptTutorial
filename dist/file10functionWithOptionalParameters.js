"use strict";
const func = (n, m, o) => {
    if (typeof o === 'undefined') {
        return (n * m);
    }
    return (n * m * o);
};
const ans = func(12, 10);
console.log(ans);
