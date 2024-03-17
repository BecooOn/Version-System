export const btnSection = document.getElementById("btns");
// console.log(btnSection);
export const displayButtons = () => {

    const btnAll = document.createElement("button");
    btnAll.classList.add("btn", "btn-primary");
    btnAll.innerText = "All";
    btnAll.style.width = "120px"


    const btnElc = document.createElement("button");
    btnElc.classList.add("btn", "btn-primary");
    btnElc.innerText = "ELECTRONICS";
    btnElc.style.width = "120px"


    const btnSprt = document.createElement("button");
    btnSprt.classList.add("btn", "btn-primary");
    btnSprt.innerText = "SPORT";
    btnSprt.style.width = "120px"

    const btnHome = document.createElement("button");
    btnHome.classList.add("btn", "btn-primary");
    btnHome.innerText = "HOME";
    btnHome.style.width = "120px"

    const btnShop = document.createElement("button");
    btnShop.classList.add("btn", "btn-primary");
    btnShop.innerText = "SHOP";
    btnShop.style.width = "120px"

    
    const btnClth = document.createElement("button");
    btnClth.classList.add("btn", "btn-primary");
    btnClth.innerText = "CLOTHING";
    btnClth.style.width = "120px"


    btnSection.appendChild(btnAll);
    btnSection.appendChild(btnElc);
    btnSection.appendChild(btnSprt);
    btnSection.appendChild(btnHome);
    btnSection.appendChild(btnShop);
    btnSection.appendChild(btnClth);
}