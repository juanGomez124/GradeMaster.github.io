document.addEventListener('DOMContentLoaded', function() {
    const userMenuBtn = document.getElementById('user-menu-btn');
    const userDropdown = document.getElementById('user-dropdown');
    const logoutLink = document.getElementById('logout-link');
    const usernameDisplay = document.getElementById('username-display');
    const loginModalBtn = document.getElementById('login-modal-btn');
    const loginModal = document.getElementById('login-modal');
    const loginForm = document.getElementById('login-form');

    // Simulating initial login as 'admin'
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', 'admin');
    
    // Check login status
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const username = localStorage.getItem('username');

        if (isLoggedIn && username) {
            userMenuBtn.classList.remove('hidden');
            loginModalBtn.classList.add('hidden');
            usernameDisplay.textContent = username;
        } else {
            userMenuBtn.classList.add('hidden');
            loginModalBtn.classList.remove('hidden');
        }
    }

    // Toggle dropdown menu
    userMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        userDropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        userDropdown.classList.add('hidden');
    });

    // Prevent dropdown from closing when clicking inside
    userDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    /// Logout functionality
    logoutLink.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        checkLoginStatus();

        // Redirigir a pagina.html
        window.location.href = 'pagina.html';
    });

    // Open login modal
    loginModalBtn.addEventListener('click', function() {
        loginModal.classList.remove('hidden');
    });

    // Close modal when clicking outside
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.classList.add('hidden');
        }
    });

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple login validation (replace with your actual authentication logic)
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            loginModal.classList.add('hidden');
            checkLoginStatus();
        } else {
            alert('Credenciales incorrectas');
        }
    });

    // Initial login status check
    checkLoginStatus();
});
 // Enlace de navegación para "Contacto"
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Función para crear el archivo .txt con la información del formulario
function exportContactToTxt(event) {
event.preventDefault();  // Evitar que el formulario se envíe normalmente

// Obtener los valores del formulario
const nombre = document.getElementById('nombre').value;
const email = document.getElementById('email').value;
const mensaje = document.getElementById('mensaje').value;

// Crear contenido del archivo .txt
let exportContent = `Solicitud de Contacto\n\n`;
exportContent += `Nombre: ${nombre}\n`;
exportContent += `Email: ${email}\n`;
exportContent += `Mensaje:\n${mensaje}\n`;

// Crear el Blob con el contenido
const blob = new Blob([exportContent], { type: 'text/plain' });

// Crear un enlace de descarga
const a = document.createElement('a');
const url = URL.createObjectURL(blob);  // Crear la URL del archivo
a.href = url;
a.download = `solicitud_contacto_${nombre.replace(' ', '_')}.txt`; // Nombre del archivo
document.body.appendChild(a);  // Añadir el enlace al DOM
a.click();  // Hacer clic en el enlace para iniciar la descarga
document.body.removeChild(a);  // Eliminar el enlace después de la descarga
URL.revokeObjectURL(url);  // Revocar la URL del objeto para liberar memoria
}