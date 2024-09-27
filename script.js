var list = document.querySelectorAll(".drum");

for (var i=0;i<list.length;i++)
    {
    
        list[i].addEventListener('click',function(){
            var buttonPressed = this.innerHTML;
            makesound(buttonPressed);
            btnanimation(buttonPressed);
        });
}

document.addEventListener('keydown',function(event){
    keypressed = event.key;
    makesound(keypressed);
    btnanimation(keypressed);
});

function makesound(key){
    switch (key) {
      case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
      break;
      case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
      break;
      case "s":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
      break;
      case "d":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
      break;
      case "j":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
      break;
      case "k":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
      break;
      case "l":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
      break;
      default:
          console.log(buttonPressed);
      break;
    }

}

function btnanimation(keypressed){
    var key = ("."+keypressed)
    var elementselected = document.querySelector(key);
    elementselected.classList.add("pressed");
    setTimeout(function(){
        elementselected.classList.remove("pressed");
    },100);

}