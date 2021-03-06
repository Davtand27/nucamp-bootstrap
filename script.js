
var rv = document.getElementById("siteRV")
var tent = document.getElementById("siteTent")
var primary = "btn-primary" //blue
var success = "btn-success" //green

function myFunction(){
    tent.classList.toggle(primary)
    tent.classList.toggle(success)
    rv.classList.toggle(success)
    rv.classList.toggle(primary)

}

// function tentFunction(){
//     tent.classList.toggle(success)
//     tent.classList.toggle(primary)
//     rv.classList.toggle(primary)
//     rv.classList.toggle(success)
// }
// function rvFunction(){
//     rv.classList.toggle(success)
//     rv.classList.toggle(primary)
//     tent.classList.toggle(primary)
//     tent.classList.toggle(success)
// }


