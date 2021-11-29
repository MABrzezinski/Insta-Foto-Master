$(document).ready(function(){
    $('.tworcy_karuzela').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        responsive: 
        [
            {
                breakpoint: 992,
                settings: 
                {
                    initialSlide: 2.1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: 
                {
                    initialSlide: 1.1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: 
                {
                    initialSlide: 0.65,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1.5
                }
            }
        ]
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
});

$(window).on('load', function(){
    $("#preset_container1").twentytwenty();
    
    $("#preset_container2").twentytwenty();
    $("#preset_container3").twentytwenty();
    $("#preset_container4").twentytwenty();
    $("#preset_container5").twentytwenty();
    
    $("#preset_container2").hide();
    $("#preset_container3").hide();
    $("#preset_container4").hide();
    $("#preset_container5").hide();
    
    
    
});

$( "#preset1" ).click(function() {
    $( "#preset1" ).removeClass( 'preset_select_active', 100);
    $( "#preset2" ).removeClass( 'preset_select_active', 100);
    $( "#preset3" ).removeClass( 'preset_select_active', 100);
    $( "#preset4" ).removeClass( 'preset_select_active', 100);
    $( "#preset5" ).removeClass( 'preset_select_active', 100);
    $( this ).addClass( 'preset_select_active', 100);

    $( "#preset_container2" ).hide();
    $( "#preset_container3" ).hide();
    $( "#preset_container4" ).hide();
    $( "#preset_container5" ).hide();
    $( "#preset_container1" ).show();

});
$( "#preset2" ).click(function() {
    $( "#preset1" ).removeClass( 'preset_select_active', 100);
    $( "#preset2" ).removeClass( 'preset_select_active', 100);
    $( "#preset3" ).removeClass( 'preset_select_active', 100);
    $( "#preset4" ).removeClass( 'preset_select_active', 100);
    $( "#preset5" ).removeClass( 'preset_select_active', 100);
    $( this ).addClass( 'preset_select_active', 100);

    $( "#preset_container1" ).hide();
    $( "#preset_container3" ).hide();
    $( "#preset_container4" ).hide();
    $( "#preset_container5" ).hide();
    $( "#preset_container2" ).show();

});
$( "#preset3" ).click(function() {
    $( "#preset1" ).removeClass( 'preset_select_active', 100);
    $( "#preset2" ).removeClass( 'preset_select_active', 100);
    $( "#preset3" ).removeClass( 'preset_select_active', 100);
    $( "#preset4" ).removeClass( 'preset_select_active', 100);
    $( "#preset5" ).removeClass( 'preset_select_active', 100);
    $( this ).addClass( 'preset_select_active', 100);

    $( "#preset_container1" ).hide();
    $( "#preset_container2" ).hide();
    $( "#preset_container4" ).hide();
    $( "#preset_container5" ).hide();
    $( "#preset_container3" ).show();

});
$( "#preset4" ).click(function() {
    $( "#preset1" ).removeClass( 'preset_select_active', 100);
    $( "#preset2" ).removeClass( 'preset_select_active', 100);
    $( "#preset3" ).removeClass( 'preset_select_active', 100);
    $( "#preset4" ).removeClass( 'preset_select_active', 100);
    $( "#preset5" ).removeClass( 'preset_select_active', 100);
    $( this ).addClass( 'preset_select_active', 100);

    $( "#preset_container1" ).hide();
    $( "#preset_container2" ).hide();
    $( "#preset_container3" ).hide();
    $( "#preset_container5" ).hide();
    $( "#preset_container4" ).show();

});
$( "#preset5" ).click(function() {
    $( "#preset1" ).removeClass( 'preset_select_active', 100);
    $( "#preset2" ).removeClass( 'preset_select_active', 100);
    $( "#preset3" ).removeClass( 'preset_select_active', 100);
    $( "#preset4" ).removeClass( 'preset_select_active', 100);
    $( "#preset5" ).removeClass( 'preset_select_active', 100);
    $( this ).addClass( 'preset_select_active', 100);

    $( "#preset_container1" ).hide();
    $( "#preset_container2" ).hide();
    $( "#preset_container3" ).hide();
    $( "#preset_container4" ).hide();
    $( "#preset_container5" ).show();

});