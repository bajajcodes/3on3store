const asideHamburger = document.getElementById("aside-hamburger");
const asideNavbar = document.getElementById("aside-navbar");
const aside = document.getElementById("aside");

asideHamburger.addEventListener("click", () => {
    if(asideHamburger.firstElementChild.innerText === 'expand_more'){
        asideHamburger.firstElementChild.innerText = 'expand_less';
    }else{
        asideHamburger.firstElementChild.innerText = 'expand_more';
    }
    aside.classList.toggle("beautify-aside");
    asideNavbar.classList.toggle("show");
});
