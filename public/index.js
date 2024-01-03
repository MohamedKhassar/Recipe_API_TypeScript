"use strict";
const data = [
    {
        name: "mohamed",
        age: 20
    }
];
data[0] = Object.assign(Object.assign({}, data[0]), { age: 55 });
console.log(data);
