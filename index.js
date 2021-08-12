const toggleSideBar = document.querySelector('.top_bar_toggle');
const main = document.querySelector('.main');
const navigation = document.querySelector('.navigation');
toggleSideBar.addEventListener('click', () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
});

const open_with = document.querySelector('.open_with');
const open_with_left_side = document.querySelector('.open_with_left_side');

open_with.addEventListener('click', e => {
    if (window.screen.width <= 768) {
        e.target.parentElement.style.top = "70%";
        e.target.style.display = "none";
        open_with_left_side.style.display = "block";
    } else {
        e.target.parentElement.style.left = "calc(100vw - 25%)";
        e.target.style.display = "none";
        open_with_left_side.style.display = "block";
    }
});

open_with_left_side.addEventListener('click', e => {

    if (window.screen.width <= 768) {
        e.target.parentElement.style.top = "10%";
        e.target.style.display = "none";
        open_with.style.display = "block";
    } else {
        e.target.parentElement.style.left = "35px";
        e.target.style.display = "none";
        open_with.style.display = "block";
    }

});

let prevPageYOfsset = window.pageYOffset;
window.onscroll = () => {
    let currentPageYOfsset = window.pageYOffset;

    if (prevPageYOfsset > currentPageYOfsset) {
        document.querySelector(".main_top_bar").style.top = "0";
        document.querySelector(".navigation_mobile").style.bottom = "0";
    }
    else {
        document.querySelector(".main_top_bar").style.top = "-100px";
        document.querySelector(".navigation_mobile").style.bottom = "-100px";
    }
    prevPageYOfsset = currentPageYOfsset;

    if (document.querySelector(".main_top_bar").style.top == "-100px") {
        setTimeout(() => {
            document.querySelector(".main_top_bar").style.top = "0";
            document.querySelector(".navigation_mobile").style.bottom = "0";
        }, 1563);

    }
}


