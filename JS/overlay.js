function openNav() {
    document.getElementById("container").style.visibility = "visible";
    document.getElementById("nav").style.visibility = "hidden";
    document.getElementById("msg").style.visibility = "hidden";
    document.getElementById("myNav1").style.height = "100%";
    document.getElementById("myNav2").style.height = "100%";
    $("#myNav2-content").delay(250).fadeIn();
    $("#myNav1-content").delay(250).fadeIn();
}

function closeNav() {
    document.getElementById("container").style.visibility = "hidden";
    document.getElementById("nav").style.visibility = "visible";
    document.getElementById("msg").style.visibility = "visible";
     $("#myNav1-content").delay(200).fadeOut();
     $("#myNav2-content").delay(200).fadeOut();
    document.getElementById("myNav1").style.height = "0%";
    document.getElementById("myNav2").style.height = "0%";
}
