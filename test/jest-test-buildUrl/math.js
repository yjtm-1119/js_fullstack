function add(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
//node模块化方案  commomjs
const http = require('http');
//定义自己的模块
module.exports = {
    add,
    minus,
}

// let result = 



function expect(result) {
    return {
        toBe: function (value) {
            if (result !== value) {
                throw new Error(`预期值和真实值不一样`);
            }
        }
    }
}
function test(desc, fn) {
    
}
expect(minus(3, 7)).toBe(-4);
expect(add(3, 7)).toBe(10);