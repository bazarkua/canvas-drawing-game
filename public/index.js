function modalToggle(){
    document.getElementById("instruction-backdrop").classList.toggle('hidden')
    document.getElementById("how-to-play-button").classList.toggle('hidden')
    document.getElementById("instruction-modal").classList.toggle('hidden')
  }
document.getElementById("how-to-play-button").addEventListener("click", modalToggle);
document.getElementById("instruction-close").addEventListener("click", modalToggle);
