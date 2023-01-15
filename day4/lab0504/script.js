const total = document.getElementById("total");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const quantity = document.getElementById("quantity");
const discount = document.getElementById("discount");
const price = document.getElementById("price").innerText;

total.innerText = price;
qty = 1;
minus.addEventListener("click", () => {
if(qty!=1) qty--;
  loadNewAmount(qty, discount.value, price)
});
plus.addEventListener("click", () => {
  qty++;
  loadNewAmount(qty, discount.value, price);
});
discount.addEventListener('change', ()=>{
    loadNewAmount(qty, discount.value, price)
})
function loadNewAmount(qty, discount, price){
    quantity.innerText = qty
    total.innerText = (qty*price)-discount;
}