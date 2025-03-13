let button = document.querySelector(".beforebutton");
let container = document.querySelector(".container");
let flower2 = document.querySelector(".flower2");
document.addEventListener("DOMContentLoaded", function () {

    button.onclick= function change() {
      document.querySelector("body").style.backgroundColor = "#FFB8E0";
       button.style.display="none";
      setTimeout(() => {
       
        container.style.display = "block";
        document.querySelector(".audio").volume = 0.25;
        document.querySelector(".audio").play();
        displayLyrics();
        flowerRun();
      }, 1000);
      setTimeout(() => {
        document.querySelector(".afterbutton").style.display = "block";
        container.style.display = "none";
      }, 51000);
        

    }
    
    const letterDelay = 70;

   
    const DelayBwL1L2 = 600;  
    const DelayBwL2L3 = 900;  
    const DelayBwL3L4 = 1200;  
    const DelayBwL4L5 = 4200;  
    const DelayBwL5L6 = 900;  
    const DelayBwL6L7 =3300;  
    const DelayBwL7L8 = 2600;  
    const DelayBwL8L9 = 3000;  
    const DelayBwL9L10 = 1500; 
    const DelayBwL10L11 = 3500; 

    let scripts = [
      "so i'ma love you every night like its the last night,",
      "like its the last night",
      "if the world was ending",
      "i'd wanna be next to you",
      "if the party was over",
      "and our time on Earth was through",
      "I'd wanna hold you just for a while",
      "and die with a smile",
      "If the world was ending",
      "I'd wanna be next to you",
      "Right next to you"
    ];

   
    let lineDelays = [
      DelayBwL1L2, DelayBwL2L3, DelayBwL3L4, DelayBwL4L5, DelayBwL5L6,
      DelayBwL6L7, DelayBwL7L8, DelayBwL8L9, DelayBwL9L10, DelayBwL10L11
    ];

    const textContainer = document.getElementById('lyrics');

    function displayLyrics() {
      let currentIndex = 0;
      let letterIndex = 0;

      function showNextLetter() {
        if (currentIndex < scripts.length) {
          let line = scripts[currentIndex];
          if (letterIndex < line.length) {
            textContainer.innerHTML += line[letterIndex];
            letterIndex++;
            setTimeout(showNextLetter, letterDelay); 
          } else {
            textContainer.innerHTML += '<br>'; 
            if (currentIndex < lineDelays.length) {
              setTimeout(() => {
                currentIndex++;
                letterIndex = 0;
                showNextLetter();
              }, lineDelays[currentIndex]); 
            }
          }
        }
      }

      showNextLetter();
    }
    let top1 = -20 ;
    let top2 = -10 ;
    let top3 = -15 ;
    let rotate1 = 0;
    let rotate2 = 0;
    let rotate3 = 0;
    function flowerRun() {
      document.querySelector(".flower1").style.display = "block";
      document.querySelector(".flower2").style.display = "block";
      document.querySelector(".flower3").style.display = "block";
      setInterval(() => {
        document.querySelector(".flower1").style.top = top1 + "vh";
        document.querySelector(".flower2").style.top = top2 + "vh";
        document.querySelector(".flower3").style.top = top3 + "vh";
        top1 = top1 + Math.random() * .035;
        top2 = top2 + Math.random() * .045;
        top3 = top3 + Math.random() * .025;
        document.querySelector(".flower1").style.rotate  = rotate1 + "deg";
        document.querySelector(".flower2").style.rotate  = rotate2 + "deg";
        document.querySelector(".flower3").style.rotate  = rotate3 + "deg";
        rotate1 = rotate1 + Math.random() * .1;
        rotate2 = rotate2 - Math.random() * .3;
        rotate3 = rotate3 + Math.random() * .3;

      
      if (top1>85) {
        top1 = -20;
      };
      if (top2>85) {
        top2 = -10;
      }
      if (top3>85) {
        top3 = -10;
      }

      }, 5);
      
    }
  });