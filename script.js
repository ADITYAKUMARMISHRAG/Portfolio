document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contact-btn");
    const contactForm = document.querySelector(".contact-form");
  
   
    const overlay = document.querySelector(".overlay");

   


    contactBtn.addEventListener("click", function () {
        contactForm.classList.add("show");
        overlay.classList.add("active");
    });

    //hamburger
    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        this.classList.toggle("active");
    });
    


//Now creating form validation
document.getElementById("contactForm").addEventListener("Submit",function(e){
    emailField=document.getElementById("email");
    if(!emailField.value.includes("@"))
    {
        e.preventDefault();
        alert("Please Enter A valid Email Id");
    }
});
    





 // Random Quote Generator
 const quotes = [
    "If you tell the truth, you do not have to remember anything. ― Mark Twain",
    "Always forgive your enemies; nothing annoys them so much. - Oscar Wilde",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. -Mahatma Gandhi",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Opportunity is missed by most people because it is dressed in overalls and looks like work. —Thomas Edison",
    "Setting goals is the first step in turning the invisible into the visible. —Tony Robbins",
    "He who conquers himself is the mightiest warrior. —Confucius",
    "I never dreamed about success. I worked for it. —Estée Lauder",
    "Try not to become a man of success, but rather become a man of value.” —Albert Einstein"
];

const quoteBtn = document.getElementById("quote-btn");
const quoteText = document.getElementById("quote");

quoteBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML = quotes[randomIndex];
});
});


function scrolltoup() {
    document.getElementById("photoid").scrollIntoView({ behavior: "smooth" });
}
function scrolltoabt() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
function scrolltoedu() {
    document.getElementById("education").scrollIntoView({ behavior: "smooth" });
}
function scrolltopro() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}
function scrolltoskills() {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
}
function scrolltores() {
    document.getElementById("resume").scrollIntoView({ behavior: "smooth" });
}
function scrolltocont() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}


function toggleTheme()
{
    let body = document.body;
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        document.getElementsByClassName("ourhed").element[0].style.color="black";
        document.getElementsByClassName("resume-card").element[0].h3.style.font="black";
        localStorage.setItem("theme", "light");
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        localStorage.setItem("theme", "dark");
    }
}
