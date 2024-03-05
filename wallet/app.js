const kaydet = document.querySelector(".btn-kaydet");
const ekle = document.querySelector(".btn-ekle");
const temizle = document.querySelector(".btn-temizle");
const gelir = document.querySelector("#gelir");

//! Tarih değerini sayfanın yüklenmesi ile birlikte ekranda görmek için
window.addEventListener("load", () => {
  // document.querySelector("#tarih").value = new Date().toISOString().split('T')[0];  // Tarihi alıp inputa yazdırıyoruz. Birinci yol
  document.querySelector("#tarih").valueAsDate = new Date(); // Tarihi alıp inputa yazdırıyoruz. İkinci yol
});

//!Tümünü silmek için
temizle.addEventListener("click", () => {
  if (confirm("Tümü silmek istediginizden emin misiniz?")) {
    document.querySelector("#tarih").value = "";
    document.querySelector("#harcama").value = "";
    document.querySelector("#harcama-aciklama-input").value = "";
    document.querySelector("#gelir").value = "";
    document.querySelector(".sonuc-gelir").textContent = "";
    document.querySelector(".tablo-formu").firstElementChild.remove();
    // document.querySelector(".hasilat").firstElementChild.remove();
  }
});

//!Tabloya kaydetmek için
kaydet.addEventListener("click", () => {
  const tableElement = document.querySelector(".table");
  // Eğer tablo varsa sadece tbody içeriğini güncellemek için
  if (tableElement) {
    if (
      document.querySelector("#tarih").value === "" ||
      document.querySelector("#harcama").value === "" ||
      document.querySelector("#harcama-aciklama-input").value === ""
    ) {
      alert("Lütfen bu alanları doldurunuz");
    } else {
      // tbody içeriğini güncellemek için
      updateTableBody(tableElement);
    }
  } else {
    if (
      document.querySelector("#tarih").value === "" ||
      document.querySelector("#harcama").value === "" ||
      document.querySelector("#harcama-aciklama-input").value === ""
    ) {
      alert("Lütfen bu alanları doldurunuz");
    } else {
      // Tablo yoksa yeni bir tablo oluşturmak için
      createTable();
    }
  }
  totalExpense();
});

function createTable() {
  // Tablo oluştur
  const formTablo = document.createElement("table");
  formTablo.classList.add("table");

  // Başlık (thead) oluştur
  const thead = formTablo.createTHead();
  thead.classList.add("table-thead");
  const theadRow = thead.insertRow();
  let arr = ["Tarih", "Harcama Açıklaması", "Harcanan Para", "İşlem"];
  for (let i = 0; i < arr.length; i++) {
    let thText = document.createTextNode(arr[i]);
    let cellTH = document.createElement("th");
    cellTH.appendChild(thText);
    theadRow.appendChild(cellTH);
  }

  // Tablo gövdesi (tbody) oluştur
  const tbody = document.createElement("tbody");

  // Satır oluşturmak ve verileri hücrelere eklemek için
  const tbRow = tbody.insertRow();
  let tarih = document.querySelector("#tarih").value;
  let harcama = document.querySelector("#harcama").value;
  let aciklama = document.querySelector("#harcama-aciklama-input").value;

  let tbCell = tbRow.insertCell();
  let tbContent = document.createTextNode(tarih);
  tbCell.appendChild(tbContent);

  tbCell = tbRow.insertCell();
  tbContent = document.createTextNode(aciklama);
  tbCell.appendChild(tbContent);

  tbCell = tbRow.insertCell();
  tbContent = document.createTextNode(harcama);
  tbCell.appendChild(tbContent);

  tbCell = tbRow.insertCell();
  tbContent = document.createTextNode("🗑");
  tbCell.appendChild(tbContent);

  // Tablo formuna eklemek için
  formTablo.appendChild(tbody);
  document.querySelector(".tablo-formu").appendChild(formTablo);
}

function updateTableBody(tableElement) {
  // Satır oluşturmak ve verileri hücrelere eklemek için
  const tbody = tableElement.querySelector("tbody");
  let tarih = document.querySelector("#tarih").value;
  let harcama = document.querySelector("#harcama").value;
  let aciklama = document.querySelector("#harcama-aciklama-input").value;

  const tbRow = tbody.insertRow();
  let tbCell = tbRow.insertCell();
  let tbContent = document.createTextNode(tarih);
  tbCell.appendChild(tbContent);

  tbCell = tbRow.insertCell();
  tbContent = document.createTextNode(aciklama);
  tbCell.appendChild(tbContent);

  tbCell = tbRow.insertCell();
  tbContent = document.createTextNode(harcama);
  tbCell.appendChild(tbContent);

  tbCell = tbRow.insertCell();
  tbContent = document.createTextNode("🗑");
  tbCell.appendChild(tbContent);
}

function totalExpense() {
  let giderler = document.querySelector("#harcama").value;
  document.querySelector(".sonuc-gider").textContent += Number(giderler); //!!concatinate yapıyor
}

//? Gelir eklemek için
let toplamGelir = 0;
ekle.addEventListener("click", () => {
  if (document.querySelector("#gelir").value === "") {
    alert("Lütfen bu alanları doldurunuz");
  } else {
    toplamGelir += Number(gelir.value);
    document.querySelector(".sonuc-gelir").textContent = toplamGelir;
    // console.log(toplamGelir);
  }
  gelir.value = "";
  // localStorage.setItem("gelir", toplamGelir);
  // localStorage.clear();
});

//!Geliri eklemek için
// ekle.addEventListener("click", () => {
//   // const gelir = document.querySelector('#gelir').value;

//   const tableElement = document.querySelector(".table");
//   // Eğer tablo varsa sadece tbody içeriğini güncellemek için
//   if (tableElement) {
//     if (document.querySelector("#gelir").value === "") {
//       alert("Lütfen bu alanları doldurunuz");
//     } else {
//       // tbody içeriğini güncellemek için
//       updateTableBodyTotal(tableElement);
//     }
//   } else {
//     if (document.querySelector("#gelir").value === "") {
//       alert("Lütfen bu alanları doldurunuz");
//     } else {
//       // Tablo yoksa yeni bir tablo oluşturmak için
//       createTableTotal();
//     }
//   }
// });

// function updateTableBodyTotal(tableElement) {
//   const tbody = tableElement.querySelector("tbody");
//   let gelir = document.querySelector("#gelir").value;
//   const tbRow = tbody.insertRow();
//   let tbCell = tbRow.insertCell();
//   let tbContent = document.createTextNode(gelir);
//   tbCell.appendChild(tbContent);
// }

// function createTableTotal(){
//     const hasilatTablo = document.createElement("table");
//     hasilatTablo.classList.add("hasilat-table");
//     const hasilatRow = hasilatTablo.insertRow();

//     document.querySelector(".hasilat").appendChild(hasilatTablo);
// }
