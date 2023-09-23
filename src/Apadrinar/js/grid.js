var donacion = 0;
var monto = 0;
    var elementos = [
      {
        path: "img/Gato1.jpg",
        nombre: "Simón",
        valorDonado: 154320
      },
      {
        path: "img/Gato2.jpg",
        nombre: "Nala",
        valorDonado: 76890
      },
      {
        path: "img/Gato3.jpeg",
        nombre: "Simba",
        valorDonado: 112750
      },
      {
        path: "img/Gato4.jpg",
        nombre: "Toby",
        valorDonado: 86420
      },
      {
        path: "img/Gato5.webp",
        nombre: "Jack",
        valorDonado: 182150
      },
      {
        path: "img/Gato6.jpg",
        nombre: "Zoe",
        valorDonado: 51870
      },
      {
        path: "img/Gato7.png",
        nombre: "Milo",
        valorDonado: 125590
      },
      {
        path: "img/Gato8.jpg",
        nombre: "Lily",
        valorDonado: 99330 
      },
      {
        path: "img/Gato9.png",
        nombre: "Apolo",
        valorDonado: 167260
      },
    ];
  
document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.querySelector('.grid-container');

    elementos.forEach((elemento, index) => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    const imagen = document.createElement('img');
    imagen.src = elemento.path;
    imagen.alt = "Imagen de " + elemento.nombre;
    imagen.id = `${index + 1}`;
    imagen.onclick = function() {
      donacion = parseInt(imagen.id);//Gato seleccionado
      console.log(donacion);
      const popup = document.getElementById(`popup`);
      popup.style.display = "block";
      monto = elementos[donacion - 1].valorDonado;
    };

    gridItem.appendChild(imagen);

    const dataParagraphs = [
      `Nombre: ${elemento.nombre}`,
      `Valor donado: <span id="donado_${index + 1}">${elemento.valorDonado}</span>`
    ];
    
    dataParagraphs.forEach(text => {
      const p = document.createElement("p");
      p.innerHTML = text;
      gridItem.appendChild(p);
    });

    gridContainer.appendChild(gridItem);
  });
  
});

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
      popup.style.display = 'none';
  }
}

function convertirStringAEntero(str) {
    // Elimina todos los caracteres no numéricos usando una expresión regular
    var numeroEntero = parseInt(str.replace(/[^0-9]/g, ''), 10);
    return numeroEntero;
  }

function donar() {
  console.log("Este es el monto actual" + monto);
  var inputMonto = document.getElementById("monto");
  var valorMonto = inputMonto.value;
  var valorSumar = convertirStringAEntero(valorMonto);
  console.log("Este es el a sumar" + valorSumar);
  var suma = valorSumar + monto; // valor de la suma
  console.log("El resultado de la suma es" + suma);
  //const ubicacion = donacion;
  elementos[donacion-1].valorDonado = suma;
  document.getElementById("donado_" + donacion).textContent = `${suma}`;
  closePopup("popup");
}

