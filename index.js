const drums = document.querySelectorAll(".drum");

for (let index = 0; index < drums.length; index++) {
    drums[index].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
       makesound(buttonInnerHTML);
    });
}


document.addEventListener("keypress",function(event){
    console.log(event)
    makesound(event.key)
    // alert("key was pressed");
})


function makesound(event){
    console.log(event)
    switch (event) {
        case "w":
                var audio = new Audio("tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("crash.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("kick-bass.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("snare.mp3");
                audio.play();
                break;
            default:
                break;
    }
    // alert("key was pressed");
}
