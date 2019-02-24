// Sidomeny.
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

    // Stänger sidomenyn om man klickar varsomhelst utanför den.
    document.body.addEventListener("click", e => {
        var menuDetected = false;
        for(el of e.path) if(el.id == "menu" || el.id == "menuBtn") menuDetected = true;
        if(!menuDetected && !open) {
            document.getElementById("menu").style.left = "100vw"; console.log("pressed")
            open = true
        }
    });
