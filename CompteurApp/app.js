let counterA = document.getElementById('counterA');
let counterB = document.getElementById('counterB');
let count = 0;
let counterDisplay = document.getElementById('counter');
let save = document.getElementById("save");
let tableau = [];
let reset = document.getElementById("reset")
let numberCounter = document.getElementById("counter");
let saveContent = document.getElementById("save-content");
let tab = document.getElementById("tab");

counterA.addEventListener('click', function() {
    count++;
    counterDisplay.innerText = count;
})

counterB.addEventListener('click', function() {
     count--;
    counterDisplay.innerText = count;
})

save.addEventListener("click", function () {
    tableau.push(" [ " + numberCounter.textContent + " ] ")
    saveContent.appendChild(tab).innerText = tableau;
    
})

reset.addEventListener("click", function() {
    tab.remove();
})



const btnDark = document.getElementById("btn-dark-mode");
    const body = document.body;

    btnDark.addEventListener("click", function () {
        body.classList.toggle("dark-mode")
         body.style.transition ="0.6s"

        if (body.classList.contains("dark-mode")) {
            btnDark.style.backgroundColor = "white"
        } else {
            btnDark.style.backgroundColor = "rgba(0, 0, 0, 0.285)"
        }

    
        // Enregistre le mode dans le stockage local
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            localStorage.setItem('color', 'light');
        
          } else {
            localStorage.setItem('theme', 'light');
            localStorage.setItem('color', 'dark');
          }
        });
        
        // Appliquer le thème enregistré
        if (localStorage.getItem('theme') === 'dark' || localStorage.getItem('color') === 'light') {
          body.classList.add('dark-mode');
          btnDark.style.backgroundColor = "white"
        };
        


window.onscroll = function() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

    document.getElementById("backToTopBtn").onclick = function()  {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };


    const burger = document.getElementById("hamburger");
    const deletebtn = document.getElementById("delete");
    const btnToogle = document.getElementById("toogle");

    burger.addEventListener("click", function () {
        burger.style.display = 'none'
        document.getElementById("btn-dark-mode").style.display = "none";
        document.getElementById("nav-bar").style.padding = "0" 
        document.getElementById("nav-bar").style.paddingBottom = "40px"
        document.getElementById("list").style.display = "flex";
        document.getElementById("logoApp").style.display = "none";
        deletebtn.style.display = 'block'
        
    })

    deletebtn.addEventListener("click", function () {
        burger.style.display = 'block'
        document.getElementById("btn-dark-mode").style.display = "block";
        document.getElementById("nav-bar").style.padding = "20px" 
        document.getElementById("nav-bar").style.paddingBottom = "40px"
        document.getElementById("list").style.display = "none";
        document.getElementById("logoApp").style.display = "block";
        deletebtn.style.display = 'none'
    })
