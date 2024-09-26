$(document).ready(function () {
    // Inicialização do comportamento das abas
    $('#nav-tab a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});
