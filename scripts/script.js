
(() => {
    const menuList = document.querySelector('.js-list');
    let isClicked = false;

    document.addEventListener('click', function (event) {
        if (event.target.closest('.js-bar') || event.target.closest(".js-link")) {
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

    const header = document.querySelector('.js-header');
    const mainSection = document.querySelector('.js-main');
    const options = {
        rootMargin: "25px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add('nav-scrolled');
            } else {
                header.classList.remove('nav-scrolled');
            }
        });

    }, options);

    observer.observe(mainSection);

})()
