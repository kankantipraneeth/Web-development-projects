var lenOfDrumBtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < lenOfDrumBtn; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
function handleClick() {
  var charOfDrumBtn = this.innerHTML;
  makeSound(charOfDrumBtn);
  buttonAnimation(charOfDrumBtn);
}

document.addEventListener("keydown", handleKey);

function handleKey(keyTriggerd) {
  makeSound(keyTriggerd.key);
  buttonAnimation(keyTriggerd.key);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(key) {
  var activeKey = document.querySelector("." + key);
  activeKey.classList.add("pressed");
  setTimeout(removeClass, 100);
  function removeClass() {
    activeKey.classList.remove("pressed");
    //   //alternate for the above 3 lines of code is:
    //   //setTimeout(function(){
    //     //activeKey.classList.remove("pressed");
    //   },100);
  }
}
