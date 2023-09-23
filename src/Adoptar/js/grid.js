
document.addEventListener("DOMContentLoaded", function() {
    const imagePaths = ["img/Gato1.avif", "img/Gato2.webp", "img/Gato3.jpg",
                "img/Gato4.jpg","img/Gato5.jpg","img/Gato6.jpg","img/Gato7.jpg",
                "img/Gato8.jpg","img/Gato9.jpg"];
    const paragraphs = ["Simón", "Luna", "Max","Bella","Oliver","Chloe","Leo","Mia","Charlie"];

    const container = document.getElementById("grid-container");

    for (let i = 0; i < imagePaths.length; i++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";

        const img = document.createElement("img");
        img.src = imagePaths[i];
        img.alt = "Imagen " + (i + 1);
        img.onclick = function() {
            openPopup(i + 1);
        };

        const paragraph = document.createElement("p");
        paragraph.textContent = paragraphs[i];
        gridItem.appendChild(img);
        gridItem.appendChild(paragraph);
        container.appendChild(gridItem);
    }
});


