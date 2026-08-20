$(document).ready(function () {

    $("#btnTema").click(function () {

        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            $(this).text("Modo Claro");
        } else {
            $(this).text("Modo Oscuro");
        }

    });

});