const button = document.querySelector("button") //falei que a tag "button" é igual a constante "button"
const modal = document.querySelector ("dialog") //falei que a tag "dialog" ´é igual a variavel "modal"
const buttonClose = document.querySelector ("dialog button")

button.onclick = function (){
    modal.showModal ()
}  //chamei o popup/Modal

buttonClose.onclick = function(){
    modal.close ()
}
