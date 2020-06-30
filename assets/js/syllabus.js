const readMoreBtn = document.querySelector('.readMoreBtn');
const hiddenText = document.querySelector('.hiddenText');
readMoreBtn.addEventListener('click', () => {
    hiddenText.classList.toggle('hiddenText');
});



function setupTabs() {
    document.querySelectorAll('.tabs__btn').forEach((btn) => {
             btn.addEventListener('click', () => {
                const tabsMenu      = btn.parentElement;
                const tabsContainer = tabsMenu.parentElement;
                const tabNumber     = btn.dataset.forTab;
                const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

                    tabsMenu.querySelectorAll('.tabs__btn').forEach(btn => {
                        btn.classList.remove('tabs__btn--active');
                    });

                    tabsContainer.querySelectorAll('.tabs__content').forEach(tab => {
                        tab.classList.remove('tabs__content--active');
                    });

                    btn.classList.add('tabs__btn--active');
                    tabToActivate.classList.add('tabs__content--active');
             });
         })

}


document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
    document.querySelectorAll('.tabs').forEach((tabsContainer => {
        tabsContainer.querySelector('.tabs__menu .tabs__btn').click();
    }));
});