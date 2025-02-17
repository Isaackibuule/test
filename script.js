

document.addEventListener("DOMContentLoaded", function() {
    const acrelev = document.querySelector('.acrelev');
    const text = acrelev.textContent;
    acrelev.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent =char;
        span.style.animation = `rollIn 0.7s ease-out ${(text.length -index -1)  * 0.2}s forwards`;
        acrelev.appendChild(span);
    });
});



document.querySelector("#get-started" && "#Register").addEventListener("click", function(event) {
    // event.preventDefault(); // Prevent the default link behavior
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
});

/*

document.querySelector("#Register").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.querySelector(".modal-content").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
});
*/


/* Redirecting
document.getElementById("Register").addEventListener("click", () =>{
    window.location.href = "registration.html";
});
*/



document.addEventListener("DOMContentLoaded", function() {
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    const modal = document.getElementById('learn-more-modal');
    const closeBtn = document.querySelector('.close-btn');

    learnMoreBtns.forEach(btn => {
        btn.onclick = () => {
            modal.style.display = 'block';
        }
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }




    // Darkmode theme
    let darkmode = localStorage.getItem('darkmode')
    const themeSwitch = document.getElementById('theme-switch')
    
    const enableDarkmode = () => {
        document.body.classList.add('darkmode')
        localStorage.setItem('darkmode', 'active')
    
    //invert filter
        const mapIframe = document.querySelector('.Mapcontainer iframe');
    if(mapIframe) {
        mapIframe.style.filter= 'invert(100%)';
    
    }
    
        
    }
    
    const disableDarkmode = () => {
        document.body.classList.remove('darkmode')
        localStorage.setItem('darkmode', null)
    
        //remove invert 
        const mapIframe = document.querySelector('.Mapcontainer iframe');
    if(mapIframe) {
        mapIframe.style.filter= 'none';
    
    }
    
    }
    
    if(darkmode === "active") enableDarkmode()
    
    themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode')
        darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    })
    
    
    
    
        

});














