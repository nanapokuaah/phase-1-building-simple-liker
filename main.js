// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded",() => {
  const hearts = document.querySelectorAll(".span.like-glyph")
  console.log(hearts)
  hearts.forEach(hearts => hearts.addEventListener("click", clicklike))

  function clicklike(hearts){
    console.log(hearts.target)
    mimicServerCall()
    .then(() => {
if (hearts.target.innertext === EMPTY_HEART){
  hearts.target.classList.add('activated-heart')
  hearts.target.innertext = FULL_HEART
}
else{
  hearts.target.classList.remove('activated-heart')
  hearts.target.innertext = EMPTY_HEART
}
    })

.catch(() => {
  const errorAlert = document.getElementById("modal")
  console.log(errorAlert)
  errorAlert.className = "hidden"

setTimeOut(() => {
  const errorAlert = document.getElementById("modal")
  console.log(errorAlert)
  errorAlert.className = "hidden"}, 300)
})
  }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
// const hearts = document.q
// const input = document.getElementById("button");

//function clickAlert(){
  //alert("I was clicked");
})