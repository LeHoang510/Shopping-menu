const menu=[
    {
        id: 1,
        title: "Bun cha",
        category: "Breakfast",
        price: 15,
        img: "Picture/buncha.jpg",
        desc: "Bun cha rat ngon ban nen thu",
    },
    {
        id: 2,
        title: "Banh xeo",
        category: "Dinner",
        price: 10,
        img: "Picture/banhxeo.jpg",
        desc: "Banh xeo dac san mien trung",
    },
    {
        id: 3,
        title: "Bap xao",
        category: "Snack",
        price: 5,
        img: "Picture/bapxao.jpg",
        desc: "Bap xao cuc ngot cuc ngon",
    },
    {
        id: 4,
        title: "Cut lon",
        category: "Snack",
        price: 10,
        img: "Picture/cutlon.jpg",
        desc: "Cut lon la mon an vat khong the thieu",
    },
    {
        id: 5,
        title: "Dau phu",
        category: "Dinner",
        price: 20,
        img: "Picture/dauphu.jpg",
        desc: "Dau phu cay nhoi thit",
    },
    {
        id: 6,
        title: "Ga chien mam",
        category: "Dinner",
        price: 25,
        img: "Picture/gachienmam.jpg",
        desc: "Ga chien gion sot nuoc mam",
    },
    {
        id: 7,
        title: "My quang",
        category: "Breakfast",
        price: 20,
        img: "Picture/myquang.jpg",
        desc: "My quang mon ngon Viet Nam",
    },
    {
        id: 8,
        title: "Suon xao",
        category: "Dinner",
        price: 25,
        img: "Picture/suonxaochuangot.jpg",
        desc: "Suon xao vua chua vua ngot",
    },
    {
        id: 9,
        title: "Banh beo",
        category: "Breakfast",
        price: 10,
        img: "Picture/banhbeo.jpg",
        desc: "Banh beo dac san dat Hue",
    },
    {
        id: 10,
        title: "Banh uot",
        category: "Breakfast",
        price: 10,
        img: "Picture/banhuot.jpg",
        desc: "Suon xao vua chua vua ngot",
    },
    {
        id: 11,
        title: "Coca Cola",
        category: "Drink",
        price: 5,
        img: "Picture/coca.jpg",
        desc: "Thuc uong giai khat duoc ua chuong",
    },
    {
        id: 12,
        title: "Com tam",
        category: "Lunch",
        price: 15,
        img: "Picture/comtam.jpg",
        desc: "Com tam ngon tuyet voi",
    },
    {
        id: 13,
        title: "Cafe",
        category: "Drink",
        price: 10,
        img: "Picture/cafe.jpg",
        desc: "Thuc uong giai khat giup ban tinh tao",
    },
    {
        id: 14,
        title: "Xoi ga",
        category: "Breakfast",
        price: 15,
        img: "Picture/xoiga.jpg",
        desc: "Mon an quen thuoc voi hoc sinh",
    },
    {
        id: 15,
        title: "Tra sua",
        category: "Drink",
        price: 50,
        img: "Picture/milktea.jpg",
        desc: "Thuc uong ua thich cua cac ban nu",
    },
    {
        id: 16,
        title: "My tom",
        category: "Lunch",
        price: 25,
        img: "Picture/mytom.jpg",
        desc: "Mon an don gian",
    },
    {
        id: 17,
        title: "My tuong den",
        category: "Lunch",
        price: 40,
        img: "Picture/mytuongden.jpg",
        desc: "Mon an noi tieng cua Han Quoc",
    },
    {
        id: 18,
        title: "Banh trang tron",
        category: "Snack",
        price: 20,
        img: "Picture/banhtrantron.jpg",
        desc: "Do an vat tuoi tho cua moi nguoi",
    }
];

window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    cateBtn();
    ready();
});

document.onclick = function (){
    ready();
}

function ready() {
    const purchaseButton = document.querySelectorAll(".purchase");
    purchaseButton.forEach(function (btn) {
        btn.addEventListener("click", purchaseItem)
    });

    const qteButton = document.querySelectorAll(".item-quantity");
    qteButton.forEach(function (btn){
       const incButton = btn.querySelector(".inc-btn");
       incButton.addEventListener("click", incBtn);

       const decButton = btn.querySelector(".dec-btn");
       decButton.addEventListener("click", decBtn);

       const inputBox = btn.querySelector(".box");
       inputBox.addEventListener("change", inputNum);

       const removeButton = btn.querySelector(".remove");
       removeButton.addEventListener("click", removeItem);
    });

    const buyButton = document.querySelector(".buy");
    buyButton.addEventListener("click",buy);

    const clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click",clear);

    updateTotal();
}

function displayMenuItems(menuItems){
    const menuSection = document.querySelector(".menu-section");
    let displayMenu = menuItems.map(function(item){
        return `
            <div class="col-5" style="margin-bottom: 20px;" id="${item.id}">
          <div class="card mb-4" style="border-radius: 20px; " >
              <div class="row no-gutters" style="height: 170px">
                  <div class="col-md-6">
                      <img src=${item.img} class="card-img" alt=${item.title} style="height: 100%; border-radius: 20px">
                  </div>
                  <div class="col-md-6">
                      <div class="card-body ">
                          <div class="name-tag ">
                              <h5 class="card-title">${item.title}</h5>
                              <p class="card-text">${item.price}$</p>
                          </div>
                          <hr>
                          <p class="card-text " style="font-size: small">${item.desc}</p>
                          <button type="button" class="btn btn-primary purchase">Purchase</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>`
    });
    displayMenu= displayMenu.join("");
    menuSection.innerHTML=displayMenu;
}
function cateBtn(){
    const cateButton = document.querySelectorAll(".button-display");
    cateButton.forEach(function(btn){
        btn.addEventListener("click",function (e){
            const cate = e.target.dataset.id;
            const newMenu = menu.filter(function(item){
                if(cate === item.category){
                    return item;
                }
            });
            if(cate === "All"){
                displayMenuItems(menu);
            }else{
                displayMenuItems(newMenu);
            }
        });
    });
}
function updateTotal(){
    let numberItem = document.querySelectorAll(".item");
    let res = 0;
    for( let i = 0; i<numberItem.length; i++){
        let price = parseInt(numberItem[i].children[1].innerText.replace("$",""));
        let qte = parseInt(numberItem[i].getElementsByTagName("input")[0].value);
        res += qte*price;
    }
    document.querySelector(".sum").innerText = res +"$";
}

function purchaseItem(event){
    const cartSection = document.querySelector(".items");
    let btnClicked = event.target;
    let idItem = btnClicked.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    let idCheck = document.querySelectorAll(".remove");
    let checked = true;
    for(let i=0; i<idCheck.length; i++){
        if(idCheck[i].id == idItem){
                    alert("Already added");
                    checked = false;
                    break;
                }
    }
    if(checked){
                let itemCheck = menu.filter(function (item){
                    if(item.id == idItem){
                        return item;
                    }
                });
                let itemCart = itemCheck[0];
                let content = `<div class="item">
      <div class="item-name">${itemCart.title}</div>
      <div class="item-price">${itemCart.price}$</div>
      <div class="item-quantity">
          <div class="btn-box">
              <button type="button" class="dec-btn">-</button>
              <input type="text" name="qte" value="1" class="box">
              <button type="button" class="inc-btn">+</button>
          </div>
          <button type="button" class="btn btn-danger btn-sm remove" id="${itemCart.id}" style="height: 30px; width: 30px">X</button>
      </div>
  </div>`
                cartSection.innerHTML += content;
            }
}

function incBtn(event){
    let btnClicked = event.target;
    let input = btnClicked.parentElement.children[1];
    let temp = parseInt(input.value) + 1;
    input.outerHTML = `<input type="text" name="qte" value="${temp}" class="box">`;
}
function decBtn(event){
    let btnClicked = event.target;
    let input = btnClicked.parentElement.children[1];
    let temp = parseInt(input.value)-1;
    if( temp > 0){
        input.outerHTML = `<input type="text" name="qte" value="${temp}" class="box">`;
    }else if(temp === 0){
        let removeBtn = btnClicked.parentElement.parentElement.getElementsByClassName("remove");
        removeBtn[0].click();
    }
}
function inputNum(event){
    let btnClicked = event.target;
    let input = btnClicked.parentElement.children[1];
    let temp = input.value;
    input.outerHTML = `<input type="text" name="qte" value="${temp}" class="box">`;
    updateTotal();
}
function removeItem(event){
    let btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove();
}

function buy(){
    const coin = parseInt(document.querySelector(".coin").textContent);
    const total = parseInt(document.querySelector(".sum").textContent.replace("$",""));
    const res = coin - total;
    if(res >= 0){
        document.querySelector(".coin").innerHTML = res.toString();
        document.querySelector(".clear").click();
    }else {
        alert("Not enough money");
    }
}
function clear(){
    const removeBtn = document.querySelectorAll(".remove");
    removeBtn.forEach(function (btn){
        btn.click();
    });
}







