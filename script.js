
const formNav = document.querySelector('.form_body');
const eachDiv = document.querySelector('.form_scroll');
const formCta = document.querySelector('.form_cta');
const formNext = document.querySelector('#next');
const formPrev = document.querySelector('#prev');
const formSubmit = document.querySelector('#submit');
const navList = document.querySelectorAll('.navlink');
const eleDiv = document.querySelectorAll('.form_scroll div');


const constainerWidth = () => {
    for (element of eachDiv.children) {
        element.style.width = formNav.offsetWidth + "px";
    }
}

const validation = (curr) => {
    let vState = false;
    const currEle = document.querySelectorAll('.form_scroll div');
    for (e of currEle[curr - 1].children[1].children) {
        if (e.nodeName === "INPUT") {
            if (e.value !== "" && e.value !== "undefined") {
                vState = true;
                console.log(e)
            }
        }
    }
    return vState;
}

let count = 0;
formNext.addEventListener("click", (e) => {
    count++;
    navList[count - 1].classList.add("activeClass");
    const nextFormCta = -(formNav.offsetWidth * count);
    eachDiv.style.transform = "translateX(" + nextFormCta + "px)";
    if (count > 2) {
        formNext.disabled = true;
        formNext.style.display = "none";
        formSubmit.style.display = "block";
    }
    if (count > 0) {
        formPrev.disabled = false;
        formPrev.style.display = "block";
    }
})

formPrev.addEventListener("click", (e) => {
    count--;
    navList[count].classList.remove("activeClass");
    const prevFormCta = -(formNav.offsetWidth * count);
    eachDiv.style.transform = "translateX(" + prevFormCta + "px)";
    if (count < 3) {
        formNext.disabled = false;
        formNext.style.display = "block";
        formSubmit.style.display = "none";
    }
    if (count == 0) {
        formPrev.disabled = true;
        formPrev.style.display = "none";
        formSubmit.style.display = "none";
    }
});


constainerWidth();