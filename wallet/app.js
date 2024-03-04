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

//!Your income will be added to the table
kaydet.addEventListener("click", () => {
    const tableElement = document.querySelector(".table");
    // Eğer tablo varsa sadece tbody içeriğini güncelle
    if (tableElement) {
      // tbody içeriğini güncelle
      updateTableBody(tableElement);
    } else {
      // Tablo yoksa yeni bir tablo oluştur
      createTable();
    }
  });
  
  function createTable() {
    // Tablo oluşturuluyor
    const formTablo = document.createElement("table");
    formTablo.classList.add("table");
  
    // Başlık (thead) oluşturuluyor
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
  
    // Tablo gövdesi (tbody) oluşturuluyor
    const tbody = document.createElement("tbody");
  
    // Satır oluşturuluyor ve verileri hücrelere ekleniyor
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
  
    // Tablo formuna ekleniyor
    formTablo.appendChild(tbody);
    document.querySelector(".tablo-formu").appendChild(formTablo);
  }
  
  function updateTableBody(tableElement) {
    // Satır oluşturuluyor ve verileri hücrelere ekleniyor
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
  
