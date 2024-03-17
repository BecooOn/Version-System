export const addToBasket = (data, productId) => {
  const canvas = document.querySelector(".offcanvas");
  data.forEach((item) => {
    const { id, title, image, description, price } = item;
    if (id == productId) {
      // Parent div
      const offcanvasBodyDiv = document.createElement("div");
      offcanvasBodyDiv.className = "offcanvas-body";

      // Card divz
      const cardDiv = document.createElement("div");
      cardDiv.className = "card mb-3";
      cardDiv.style.maxWidth = "540px";

      // Row div
      const rowDiv = document.createElement("div");
      rowDiv.className = "row g-0";

      // Col-md-4 div for image
      const colDiv1 = document.createElement("div");
      colDiv1.className = "col-md-4 my-auto";

      // Image element
      const imgElement = document.createElement("img");
      imgElement.src = `${image}`;
      imgElement.className = "img-fluid rounded-start";
      imgElement.alt = "...";

      // Col-md-8 div for card body
      const colDiv2 = document.createElement("div");
      colDiv2.className = "col-md-8";

      // Card body div
      const cardBodyDiv = document.createElement("div");
      cardBodyDiv.className = "card-body";

      // Card title
      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.textContent = `${title}`;

      // Minus button
      const minusButton = document.createElement("i");
      minusButton.className =
        "fa-solid fa-minus border rounded-circle bg-danger text-white p-2";

      // Quantity text
      const quantityText = document.createElement("span");
      quantityText.className = "fw-bold";
      quantityText.textContent = "1";

      // Plus button
      const plusButton = document.createElement("i");
      plusButton.className =
        "fa-solid fa-plus border bg-danger text-white rounded-circle p-2";

      // Total text
      const totalText = document.createElement("p");
      totalText.className = "card-text";
      totalText.textContent = "Total : fiyat x miktar";

      // Remove button
      const removeButton = document.createElement("button");
      removeButton.className = "btn btn-danger";
      removeButton.textContent = "Remove";

      // Append elements
      offcanvasBodyDiv.appendChild(cardDiv);
      cardDiv.appendChild(rowDiv);
      rowDiv.appendChild(colDiv1);
      colDiv1.appendChild(imgElement);
      rowDiv.appendChild(colDiv2);
      colDiv2.appendChild(cardBodyDiv);
      cardBodyDiv.appendChild(cardTitle);
      cardBodyDiv.appendChild(minusButton);
      cardBodyDiv.appendChild(quantityText);
      cardBodyDiv.appendChild(plusButton);
      cardBodyDiv.appendChild(totalText);
      cardBodyDiv.appendChild(removeButton);

      // Append parent div to document body or any other parent element
      canvas.appendChild(offcanvasBodyDiv);
    } else {
      return;
    }
  });
};

// const basket = localStorage.getItem("basket");
// let basketArr;
// if (basket) {
//     basketArr = JSON.parse(basket);
// } else {
//     basketArr = [];
// }
// const isExist = basketArr.find((item) => item.id === id);
// if (isExist) {
//     isExist.count += 1;
// } else {
//     data.count = 1;
//     basketArr.push(data);
// }
// localStorage.setItem("basket", JSON.stringify(basketArr));
// localStorage.clear();
