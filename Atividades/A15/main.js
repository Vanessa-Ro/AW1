// Get all keys
const keys = document.querySelectorAll(".key")


// Play notes
function playNote(event) {

  // KeyCode
  let audioKeyCode = getKeyCode(event)

  // Typed pd pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
  
  // If key exists
  const cantFoundAnyKey = !key

  if(cantFoundAnyKey) {
      return;
  }

  addPlayingClass(key)

  // Play audio
  playAudio(audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getKeyCode(event) {
    let keyCode;
  
    const isKeyboard = event.type === "keydown"
    if(isKeyboard) {
      keyCode = event.keyCode
    } else {
      keyCode = event.target.dataset.key
    }
  
    return keyCode;
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
  }

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}

function registerEvents() {
// Click with mouse
keys.forEach(function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})

// Keyboard type
window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)