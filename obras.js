// Obtener elementos del DOM
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalDescription = document.getElementById('modal-description');

// Función para abrir el modal
function openModal(imageId) {
    // Configurar la imagen y la descripción basadas en el ID
    let imageSrc, descriptionText;
    switch (imageId) {
        case 1:
            imageSrc = 'Das-Abendmahl-Restaurierte-Version.jpg';
            descriptionText = 'La Última Cena, obra de Leonardo da Vinci.';
            break;
        case 2:
            imageSrc = 'creacion.jpeg';
            descriptionText = 'La Creación de Adán, de Miguel Ángel.';
            break;
        case 3:
            imageSrc = 'escuela.jpeg';
            descriptionText = 'La Escuela de Atenas, de Rafael.';
            break;
        default:
            imageSrc = '';
            descriptionText = 'Sin descripción disponible.';
    }

    // Mostrar la imagen y la descripción en el modal
    modalImg.src = imageSrc;
    modalDescription.textContent = descriptionText;

    // Mostrar el modal
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}
