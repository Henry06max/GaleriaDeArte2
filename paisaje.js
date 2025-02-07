// Función para abrir el modal
function openModal(imageSrc, description) {
    // Acceder al modal y a sus elementos
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var modalDesc = document.getElementById("modal-description");

    // Asignar la ruta de la imagen y la descripción al modal
    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalDesc.textContent = description;
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
