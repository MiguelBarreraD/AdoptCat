const popupsData = [
        {   
            imagePath: "img/Gato1.avif",
            name: "Simón",
            gender: "Macho",
            age: "2 años",
            breed: "Persa",
            location: "Bogotá",
            status: "En adopción"
        },
        {
            imagePath: "img/Gato2.webp",
            name: "Luna",
            gender: "Hembra",
            age: "1 año",
            breed: "Siamesa",
            location: "Medellín",
            status: "En adopción"
        },
        {
            imagePath: "img/Gato3.jpg",
            name: "Max",
            gender: "Macho",
            age: "3 años",
            breed: "Maine Coon",
            location: "Cali",
            status: "En adopción"
        },
        {
            imagePath: "img/Gato4.jpg",
            name: "Bella",
            gender: "Hembra",
            age: "6 meses",
            breed: "Scottish Fold",
            location: "Barranquilla",
            status: "En adopción"
        },
        {
            imagePath: "img/Gato5.jpg",
            name: "Oliver",
            gender: "Macho",
            age: "4 años",
            breed: "Bengalí",
            location: "Cartagena",
            status: "En adopción"
        },
        {
            imagePath: "img/Gato6.jpg",
            name: "Chloe",
            gender: "Hembra",
            age: "1 año",
            breed: "Ragdoll",
            location: "Bucaramanga",
            status: "En adopción"
        },
        {
            imagePath: "img/Gato7.jpg",
            name: "Leo",
            gender: "Macho",
            age: "1 mes",
            breed: "Sphynx",
            location: "Pereira",
            status: "En adopción"
        },
        {
            imagePath: "img/Gato8.jpg",
            name: "Mia",
            gender: "Hembra",
            age: "8 meses",
            breed: "British Shorthair",
            location: "Cúcuta",
            status: "En adopción"
        },
        {
            imagePath: "img/Gato9.jpg",
            name: "Charlie",
            gender: "Macho",
            age: "3 años",
            breed: "Exótico de Pelo Corto",
            location: "Santa Marta",
            status: "En adopción"
        }
    ];
document.addEventListener("DOMContentLoaded", function() {
    
    const body = document.body;

    popupsData.forEach((data, index) => {
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.id = `${index + 1}popup`;

        const popupContent = document.createElement("div");
        popupContent.className = "popup-content";

        const closeSpan = document.createElement("span");
        closeSpan.className = "close";
        closeSpan.textContent = "×";
        closeSpan.onclick = function() {
            closePopup(index + 1);
        };

        const popupImage = document.createElement("div");
        popupImage.className = "popup-image";
        const img = document.createElement("img");
        img.src = data.imagePath;
        img.alt = "Imagen " + (index + 1);
        img.onclick = function(){
            estadoM = parseInt(img.id);
            console.log(estadoM);
        }
        popupImage.appendChild(img);

        const popupData = document.createElement("div");
        popupData.className = "popup-data";

        const h3 = document.createElement("h3");
        h3.textContent = "Información General";

        popupData.appendChild(h3);

        const dataParagraphs = [
            { label: 'Nombre', value: data.name },
            { label: 'Género', value: data.gender },
            { label: 'Edad', value: data.age },
            { label: 'Raza', value: data.breed },
            { label: 'Ubicación', value: data.location },
            { label: 'Estado', value: data.status, id: 'estado_' + (index + 1) } // Cambia 'estado_id' a un ID único
          ];
          
          dataParagraphs.forEach(item => {
            const p = document.createElement('p');
            if (item.label === 'Estado' && item.id) {
              // Si es el elemento 'Estado' y tiene un ID, añade el ID
              p.innerHTML = `${item.label}: <span id="${item.id}">${item.value}</span>`;
            } else {
              // En otros casos, no añade un ID
              p.textContent = `${item.label}: ${item.value}`;
            }
            popupData.appendChild(p);
          });
          

        const adoptButton = document.createElement("button");
        adoptButton.className = "adopt-button";
        adoptButton.textContent = "Adoptar";
        adoptButton.setAttribute("data-popup-number", index + 1);
        adoptButton.onclick = adoptCat;
        popupData.appendChild(adoptButton);

        popupContent.appendChild(closeSpan);
        popupContent.appendChild(popupImage);
        popupContent.appendChild(popupData);

        popup.appendChild(popupContent);
        body.appendChild(popup);
    });
});

 
function adoptCat(event) {
    const button = event.target;
    const popupNumber = button.getAttribute("data-popup-number");
    const popupIndex = popupNumber;
    if (popupsData[popupIndex]) {
        if (popupsData[popupIndex].status === "En adopción") {
            popupsData[popupIndex].status = "Adoptado";
            document.getElementById("estado_" + popupIndex).textContent = "Adoptado";

        } else {
            alert("¡Este gato ya ha sido adoptado!");
        }
    }
}

function openPopup(popupNumber) {
    const popup = document.getElementById(`${popupNumber}popup`);
    popup.style.display = "block";
}

function closePopup(popupNumber) {
    const popup = document.getElementById(`${popupNumber}popup`);
    popup.style.display = "none";
}