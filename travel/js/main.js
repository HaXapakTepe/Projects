const menuLinks = document.querySelectorAll('.scroll[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(link => {
    link.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const link = e.target;
    if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
      const gotoBlock = document.querySelector(link.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    };
  };
};