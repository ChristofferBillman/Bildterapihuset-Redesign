var open = true;
document.getElementById("menuBtn").addEventListener("click", function(){
     if(!open) {
        document.getElementById("menu").style.left = "100vw"; console.log("pressed")
        open = true
    } else {
        document.getElementById("menu").style.left = "20vw"; console.log("pressed")
        open = false;
    }
    });
