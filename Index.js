let elInput = document.querySelector(".input")

function openPage() {
  if(elInput.value == 1234){
    window.open("./0.2/index2.html")
  } else {
    elInput.style.color = "red"  
  }
}