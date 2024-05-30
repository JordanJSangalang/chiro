/****************** Navbar logic ***************/
function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.1
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
}

navSlide();

//****************index.html

//resume button
// document.getElementById("resumeButton").addEventListener("click", () => {
//   window.open("Jordan_Sangalang.pdf", "fullscreen=yes");
// });

// main cotact button
document.getElementById("contactButton").addEventListener("click", function () {
  window.location.href = "contact.html";
});

/***********contact page******************/
const clearFormFields = () => {
  const nameField = document.getElementById("name");
  const mailField = document.getElementById("mail");
  const msgField = document.getElementById("msg");
  const sendButton = document.getElementById("msg-btn");

  nameField.value = "";
  mailField.value = "";
  msgField.value = "";
};

// location.reload(clearFormFields());

document.getElementById("msg-btn1").addEventListener("click", function () {
  setTimeout(function () {
    clearFormFields();
  }, 1000);
});


// forms button logic

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  var button1 = document.getElementById('contactButton1');
  var button2 = document.getElementById('contactButton2');

  if (button1) {
      console.log('Found button 1');
      button1.addEventListener('click', function() {
          console.log('Button 1 clicked');
          downloadPDF('new-patient-form.pdf', 'new-patient-form.pdf');
      });
  } else {
      console.error('Button 1 not found');
  }

  if (button2) {
      console.log('Found button 2');
      button2.addEventListener('click', function() {
          console.log('Button 2 clicked');
          downloadPDF('pi-paperwork.pdf', 'pi-paperwork.pdf');
      });
  } else {
      console.error('Button 2 not found');
  }
});

function downloadPDF(pdfPath, fileName) {
  console.log(`Initiating download for: ${pdfPath}`);
  var link = document.createElement('a');
  link.href = pdfPath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}