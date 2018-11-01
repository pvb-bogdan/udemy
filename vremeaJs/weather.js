class Weather {
  constructor(city) {
    this.apiKey = '3956cc231d18551ed7c58a45489ea4a9';
    this.city = city;
  }
  // fetch API weather
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);

    const responseData = await response.json();
    
    return responseData;
  }

  // chage city
  changeLocation(city){
    this.city = city;
  }
}

// {"coord":
//   {"lon":145.77,"lat":-16.92},
//   "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
//   "base":"cmc stations",
// " {"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
// "wind":{"speed":5.1,"deg":150},
// "clouds":{"all":75},
// "rain":{"3h":3},
// "dt":1435658272,
// "sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
// "id":2172797,
// "name":"Cairns",
// "cod":200}