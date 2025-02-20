document.querySelector('.button-element').addEventListener('click', () => {
  getData();
});

async function getData() {
  const cityName = document.querySelector('.city').value;
  //An API key is like a password that allows you to access the weather data from the API.
  const apiKey = '315c1f315179407e89d120352252002';
  // https://api.weatherapi.com/v1/current.json → Base API URL.
  //?key=YOUR_API_KEY → API authentication.
  // &q=CITY_NAME → Query parameter
  // 
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      document.querySelector('.p-element').innerHTML = 'City not Found';
    } else {
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      setTimeout(() => {
        document.querySelector('.p-element').innerHTML = `🌡${temp}°C - ${condition}`;
      }, 2500);
      document.querySelector('.p-element').innerHTML = 'Getting...'
    }
  } catch {
    alert('Error:, error');
  }
}
