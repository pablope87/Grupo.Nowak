<!-- Jquery needed -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!-- Function used to shrink nav bar removing paddings and adding black background -->
<script>
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.nav').addClass('affix');
            $('.nav a').css('color', 'white'); // Cambia los enlaces a blanco
            $('.navTrigger i').css('background-color', 'white'); // Cambia los enlaces a blanco
            $('.logo img').attr('src', './img/logo/logo-blanco.svg'); // Cambia el logo
        } else {
            $('.nav').removeClass('affix');
            $('.nav a').css('color', 'black');
            $('.navTrigger i').css('background-color', 'black'); // Vuelve a negro
            $('.logo img').attr('src', './img/logo/logo-negro.svg'); // Restaura el logo original
}
});
</script>