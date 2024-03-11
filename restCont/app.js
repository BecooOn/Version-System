const countries = document.querySelector("#ulkeler");
const flag = document.querySelector(".flag");
const nameSpan = document.querySelector(".nameSpan");
const capitalSpan = document.querySelector(".capitalSpan");
const populationSpan = document.querySelector(".populationSpan");
const regionSpan = document.querySelector(".regionSpan");
// const btn = document.querySelector(".btn");

const getCountry = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    if (!res.ok) {
      throw new Error(`Something went wrong ${res.status}`);
    }
    const data = await res.json();
    // return data;
    countryFunc(data);
  } catch (error) {
    const img = document.createElement("img");
    img.src = "./img/404.png";
    img.alt = "error";
    document.querySelector("body").appendChild(img);
  }
};
const countryFunc = (country) => {
  country.map((item) => {
    const option = document.createElement("option");
    option.value = item.name.common;
    option.textContent = `${item.name.common}`;
    countries.append(option);
  });
};

getCountry();

// let randomNumber = Math.floor(Math.random() * country.length);
// const selectedCountry = country[randomNumber];
// // console.log(selectedCountry);
// flag.setAttribute("src", selectedCountry.flags.png);
// nameSpan.textContent = `${selectedCountry.name.common}`;
// capitalSpan.textContent = `Capital: ${selectedCountry.capital}`;
// populationSpan.textContent = `Population: ${selectedCountry.population}`;
// regionSpan.textContent = `Region: ${selectedCountry.region}`;
// countries.style.display = "block";
