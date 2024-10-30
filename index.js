var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var activeKeys = {}; // To keep track of multiple keys pressed

// Handle button clicks
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    makeSound(button);
    buttonAnimation(button);
  });

  // On hover
  document.querySelectorAll(".drum")[i].addEventListener("mouseover", function () {
    var button = this.innerHTML;
    hoverAnimation(button);
  });

  document.querySelectorAll(".drum")[i].addEventListener("mouseout", function () {
    var button = this.innerHTML;
    removeHoverAnimation(button);
  });
}

// Handle multiple key presses
document.addEventListener("keydown", function (event) {
  var key = event.key;

  // If the key is already active, do nothing (prevents repetition)
  if (activeKeys[key]) return;
  
  activeKeys[key] = true; // Mark key as active
  makeSound(key);
  buttonAnimation(key);
});

// Handle key release to allow multiple presses
document.addEventListener("keyup", function (event) {
  var key = event.key;
  
  // Remove the key from the active keys when released
  delete activeKeys[key];
  removeButtonAnimation(key); // Optionally remove animation after key release
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
  }
}

function removeButtonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.remove("pressed");
  }
}

function hoverAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("hover");
  }
}

function removeHoverAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.remove("hover");
  }
}
