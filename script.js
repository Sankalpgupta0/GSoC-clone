const hamBtn = document.querySelector(".ham-btn");
const hamSlider = document.querySelector(".hamSlider");
const main = document.querySelector(".bg-black");
const mainbnt = document.querySelector(".mainbtn");
const learn = document.querySelector(".learn");
const login = document.querySelector(".login");

hamBtn.addEventListener( "click", () => {

    hamBtn.classList.toggle("border");
    hamBtn.classList.toggle("cross");
    hamBtn.classList.toggle("bars");
    main.style.filter = "blur(1px)";

    if(hamSlider.style.opacity == 1){
        main.style.filter = "blur(0px)";
        hamSlider.style.opacity = 0;
        hamSlider.style.animation = "slideOut 0.3s";
        hamSlider.style.zIndex = -2;
    }
    else{
        hamSlider.style.opacity = 1;
        hamSlider.style.animation = "slideIn 0.3s";
        hamSlider.style.zIndex = 5;
    }
})

mainbnt.addEventListener("click", () => {
    open("./redirect.html", "_blank");
});
learn.addEventListener("click", () => {
    open("./redirect.html", "_blank");
});
login.addEventListener("click", () => {
    open("./redirect.html", "_blank");
});