var mas = prompt("You want table of")
var num = prompt("You want this many tables")
const container = document.getElementById("container")

for (let index = 1; index <= num; index++) {
    container.innerHTML += `<div class="box">${mas} X ${index} = ${mas * index}</div>`;
}