const options = document.querySelectorAll('.option');
const frame = document.querySelector('.frame');
const slideColor = document.querySelector('.slide-color');



options.forEach(function (option){
    option.addEventListener('click', function(e){
        if(e.target === options[0]){
            frame.style.transform = 'translateX(0%)';
            options[1].style.color = 'black';
            options[2].style.color = 'black';
            options[3].style.color = 'black';
        
            slideColor.style.left = '0';
            slideColor.style.background = '#640000';
        }

        else if(e.target === options[1]){
            frame.style.transform = 'translateX(-100%)';

            options[1].style.color = '#00641F';
            options[0].style.color = 'black';
            options[2].style.color = 'black';
            options[3].style.color = 'black';

            slideColor.style.left = '25%';
            slideColor.style.background = '#00641F';
            
            
        }
        else if(e.target === options[2]){
            frame.style.transform = 'translateX(-200%)';

            options[2].style.color = '#B90000';
            options[0].style.color = 'black';
            options[1].style.color = 'black';
            options[3].style.color = 'black';

            slideColor.style.left = '50%';
            slideColor.style.background = '#B90000';
        }
        else if(e.target === options[3]){
            frame.style.transform = 'translateX(-300%)';

            options[3].style.color = '#AF2B63';
            options[0].style.color = 'black';
            options[1].style.color = 'black';
            options[2].style.color = 'black';
        
            slideColor.style.left = '75%';
            slideColor.style.background = '#AF2B63';
        }
        
    });
})

