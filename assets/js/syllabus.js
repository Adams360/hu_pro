const readMoreBtn = document.querySelector('.outline__btn');
const hiddenText = document.querySelector('.hiddenText');
readMoreBtn.addEventListener('click', () => {
    hiddenText.classList.toggle('hiddenText');
});


// Modules Display View

const modulesMenu   = document.querySelectorAll('.modules__menu li button');
const swappedContent = document.querySelectorAll('.swaping-content');


modulesMenu.forEach( btn => {
        btn.addEventListener('click', () => {
            
            switch(btn.id) {
                case "module_1":
                document.getElementById("module1").style.opacity = 1; 
                break; 
                
            }

            if( btn.id === "module_5" ) {
                document.getElementById("module5").style.opacity = 1;
            }
    });
});


