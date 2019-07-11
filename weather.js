class Weather {
  constructor(city) {
    this.apiKey = "252db425931eb0934d53ef76f04c4a93";
    this.city = city;
    // this.state = state;
  }

  // Fetch Weatehr from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${
        this.apiKey
      }&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }
  // Change Location
  changeLocation(city) {
    this.city = city;
    // this.state = state;
  }
}
