$(document).ready(function() {
    // Toggle class to show/hide submenus
    $('.nav-side-menu li > a').on('click', function(e) {
        e.preventDefault(); // Previne a ação padrão do link
        
        const submenu = $(this).next('.sub-menu'); // Seleciona o submenu
        submenu.toggleClass('show'); // Alterna a classe 'show' para abrir/fechar

        // Alterna a classe 'expanded' na seta
        const arrow = $(this).find('.arrow');
        arrow.toggleClass('expanded');
        $('.collapsed').on('click', function() {
            $(this).toggleClass('expanded');
    });
});
