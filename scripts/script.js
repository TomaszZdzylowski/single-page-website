
(() => {
    const menuList = document.querySelector('.js-list');
    let isClicked = false;

    document.addEventListener('click', function (event) {
        if (event.target.closest('.js-bar')) {
            menuList.classList.toggle('h-hide');
            return isClicked = !isClicked;
        }
        else if (isClicked == true) {
            if ((event.target.closest('body') && !event.target.closest('.js-list'))) {
                menuList.classList.toggle('h-hide');
                return isClicked = !isClicked;

            }
        }
    });

    menuList.addEventListener('click', (event) => {
        if (event.target.closest("a")) {
            menuList.classList.toggle('h-hide');
        }
    })


})()