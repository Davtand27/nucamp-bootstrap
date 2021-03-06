var rv = document.getElementById("siteRV")
var tent = document.getElementById("siteTent")
var primary = "btn-primary" 
var success = "btn-success" 

function myFunction(){
    tent.classList.toggle(primary)
    tent.classList.toggle(success)
    rv.classList.toggle(success)
    rv.classList.toggle(primary)

}
