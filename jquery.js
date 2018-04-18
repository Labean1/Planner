var $ = require('jQuery');
module.exports =
    $(document).ready(function () {
        $(".btnSlide").hover(function () {
            $(".slidePanel").addClass("active");
            $(".btnSlide").addClass("off");
            return 0;
            });
        // $(".slidePanel").hover(function () {
        //     $(".btnSlide").toggleClass("off");
        //     $(".slidePanel").toggleClass("active");
        //     return 0;
        //     });
        $("#parent").hover(function () {
            $(".slidePanel").removeClass("active");
            $(".btnSlide").removeClass("off");
        })
        $("#content").hover(function () {
            $(".slidePanel").removeClass("active");
            $(".btnSlide").removeClass("off");
        })
    })
