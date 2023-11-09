var products = document.querySelectorAll(".card");
var addproduct = document.querySelectorAll(".add");
var showproduct = document.querySelector(".show-product");
var showprice = document.querySelector("#price_btn");
var total = document.querySelector("#total");
var totalprice = 0;
let newP = document.createElement("li");
products.forEach(function (item) {
  item.onclick = function () {
    totalprice += +item.getAttribute("price");
    showproduct.innerHTML += item.textContent + "<br>" + "<br>";
    if (showproduct.innerHTML != "") {
      showprice.style.display = "block";
    }
  };
});

showprice.onclick = function () {
  total.innerHTML = totalprice;
};
