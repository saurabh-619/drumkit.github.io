for (let i = 0; i < document.querySelectorAll(".drum").length;i++)
{

    //mouse-click
    document.querySelectorAll("button")[i].addEventListener("click",function(){
      makeSound(this.innerHTML);
      makeAnimation(this.innerHTML);
    }
    );

    //key-press
    document.addEventListener("keypress", function(event){
       makeSound(event.key);
       makeAnimation(event.key);
     }
    ); 

}

    //Make animation  Of Buttons when got clicked
    function makeAnimation(variable) 
    { 
      var activeButton = document.querySelector("." + variable);
      activeButton.classList.add("pressed");
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },80);

    }

    


    function makeSound(variable)
    {
      switch (variable) 
      {
        case "w":
          var audio1 = new Audio("sounds/tom-1.mp3");
          audio1.play();
          break;

        case "a":
          var audio2 = new Audio("sounds/tom-2.mp3");
          audio2.play();
          break;
        case "s":
          var audio3 = new Audio("sounds/tom-3.mp3");
          audio3.play();
          break;

        case "d":
          var audio4 = new Audio("sounds/tom-4.mp3");
          audio4.play();
          break;

        case "j":
          var audio5 = new Audio("sounds/snare.mp3");
          audio5.play();
          break;

        case "k":
          var audio6 = new Audio("sounds/crash.mp3");
          audio6.play();
          break;

        case "l":
          var audio7 = new Audio("sounds/kick-bass.mp3");
          audio7.play();
          break;

        default:
          break;
      }
    }


// var audio = new Audio("sounds/crash.mp3");
// audio.play();


//we dont have to add querySelector as entire page listens to the event
 