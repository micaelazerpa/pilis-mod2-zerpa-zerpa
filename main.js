async function getIp() {
  try {
    // let response = await fetch("https://api.ipify.org/?format=json");
    // let ipResponse = await response.json();
    // console.log(ipResponse);

    // let responseLocation = await fetch(
    //   "http://ip-api.com/json/" + ipResponse.ip
    // );
    // let locationResponse = await responseLocation.json();
    // console.log(locationResponse);

    let tempValor = document.getElementById("temp-valor");
    let tempDescription = document.getElementById("temp-descripcion");

    let ubicacion = document.getElementById("ubicacion");
    let icono = document.getElementById("icono-animado");

    const url =
      "https://api.openweathermap.org/data/2.5/forecast?lat=-24.18314364081898&lon=-65.33128717381898&cnt=24&appid=71042bfca42d64e948c855305b05fe18";
    let responseEvento = await fetch(url);

    let locationEvento = await responseEvento.json();
    console.log(locationEvento);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let temp = Math.round(data.list[0].main.temp);
        tempValor.textContent = `${temp} °C`;
        let desc = data.list[0].weather[0].description;
        tempDescription.textContent = desc.toUpperCase();
        let ubic = data.city.name;
        ubicacion.textContent = ubic;

        //Para iconos
        const climas = {
          Clouds: "animated/cloudy-day-1.svg",
          Thunderstor: "animated/thunder.svg",
          Drizzle: "Drizzle",
          Rain: "animated/rainy-7.svg",
          Snow: "animated/snowy-6.svg",
          Clear: "animated/day.svg",
          defecto: "animated/cloudy-day-1.svg",
        };

        for (const clima in climas) {
          if (clima == data.list[0].weather[0].main) {
            console.log(clima);
            icono.src = climas[clima];
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch {
    console.log("Error al mostrar el clima");
  }
}
getIp();
