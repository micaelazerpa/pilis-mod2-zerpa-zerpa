
async function getIp() {
  try {
    let response = await fetch("https://api.ipify.org/?format=json");
    let ipResponse = await response.json();
    console.log(ipResponse);

    let responseLocation = await fetch("http://ip-api.com/json/" + ipResponse.ip);
    let locationResponse = await responseLocation.json();
    console.log(locationResponse);

    let responseEvento = await fetch("api.openweathermap.org/data/2.5/forecast?lat=-24.18847&lon=-65.29989&appid=66316d0d6ee670997f4c51bfe416f342"); 
    /* let responseEvento = await fetch("https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=-24.18847&lon=-65.29989&appid=66316d0d6ee670997f4c51bfe416f342"); */
    let locationEvento = await responseEvento.json();
    console.log(locationEvento);
  } catch {
    console.log("Error al mostrar el clima");
  }
}
getIp();