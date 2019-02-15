document.addEventListener("DOMContentLoaded", () => {

    let nav = document.querySelector(".sideNav");
    let sideNavBar = document.querySelector(".sideNav__bar");
 
    nav.addEventListener("click", (event) => {
        if (event.target.className == "sideNav__open") {
            sideNavBar.style.width = "250px";
        } else if (event.target.className == "sideNav__close") {
            sideNavBar.style.width = "0";
        }
    })
});
