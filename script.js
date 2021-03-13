var rv = document.getElementById("siteRV")
var tent = document.getElementById("siteTent")
var primary = "btn-primary"
var success = "btn-success"

function myFunction() {
    tent.classList.toggle(primary)
    tent.classList.toggle(success)
    rv.classList.toggle(success)
    rv.classList.toggle(primary)
}


$(function () {
    $(".carousel").carousel({ interval: 2000 })
    $(".carousel").on("click", function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    })
})

$(function () {
    $("#reserveButton").on("click", function() {
        $("#reserveModal").modal('show');
    })
})
    
$(function () {
    $("#loginButton").on("click", function() {
        $("#loginModal").modal('show');
    })
})