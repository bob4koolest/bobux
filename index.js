window.onscroll = function() {
  checkNavbar();
}

function checkNavbar() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background = "var(--bobux-dark)";
    document.getElementById("navbar").style.boxShadow = "0px 4px 11px 0px rgba(0,0,0,0.89)";
    document.getElementById("navbar").style.mozBoxShadow = "0px 4px 11px 0px rgba(0,0,0,0.89)";
    document.getElementById("navbar").style.webkitBoxShadow = "0px 4px 11px 0px rgba(0,0,0,0.89)";
  } else {
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("navbar").style.mozBoxShadow = "none";
    document.getElementById("navbar").style.webkitBoxShadow = "none";
  }
}

function init() {
  setTimeout(function() {
    document.getElementById("introtitle").style.borderBottom = "5px solid var(--bobux-blue)";
  }, 1000);
  setTimeout(function() {
    document.getElementById("introdescription").style.opacity = "1";
    document.getElementById("topbackground").style.opacity = "1";
  }, 2000);
}

function checkBooking() {
  document.getElementById("loaderone").style.display = "inline-block";
  document.getElementById("bookingsubmit").style.cursor = "not-allowed";
  document.getElementById("loadsubmit").innerText = "Please wait";
  setTimeout(function() {
    document.getElementById("loaderone").style.display = "none";
    document.getElementById("loadsubmit").innerText = "Submit";
    document.getElementById("bookingsubmit").style.cursor = "pointer";
    document.getElementById("errormessage").style.display = "block";

    document.getElementById("bbooking").style.width = "94%";
    document.getElementById("bdate").style.width = "94%";
    document.getElementById("bdiv").style.width = "100%";
    document.getElementById("bookingsubmit").style.width = "100%";
  }, 4000);

}
