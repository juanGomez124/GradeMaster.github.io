//index
    const careerSelect = document.getElementById('career');
    const semesterSelect = document.getElementById('semester');
    const subjectsContainer = document.getElementById('subjects-container');
    const totalAverage = document.getElementById('total-average');

    const subjectsByCareerAndSemester = {
      'ingenieria-informatica': {
        '1': [
          { name: 'Programación', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Bases de Datos', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Matemáticas Discretas', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Fundamentos de Redes', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Cálculo', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Álgebra Lineal', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
        ],
        '2': [
          { name: 'Programación II', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Sistemas Operativos', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Estructuras de Datos', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Matemáticas II', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Electrónica', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Física', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
        ],
        '3': [
          { name: 'Bases de Datos Avanzadas', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Redes de Computadoras', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Programación Web', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Matemáticas III', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Ingeniería de Software', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Arquitectura de Computadoras', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
        ],
        '4': [
          { name: 'Inteligencia Artificial', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Seguridad Informática', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Desarrollo Móvil', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Sistemas Distribuidos', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Computación en la Nube', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
        ],
        '5': [
          { name: 'Machine Learning', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Big Data', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Robótica', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Internet de las Cosas', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Computación Gráfica', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
        ],
        '6': [
          { name: 'Blockchain', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Ciberseguridad', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Computación Cuántica', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Inteligencia Artificial Avanzada', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
        ],
        '7': [
          { name: 'Proyecto de Investigación', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Algoritmos Avanzados', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Análisis de Datos', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
        ],
        '8': [
        { name: 'Proyecto de Grado I', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Seminario de Investigación', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
      ],
      '9': [
        { name: 'Proyecto de Grado II', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
      ],
      '10': [
        { name: 'Trabajo de Titulación', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
      ]
        // ... (resto de semestres para Ingeniería Informática)
      },
      'derecho': {
        '1': [
          { name: 'Derecho Penal', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Derecho Civil', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Derecho Constitucional', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Derecho Romano', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
          { name: 'Introducción al Derecho', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
        ],
        '2': [
        { name: 'Derecho Penal Especial', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Derecho Civil Patrimonial', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Derecho Administrativo', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Teoría del Estado', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Filosofía del Derecho', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Sociología Jurídica', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
      ],
      '3': [
        { name: 'Derecho Mercantil', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Derecho Laboral', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Derecho Procesal Civil', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Derecho Internacional Público', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Derechos Humanos', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Derecho Financiero', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
      ],
      '4': [
        { name: 'Derecho Procesal Penal', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Derecho Internacional Privado', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Derecho Ambiental', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Derecho de Familia', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 },
        { name: 'Criminología', exam1: 20, exam2: 20, exam3: 30, workshop1: 15, workshop2: 15 }
      ],
        // ... (resto de semestres para Derecho)
      }
    };

    function loadSubjects(career, semester) {
      const subjects = subjectsByCareerAndSemester[career][semester];
      subjectsContainer.innerHTML = '';

      subjects.forEach(subject => {
        const subjectContainer = document.createElement('details');
        subjectContainer.classList.add('subject-container');
        subjectContainer.innerHTML = `
          <summary><h3 style="margin: 0">${subject.name}</h3></summary>
          <div class="info-section">
            <label>Examen 1 (20%)</label>
            <input type="number" class="exam1" min="0" max="5" value="0" step="0.1">
          </div>
          <div class="info-section">
            <label>Examen 2 (20%)</label>
            <input type="number" class="exam2" min="0" max="5" value="0" step="0.1">
          </div>
          <div class="info-section">
            <label>Examen 3 (30%)</label>
            <input type="number" class="exam3" min="0" max="5" value="0" step="0.1">
          </div>
          <div class="info-section">
            <label>Taller 1 (15%)</label>
            <input type="number" class="workshop1" min="0" max="5" value="0" step="0.1">
          </div>
          <div class="info-section">
            <label>Taller 2 (15%)</label>
            <input type="number" class="workshop2" min="0" max="5" value="0" step="0.1">
          </div>
          <div class="info-section">
            <label><strong>Promedio de materia:</strong></label>
            <span class="subject-average">0</span>
          </div>
        `;
        subjectsContainer.appendChild(subjectContainer);
      });

      updateTotalAverage();
    }

    function calculateSubjectTotal(subjectContainer) {
      const exam1 = parseFloat(subjectContainer.querySelector('.exam1').value) || 0;
      const exam2 = parseFloat(subjectContainer.querySelector('.exam2').value) || 0;
      const exam3 = parseFloat(subjectContainer.querySelector('.exam3').value) || 0;
      const workshop1 = parseFloat(subjectContainer.querySelector('.workshop1').value) || 0;
      const workshop2 = parseFloat(subjectContainer.querySelector('.workshop2').value) || 0;

      return (exam1 * 0.2) + (exam2 * 0.2) + (exam3 * 0.3) + (workshop1 * 0.15) + (workshop2 * 0.15);
    }

    function updateTotalAverage() {
      const subjectElements = subjectsContainer.querySelectorAll('.subject-container');
      let total = 0;
      let count = 0;
      
      subjectElements.forEach(subject => {
        const score = calculateSubjectTotal(subject);
        subject.querySelector('.subject-average').textContent = score.toFixed(2);
        total += score;
        count++;
      });
      
      totalAverage.textContent = count > 0 ? (total / count).toFixed(2) : '0';
    }

    function exportGradesToTxt() {
      const career = careerSelect.value;
      const semester = semesterSelect.value;
      const subjectElements = document.querySelectorAll('.subject-container');
      
      let exportContent = `Carrera: ${career.replace('-', ' ').toUpperCase()}\n`;
      exportContent += `Semestre: ${semester}\n\n`;
      
      subjectElements.forEach(subject => {
        const subjectName = subject.querySelector('summary h3').textContent;
        const exam1 = subject.querySelector('.exam1').value;
        const exam2 = subject.querySelector('.exam2').value;
        const exam3 = subject.querySelector('.exam3').value;
        const workshop1 = subject.querySelector('.workshop1').value;
        const workshop2 = subject.querySelector('.workshop2').value;
        const subjectAverage = subject.querySelector('.subject-average').textContent;
        
        exportContent += `Materia: ${subjectName}\n`;
        exportContent += `Examen 1 (20%): ${exam1}\n`;
        exportContent += `Examen 2 (20%): ${exam2}\n`;
        exportContent += `Examen 3 (30%): ${exam3}\n`;
        exportContent += `Taller 1 (15%): ${workshop1}\n`;
        exportContent += `Taller 2 (15%): ${workshop2}\n`;
        exportContent += `Promedio: ${subjectAverage}\n\n`;
      });
      
      exportContent += `Promedio Total: ${totalAverage.textContent}`;
      
      const blob = new Blob([exportContent], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `calificaciones_${career}_semestre_${semester}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    function printGrades() {
      const career = careerSelect.value;
      const semester = semesterSelect.value;
      const subjectElements = document.querySelectorAll('.subject-container');
      
      let printContent = `
        <html>
        <head>
          <title>Calificaciones</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { padding: 10px; text-align: center; border: 1px solid #ddd; }
            th { background-color: #f5f5f5; }
            .header { text-align: center; margin-bottom: 30px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>Calificaciones - ${career.replace('-', ' ').toUpperCase()}</h2>
            <h3>Semestre ${semester}</h3>
          </div>
      `;

      printContent += `
        <table>
          <tr>
            <th>Materia</th>
            <th>Examen 1</th>
            <th>Examen 2</th>
            <th>Examen 3</th>
            <th>Taller 1</th>
            <th>Taller 2</th>
            <th>Promedio</th>
          </tr>
      `;
      
      subjectElements.forEach(subject => {
        printContent += `
          <tr>
            <td>${subject.querySelector('summary h3').textContent}</td>
            <td>${subject.querySelector('.exam1').value}</td>
            <td>${subject.querySelector('.exam2').value}</td>
            <td>${subject.querySelector('.exam3').value}</td>
            <td>${subject.querySelector('.workshop1').value}</td>
            <td>${subject.querySelector('.workshop2').value}</td>
            <td><strong>${subject.querySelector('.subject-average').textContent}</strong></td>
          </tr>
        `;
      });
      
      printContent += `
          </table>
          <div style="text-align: right; margin-top: 20px;">
            <strong>Promedio Total: ${totalAverage.textContent}</strong>
          </div>
        </body>
        </html>
      `;
      
      const printWindow = window.open('', '', 'width=800,height=600');
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.print();
    }

    careerSelect.addEventListener('change', () => loadSubjects(careerSelect.value, semesterSelect.value));
    semesterSelect.addEventListener('change', () => loadSubjects(careerSelect.value, semesterSelect.value));
    subjectsContainer.addEventListener('input', updateTotalAverage);

    // Inicializar
    loadSubjects(careerSelect.value, semesterSelect.value);

//inicio 
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