$(document).ready(function () {

    // MENU ACTIONS
    $(".toggle-sidebar").click(function (event) {
        event.preventDefault();
        if (!$(".left-aside").hasClass("aside-close")) {
            $(".left-aside").toggleClass("aside-close");
            $(".left-aside").animate({
                flex: "0 0 50px"
            }, function () {
                $(".main-section").toggleClass("col-11");
            });
        } else {
            $(".main-section").toggleClass("col-11");
            $(".left-aside").animate({
                flex: "0 0 25%"
            }, function () {
                $(this).toggleClass("aside-close");
            });
        }
    });

});
