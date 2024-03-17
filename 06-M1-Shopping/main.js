import Swal from "sweetalert2";
import { sectionProducts, displayProducts } from "./src/displayProducts";
import { btnSection, displayButtons } from "./src/displayButtons";
import { modalDetail } from "./src/modalDetail";
import { addToBasket } from "./src/addToBasket";
const URL = "https://anthonyfs.pythonanywhere.com/api/products/";

const cardItems = async () => {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    }
    // console.log(res);
    const data = await res.json();
    // console.log(data);

    //!------------------kategorilere ayırmak için-----------
    const productCategories = {
      all: data,
      categories: [...data].reduce((item, currItem) => {
        const { category } = currItem;
        if (!item[category]) {
          item[category] = [];
        }
        item[category].push(currItem);
        return item;
      }, {}),
    };
    // console.log("cat", productCategories);
    // forDetail(data);
    sectionProducts.addEventListener("click", (e) => {
      const productId = e.target.id; // Tıklanan see detail butonu id'sini almak için
      if (e.target.classList.contains("btn-primary")) {
        // console.log(e.target, productId);
        const modalBody = document.querySelector(".modal-body");
        modalBody.textContent = ""; //? modalBody'nin her seferinde tek ürün detayı göstermesi için
        modalDetail(data, productId); // İlgili ürünün detayını görmek için

        // modalDetail(productId); // İlgili ürünün detayını görmek için
      } else if (e.target.classList.contains("btn-danger")) {
        addToBasket(data, productId);
      }
    });

    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong! ${error}`,
    });
  }
};

// let arrID = [];
// const forDetail = (data) => {
//   arrID = data.map((element) => element.id);
//   // const btnAll = sectionProducts.querySelectorAll(".btn")
//   // console.log(btnAll);
//   sectionProducts.addEventListener("click", (e) => {
//     if (e.target.classList.contains("btn-primary")) {
//       let index = idArr.indexOf(e.target.getAttribute("data-id"));
//       console.log(data[index]);
//       modalDetail(data[index]);
//     } else if (e.target === btnSection) {
//     } else if (e.target.classList.contains("btn-danger")) {
//     }
//   });
// };

window.addEventListener("DOMContentLoaded", async () => {
  const products = await cardItems();
  displayButtons();
  displayProducts(products);
});
