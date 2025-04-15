window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {  // Si el scroll es mayor a 50px
      navbar.classList.add('scrolled');  // Agrega clase para color sólido
    } else {
      navbar.classList.remove('scrolled');  // Quita la clase para hacerlo transparente
    }
  });