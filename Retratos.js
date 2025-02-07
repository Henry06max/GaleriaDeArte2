// Seleccionar elementos del DOM
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");

// Obtener todas las imágenes de retratos
const portraits = document.querySelectorAll(".portrait");

portraits.forEach((portrait) => {
    portrait.addEventListener("click", () => {
        // Mostrar el modal
        modal.style.display = "flex";

        // Establecer la imagen del modal y la descripción
        const img = portrait.querySelector("img");
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        captionText.textContent = portrait.dataset.description || "Sin descripción disponible.";
    });
});

// Cerrar el modal al hacer clic en la "X"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
