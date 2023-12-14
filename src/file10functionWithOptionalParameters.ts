type FuncType = (n: number, m: number, o?: number) => number;

const func: FuncType = (n, m, o) => {
    if(typeof o === 'undefined'){
        return (n*m)
    }
    return (n*m*o)
};

const ans = func(12,10)
console.log(ans);