/*TO-DO: Make off button for sound 
*/

var button = document.getElementById("button");
var buttonText = document.getElementById("buttontext");
var c = document.querySelector('#button');
let root = document.documentElement;

/* Phrase Changer Code */
/* You can edit the phrases and images here. Customize it!*/

button.onclick = (function(){
  
  var phrases = ["Click Me",
   "Happy Birthday!",
    "I Love you",
     "You are awesome", 
     "Keep up the good work",
      "Great friend",
      
       "Meet you again soon",
        "Wish you the best!"];
  
//   var bImages = ["https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/16804232_10155130060144828_3669884693086762576_o.jpg?_nc_cat=106&_nc_sid=a9b1d2&_nc_ohc=uDhx_Rp2ciwAX_OG49Z&_nc_ht=scontent-ort2-2.xx&oh=cd03336797614dd5c563873ec8d34a55&oe=5F6A4741", "https://i.imgur.com/saf2C0e.gif","https://i.imgur.com/Hdix4fN.jpg",
//       "https://i.imgur.com/mYcAgr3.png", 
//       "https://i.imgur.com/Hdix4fN.jpg", "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/80644325_10157950046499828_8599351930566737920_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_ohc=QjLvMTJKmwEAX_ouhM8&_nc_ht=scontent-ort2-2.xx&oh=69c9a2df80b694ef83c75218b7f1309e&oe=5F6DF4E1","https://i.imgur.com/binfCky.jpg", "https://ak.picdn.net/shutterstock/videos/3153106/thumb/1.jpg", "https://birthdaycake24.com/uploads/worigin/2019/06/11/happy-birthday-cake-with-name-birthdaycake245cff57627fae2_1239920b09a2d01c20f8265f4a0e3efd.gif"];

var bImages = ["0.gif",
 "1.jpg",
 "2.jpg",
      "3.jpg", 
      "4.jpg",
       "5.jpg",
       "6.jpg",
        "7.jpg",
        ];
  
  var count = 0;
  var imageCount= 0;
  return function(){
  root.style.setProperty('--image', "url(" + bImages[++count % phrases.length] + ")");
  buttonText.textContent = phrases[++imageCount % phrases.length];
  };
}());


/* if(count>7){
  do: release balloons/confetti/or something cool;
}
*/