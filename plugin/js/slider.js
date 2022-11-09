$(document).ready(function() {

    var slide = $(".div-slider [type=radio]");
    var slide_tamanho = slide.length;
    var intervalo = 4;

    function rodar() {
        var slide_ativo = $(".div-slider [type=radio]:checked")
            .attr("id")
            .match(/\d+/)[0];

        if (slide_ativo == slide_tamanho)
            slide_ativo = 0;

        slide.eq(slide_ativo).prop("checked", true);
    }

    var tempo = setInterval(rodar, intervalo * 1000);

    $(".div-slider").hover(
        function() {
            clearInterval(tempo);
        },
        function() {
            tempo = setInterval(rodar, intervalo * 1000);
        }
    );

});