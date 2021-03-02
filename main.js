// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const div = document.getElementById('modal');
div.className = 'hidden';

const heartBtn = document.querySelectorAll('.like-glyph');

heartBtn.forEach( function(like) {
  like.addEventListener('click', function(event) {
    mimicServerCall()
    .then(() => {
      if (event.target.textContent == EMPTY_HEART) {
        event.target.textContent = FULL_HEART;
        event.target.className = 'activated-heart'
      } else {
        event.target.textContent = EMPTY_HEART
        event.target.classList.remove('activated-heart')
      }
    })
    .catch(error => {
      div.classList.remove('hidden');
      console.log(error);
      setInterval(() => {
        div.className = 'hidden'
      }, 5000);
    })
  })

}
)

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
