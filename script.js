document.addEventListener("DOMContentLoaded", () => {
  const countryContainer = document.getElementById("countryContainer");

  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data.forEach(country => {
        const card = document.createElement('div');
        card.className = 'col col-lg-4 col-sm-12';

        card.innerHTML = `
    <div class="card">
      <h2 class="card-header">
          ${country.name.common}
          <h2>
    <img title="${country.latlng[0]} ${country.latlng[1]}" src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}" height="200px">
      <div class="card-body">
        <div class="card-text">Capital: ${country.capital}</div>
        <div class="card-text">Region: ${country.region}</div>
        <div class="card-text">Country Code: ${country.cioc}</div>
        <button class="btn btn-primary">Click for weather</button>
      </div>
    </div>
  `;

        const weatherButton = card.querySelector('.btn-primary');
        weatherButton.addEventListener('click', () => {
          // Here you would implement the weather functionality
          console.log(`Fetching weather for ${country.capital}`);
        });

        countryContainer.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching countries:', error));
});
