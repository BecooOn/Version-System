const kaydet = document.querySelector(".btn-kaydet");
const ekle = document.querySelector(".btn-ekle");
const temizle = document.querySelector(".btn-temizle");




//!Clear all
temizle.addEventListener("click", () => {
  document.querySelector("#tarih").value = "";
  document.querySelector("#harcama").value = "";
  document.querySelector("#harcama-aciklama-input").value = "";
  document.querySelector("#gelir").value = "";
  document.querySelector(".tablo-formu").firstElementChild.remove();
  document.querySelector(".hasilat").firstElementChild.remove();
});
