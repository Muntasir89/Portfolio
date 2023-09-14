const serviceID = "service_5zuuz34";
const templateID = "template_i8h0ayz";

let popup, popupImage, popupTitle, popupSubtitle, popupCloseBtn;
let Name, email, message;

function sendEmail(){
    emailjs.init("lovZl2KmEzUzkN9nk");

    Name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;


    if(Name.length !== 0 || email.length !== 0 || message.length !== 0 ){
        var params = {       // This code belongs to EmailJS.com
            from_name: Name,
            email_id: email,
            message: message,
        };
    
    
        emailjs.send(serviceID, templateID, params)
            .then(function(response) {
                initializeSuccess();
                popup.classList.add("open-popup");
            //    console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
                initializeError();
                popup.classList.add("open-popup");
            });
        
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
}

function initializeSuccess(){
    initialize();
    popupImage.src = "./img/404-tick.png";
    popupTitle.innerHTML = "Thank You!";
    popupSubtitle.innerHTML = "Your message has been successfully submitted. Thanks!";
    popupCloseBtn.style.backgroundColor = "#6fd649";
}

function initializeError(){
    initialize();
    popupImage.src = "./img/512-error.png";
    popupTitle.innerHTML = "Sorry!";
    popupSubtitle.innerHTML = "Something went wrong!";
    popupCloseBtn.style.backgroundColor = "#f44336";
    popupCloseBtn.innerHTML = "Close";
}

function initialize(){
    popup = document.getElementById("popup");
    popupImage = document.getElementById("popupImg");
    popupTitle = document.getElementById("popupTitle");
    popupSubtitle = document.getElementById("popupSubtitle");
    popupCloseBtn = document.getElementById("popupCloseBtn");
}

function closePopup(){
    popup.classList.remove("open-popup");
}