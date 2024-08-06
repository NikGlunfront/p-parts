document.addEventListener('DOMContentLoaded', function() {

    // Определение устройства просмотра страницы (Мобильное или ПК)
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        },
    };

    if (isMobile.any()) {
        document.body.classList.add('_touch');
    } else {
        document.body.classList.add('_pc');
    }

    const headerExpandBtns = document.querySelectorAll('.header-menu-link._expand')
    const hiddenMenus = document.querySelectorAll('.hidden-menu')
    const visibleMenuClass = "_visible"
    const activeMenuBtnClass = "_active"

    if (headerExpandBtns.length) {
        headerExpandBtns.forEach(btn => {
            let btnTitle = btn.querySelector('span')
            let bckgCloser = btn.querySelector('.hidden-menu__bckg')
            let hiddenMenu = btn.querySelector('.hidden-menu')
            if (bckgCloser) {
                bckgCloser.addEventListener('click', () => {
                    hideAllMenus()
                })
            }
            if (btnTitle) {
                btnTitle.addEventListener('click', () => {
                    hideAllMenus()
                    toggleMenuVisible(btn)
                })
            }
        })
    }

    function toggleMenuVisible(menuBtn) {
        const hiddenMenu = menuBtn.querySelector('.hidden-menu')
        hiddenMenu.classList.toggle(visibleMenuClass)
        const btnContainer = menuBtn.closest('._expand')
        btnContainer.classList.toggle(activeMenuBtnClass)
    }

    function hideAllMenus() {
        hiddenMenus.forEach(menu => {
            menu.classList.remove(visibleMenuClass)
        })
        headerExpandBtns.forEach(menu => {
            const btnContainer = menu.closest('._expand')
            btnContainer.classList.remove(activeMenuBtnClass)
            menu.classList.remove(activeMenuBtnClass)
        })
    }
});


