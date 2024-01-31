var numberofdrums =document.querySelectorAll(".drum").length

for(var i=0; i<numberofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

}
function handleClick(){
   //this.style.color="white"; // this refers to the specific element
   var buttonText = this.innerHTML;
   switch (buttonText){
    case "w":
        console.log("Playing sound: ton-1");
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    
    case "a":
        console.log("Playing sound: ton-2");
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
        console.log("Playing sound: ton-3");
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        console.log("Playing sound: ton-4");
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        console.log("Playing sound: crash");
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "k":
        console.log("Playing sound: kick");
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    case "l":
        console.log("Playing sound: snare");
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    default: console.log("Unknown button:" + buttonText);
   }
} 

