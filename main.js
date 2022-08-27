async function getIp() {
  try {
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


function onClick (event) {
  event.preventDefault();
  this.style.backgroundColor = "black";
  console.log("click...");
  console.log(event);


  const mensaje = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  }
  console.log(mensaje);


  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => { 
        console.log(json);
    /*     Swal.fire(
            'Enviado',
            'Gracias por tu comentario',
            'success'
        ); */
        Swal.fire({
          title:'Enviado..Gracias por tu comentario',
          width: 600,
          padding: '3em',
          color: '#716add',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/lluvia.gif")
            left top
            no-repeat
          `
        });
        cleanForm();
        /* redirectUrl(); */
    })
    .catch((err) => console.log(err));

}

function cleanForm() {
  let formulario = document.getElementById('formulario');    
  formulario.reset();    
}
/* function redirectUrl(){
  window.location.href = "https://google.com";    
}
 */
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

