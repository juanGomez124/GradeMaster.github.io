 // Cambiar el tamaño de la letra
 document.getElementById('fontSize').addEventListener('change', function() {
    const fontSize = this.value;
    document.body.style.fontSize = fontSize;
});

// Cambiar el modo claro/oscuro
document.getElementById('theme').addEventListener('change', function() {
    const theme = this.value;
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#333';
    }
});

// Cambiar la fuente
document.getElementById('fontFamily').addEventListener('change', function() {
    const fontFamily = this.value;
    document.body.style.fontFamily = fontFamily;
});

// Cambiar el espaciado entre líneas
document.getElementById('lineSpacing').addEventListener('change', function() {
    const lineSpacing = this.value;
    document.body.style.lineHeight = lineSpacing;
});

// Cambiar el estilo del botón
document.getElementById('buttonStyle').addEventListener('change', function() {
    const buttonStyle = this.value;
    const button = document.getElementById('backBtn');
    if (buttonStyle === 'rounded') {
        button.classList.add('rounded-lg');
        button.classList.remove('rounded-none');
    } else {
        button.classList.add('rounded-none');
        button.classList.remove('rounded-lg');
    }
});

// Redirigir a inicio.html
document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'inicio.html';
});