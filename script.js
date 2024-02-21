$(document).ready(function () {
    $("li").hover(function () {
        $(this).children('ul').css({
            "display": "block",
            "background-color": "#2f2f2f",
            "color": "white"
        });
        $(this).find('ul').addClass("animate__animated animate__flipInY");
        $(this).find('li').addClass("animate__animated animate__fadeInLeft animate__delay-400ms");
    },
        function () {
            $(this).children('ul').css({
                "display": "none",
                "background-color": "#2f2f2f",
            });
        });
    /*$(this).children('ul').addClass("hover");
    },
    function() {
        $(this).children('ul').removeClass("hover");
    });
    $("p").hover(function() {
        $(this).css("background-color", "green");
    }, function() {
        $(this).css("background-color", "yellow");
    });*/
});
