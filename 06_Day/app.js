const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const input = document.querySelector("input");
const suggestions = document.querySelector(".suggestions");

let cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

input.addEventListener("input", (e) => {
  //   console.log(input.value);
  suggestions.innerHTML = "";
  displayMatches(findMatches(input.value, cities), input.value);
  if (input.value === "") {
    suggestions.innerHTML = "<li>Filter for a city</li><li>or a state</li>";
  }
});

// console.log(findMatches("West", cities));

function numberWithComas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const displayMatches = (matchArray, value) => {
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${value}</span>`
      );
      return `
      <li>
        <span class="name">${cityName} ,${stateName} </span>
        <span class="population">${numberWithComas(place.population)}</span>
      </li>
      `;
    })
    .join("");
  suggestions.innerHTML = html;
};
