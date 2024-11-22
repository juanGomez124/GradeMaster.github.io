 // Mostrar más detalles al hacer clic en "Mostrar Más"
 document.getElementById('showMoreBtn').addEventListener('click', function() {
    const moreDetails = document.getElementById('moreDetails');
    const showMoreBtn = document.getElementById('showMoreBtn');
    if (moreDetails.classList.contains('hidden')) {
        moreDetails.classList.remove('hidden');
        showMoreBtn.textContent = "Mostrar Menos";
    } else {
        moreDetails.classList.add('hidden');
        showMoreBtn.textContent = "Mostrar Más";
    }
});

// Guardar cambios en el formulario de contraseña
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valor de la contraseña
    const newPassword = document.getElementById('editPassword').value;

    // Mostrar alerta con el nuevo valor de contraseña
    alert(`Contraseña actualizada: ${newPassword}`);
});
document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'inicio.html';
});