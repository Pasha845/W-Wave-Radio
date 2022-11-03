(() => {
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
    const links = menu.querySelectorAll(`.${params.linksClass}`);

    function onBtnClick () {
      if (window.getWindowWidth() <= window.TABLET_WIDTH) {
        btn.classList.toggle(params.activeClass);
    
        if (
          !menu.classList.contains(params.activeClass) &&
          !menu.classList.contains(params.hiddenClass)
        ) {
          menu.classList.add(params.activeClass);
          document.body.style.overflow = 'hidden';
        } else {
          menu.classList.add(params.hiddenClass);
          document.body.removeAttribute('style');
          btn.classList.toggle(params.hiddenClass);
        }
      }
    }

    menu.addEventListener("animationend", function () {
      if (menu.classList.contains(params.hiddenClass)) {
        menu.classList.remove(params.activeClass);
        menu.classList.remove(params.hiddenClass);
        btn.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click", onBtnClick);

    links.forEach((link) => {
      link.addEventListener("click", onBtnClick);
    });
  }

  setBurger({
    btnClass: "js-burger",
    menuClass: "js-menu",
    activeClass: "is-opened",
    hiddenClass: "is-closed",
    linksClass: "js-menu-link"
  });
})();
