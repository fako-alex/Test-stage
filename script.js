// Afficher toutes les images au chargement initial

document.addEventListener("DOMContentLoaded", function () {
    filterImages("tous"); // Afficher toutes les images au chargement initial
});

function filterImages(category) {
    const images = document.querySelectorAll(".image-gallery img");

    images.forEach((image) => {
        const categories = image.getAttribute("data-categories").split(" ");

        if (category === "tous" || categories.includes(category)) {
            image.style.display = "inline-block";
        } else {
            image.style.display = "none";
        }
    });

    // Ajustement de la disposition en fonction du filtre
    const galleryContainer = document.querySelector(".image-gallery");
    galleryContainer.classList.remove("column-layout", "row-layout");

    if (category === "maison") {
        galleryContainer.classList.add("column-layout");
    } else {
        galleryContainer.classList.add("row-layout");
    }
}
