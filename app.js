const btnDark = document.getElementById("btn-dark-mode");
        const body = document.body;

        btnDark.addEventListener("click", function () {
            body.classList.toggle("dark-mode")
            document.getElementById("Acceuil").style.color = "black"
            body.style.transition ="0.6s"
            
           

            if (body.classList.contains("dark-mode")) {
                btnDark.style.backgroundColor = "white"
                
                
            } else {
                btnDark.style.backgroundColor = "rgba(0, 0, 0, 0.43)"
               
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
  document.getElementById("Acceuil").style.color = "black"
};


        

        
window.onscroll = function() {
    let backToTopBtn = document.getElementById("backToTopBtn");
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
        document.getElementById("nav-bar").style.paddingBottom = "70px"
        document.getElementById("list").style.display = "flex";
        document.getElementById("logoApp").style.display = "none";
        deletebtn.style.display = 'block'
        
    })

    deletebtn.addEventListener("click", function () {
        burger.style.display = 'block'
        document.getElementById("btn-dark-mode").style.display = "block";
        document.getElementById("nav-bar").style.padding = "20px" 
        document.getElementById("nav-bar").style.paddingBottom = "70px"
        document.getElementById("list").style.display = "none";
        document.getElementById("logoApp").style.display = "block";
        deletebtn.style.display = 'none'
    })