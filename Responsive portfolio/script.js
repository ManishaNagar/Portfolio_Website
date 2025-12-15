// ================= NAVBAR TOGGLE =================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// toggle menu open/close
menuIcon.onclick = () => {
    const isOpen = navbar.classList.toggle("active");

    if (isOpen) {
        //show cross icon
        menuIcon.classList.remove("bx-menu");
        menuIcon.classList.add("bx-x");
    } else {
        // shows three horizontal lines icon
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");
    }
};

// close menu when clicking a link
document.querySelectorAll(".navbar a").forEach(link => {
    link.onclick = () => {
        // close menu when clicking a link  that is when a navigation link is clicked and shows cross icon
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");
    };
});

// ================= READ MORE BUTTON =================

function toggleContent(contentId, btnId) {
  var content = document.getElementById(contentId);
  var btn = document.getElementById(btnId);

  if (!content || !btn) return;

  if (content.style.display === "" || content.style.display === "none") {
    content.style.display = "block";
    btn.innerText = "Read Less";
  } else {
    content.style.display = "none";
    btn.innerText = "Read More";
  }
}


// ================= PHONE NUMBER VALIDATION =================
document.getElementById("phone").addEventListener("input", function () {
    let phone = this.value;
    let err = document.getElementById("phone-error");

    if (/^[0-9]{10}$/.test(phone)) {
        err.style.display = "none";
    } else {
        err.style.display = "block";
    }
});

//UPDATE completed  
