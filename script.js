document.getElementById("getStartedBtn").addEventListener("click", function() {
  window.location.href = "next-page.html";
});
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var phoneNumber = document.getElementById("phoneNumber").value;
  if (phoneNumber.length === 10 && /^\d+$/.test(phoneNumber)) {
    alert("Logged in successfully!");
    window.location.href = "sandy.html";
  } else {
    alert("Invalid phone number. Please enter a valid 10-digit phone number.");
  }
});

function goToNextPage() {
  window.location.href = "login.html";
}



const contactLink = document.getElementById("contact");


contactLink.addEventListener("click", navigateToContact);

function navigateToContact(event) {
  event.preventDefault();
  console.log("Navigating to Contact page");

  window.location.href = ".html";
}


    

