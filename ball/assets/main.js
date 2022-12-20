let img=document.querySelector("#img");

document.querySelector("img").onkeydown=function (elem) {
    if (elem.key == "ArrowUp") {
    this.style.width="60%"
    }
};
