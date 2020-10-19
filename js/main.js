$(document).ready(function() {
    $("a.nav-link").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            esing: "swing"  
        });
        return false;
    });
});