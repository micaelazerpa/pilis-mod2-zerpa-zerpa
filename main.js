
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
        Swal.fire(
            'Enviado',
            'Gracias por tu comentario',
            'success'
        );
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