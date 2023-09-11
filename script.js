let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex+1];

    Array.from(currentWord.children).forEach((letter, i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i*80);
    });
    
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        }, 340+i*80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// circle skills /////////////////////////
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i<dots ;++i){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`; ///////// Start from here
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0;i<percent;++i){
        pointsMarked[i].classList.add('marked');
    }
})

// mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');

// active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY+97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky navbar ---------------------------
const header = document.querySelectorAll("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50);
})

// toggle icon navbar ---------------------------
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

menuIcon.onscroll = () =>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.replace("open");
}

// parallax -------------------------------------

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }

    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

// Email Activity


function sendEmail(){
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_9uz66xb";
    const templateID = "template_4sh8spk";
    //  alert(params.email_id);
     
    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert("Success");
        }, function(error) {
            alert("Failed..."+error);
           console.log('FAILED...', error);
        });

    // emailjs.send(serviceID, templateID, params)
    // .then(
    //     res => {
    //         document.getElementById("name").value = "";
    //         document.getElementById("email").value = "";
    //         document.getElementById("message").value = "";
    //         console.log(res);
    //         alert("Your message sent successfully");
    // })
    // .catch((err) => {
    //     // console.log(err);
    //     alert(err);
    // });
}


