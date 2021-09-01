var option = document.querySelectorAll('.option');
var frame = document.querySelector('.frame');
var slideColor = document.querySelector('.slide-color');

option[0].addEventListener('click', slide1);
option[1].addEventListener('click', slide2);
option[2].addEventListener('click', slide3);
option[3].addEventListener('click', slide4);





function slide1(e){
    frame.style.transform = 'translateX(0%)';

    option[1].style.color = 'black';
    option[2].style.color = 'black';
    option[3].style.color = 'black';

    slideColor.style.left = '0';
    slideColor.style.background = '#640000';
    
}

function slide2(e){
    frame.style.transform = 'translateX(-100%)';
    option[1].style.color = '#00641F';

    option[0].style.color = 'black';
    option[2].style.color = 'black';
    option[3].style.color = 'black';

    slideColor.style.left = '25%';
    slideColor.style.background = '#00641F';
}

function slide3(e){
    frame.style.transform = 'translateX(-200%)';
    option[2].style.color = '#B90000';

    option[0].style.color = 'black';
    option[1].style.color = 'black';
    option[3].style.color = 'black';

    slideColor.style.left = '50%';
    slideColor.style.background = '#B90000';
    
}

function slide4(e){
    frame.style.transform = 'translateX(-300%)';
    option[3].style.color = '#AF2B63'

    option[0].style.color = 'black';
    option[1].style.color = 'black';
    option[2].style.color = 'black';

    slideColor.style.left = '75%';
    slideColor.style.background = '#AF2B63';
}

