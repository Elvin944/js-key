let type=document.querySelector("#type");

type.onclick=function () {
    this.nextElementSibling.setAttribute('type','text')
}