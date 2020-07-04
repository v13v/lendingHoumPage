window.addEventListener('DOMContentLoaded', () => {

    // Timer
    function countTimer(deadline) {
        const
            timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor((timeRemaining / 60 / 60));
            return {
                hours,
                minutes,
                seconds,
                timeRemaining
            };
        }
        function appDateClock() {
            const timer = getTimeRemaining();

            function appNull(time) {
                if (time > 0 && time < 10) {
                    return '0' + time;
                } else {
                    return time;
                }
            }

            timerHours.textContent = appNull(timer.hours);
            timerMinutes.textContent = appNull(timer.minutes);
            timerSeconds.textContent = appNull(timer.seconds);

            if (timer.timeRemaining > 0) {
                const idInterval = setInterval(appDateClock, 1000);
                clearInterval(idInterval);
            } else {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }
        setInterval(appDateClock, 1000);
    }
    countTimer('05, july, 2020');

    //Menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach(elem => {
            elem.addEventListener('click', handlerMenu);
        });
    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content');
            const popUpAnimation = () => {
                popup.style.display = `block`;
                popupContent.style.opacity = '0';
                let count = 0;
                const toggleOpacity = setInterval(() => {
                    if(count < 1) {
                        popupContent.style.opacity = count += 0.1;                   
                    } else {
                        clearInterval(toggleOpacity);
                    }
                }, 70);
            }
        popupBtn.forEach(elem  => {
            elem.addEventListener('click', popUpAnimation);
        });
        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };
    togglePopUp();




    



});

