import novoLembrete from './novoLembrete.js'

const toggleSideBar = document.querySelector('.top_bar_toggle');
const main = document.querySelector('.main');
const navigation = document.querySelector('.navigation');
toggleSideBar.addEventListener('click', () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
});

const open_with = document.querySelector('.open_with');
const open_with_left_side = document.querySelector('.open_with_left_side');
const add_new_note_content = document.querySelector('.add_new_note_content');

add_new_note_content.addEventListener('click', e => {
    if (e.target !== open_with_left_side && e.target !== open_with) novoLembrete.open()

});

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

// Novo Lembrete
const addNewLembretMobile = document.querySelector('.add_new_lembrete_content_mobile');

addNewLembretMobile.addEventListener('click', e => {
    if (!e.target.classList.contains('add_new_paciente_mobile_icon')) novoLembrete.open()
});

addNewLembretMobile.querySelector('.add_new_paciente_mobile_icon').addEventListener('click', e => {
    e.target.classList.toggle('icon_rotate');
    addNewLembretMobile.classList.toggle('active');
});



let prevPageYOfsset = window.pageYOffset;
window.onscroll = () => {
    let currentPageYOfsset = window.pageYOffset;

    if (prevPageYOfsset > currentPageYOfsset) {
        document.querySelector(".main_top_bar").style.top = "0";
        document.querySelector(".navigation_mobile").style.bottom = "0";
        addNewLembretMobile.classList.remove('desactive');

    }
    else {
        document.querySelector(".main_top_bar").style.top = "-100px";
        document.querySelector(".navigation_mobile").style.bottom = "-100px";
        addNewLembretMobile.classList.add('desactive');
        addNewLembretMobile.classList.remove('active');
        addNewLembretMobile.querySelector('.add_new_paciente_mobile_icon').classList.add('icon_rotate');

    }
    prevPageYOfsset = currentPageYOfsset;

    if (document.querySelector(".main_top_bar").style.top == "-100px") {
        setTimeout(() => {
            document.querySelector(".main_top_bar").style.top = "0";
            document.querySelector(".navigation_mobile").style.bottom = "0";
            addNewLembretMobile.classList.remove('desactive');
        }, 1563);
        addNewLembretMobile.querySelector('.add_new_paciente_mobile_icon').classList.remove('icon_rotate');


    }
}
