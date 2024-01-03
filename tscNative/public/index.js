"use strict";
const data = [
    {
        name: "mohamed",
        age: 20,
    },
];
const div = document.getElementById("div");
const btn = document.querySelector(".btn");
div.innerHTML = data === null || data === void 0 ? void 0 : data.map((d) => `
    <div>
    ${d.age}
    </div>
    <div>
    ${d === null || d === void 0 ? void 0 : d.name}
    </div>
    `).join("");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    data.push({ name: "hi", age: data[data.length - 1].age += 1 });
    div.innerHTML = data === null || data === void 0 ? void 0 : data.map((d) => `
<div>
${d === null || d === void 0 ? void 0 : d.age}
</div>
<div>
    ${d.name}
    </div>
`).join("");
});
