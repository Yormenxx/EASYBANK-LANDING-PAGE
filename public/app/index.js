const $btn = document.getElementById("btn_responsive");

const $items = document.querySelector(".container__items_select");

$btn.addEventListener("click",()=>{

    $items.classList.toggle("activate")

});