const data: any[] = [
  {
    name: "mohamed",
    age: 20,
  },
];

const div = document.getElementById("div");
const btn = document.querySelector(".btn");

div!.innerHTML = data
  ?.map(
    (d) => `
    <div>
    ${d.age}
    </div>
    <div>
    ${d?.name}
    </div>
    `
  )
  .join("");

btn?.addEventListener("click", () => {
  data.push({name:"hi",age:data[data.length-1].age+=1})  

  div!.innerHTML = data
    ?.map(
      (d) => `
<div>
${d?.age}
</div>
<div>
    ${d.name}
    </div>
`
    )
    .join("");
});
