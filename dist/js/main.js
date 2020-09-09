const menuBtn = $(".menu-btn");
const link = $(".nav-link");
const menu = $(".menu");
const menuNav = $(".menu-nav");
const menuBranding = $(".menu-branding");
const navItems = $(".nav-item");
const email = $(".email");
const send = $(".send");
const error = $(".error");
const name = $("#name");

// Set Initial state of Menu
let showMenu = false;
let re = "";
let nameValue = "";
let validEmail = false;

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.addClass("close");
    menu.addClass("show");
    menuNav.addClass("show");
    menuBranding.addClass("show");
    navItems.addClass("show");
    showMenu = true;
  } else {
    menuBtn.removeClass("close");
    menu.removeClass("show");
    menuNav.removeClass("show");
    menuBranding.removeClass("show");
    navItems.removeClass("show");
    showMenu = false;
  }
};

const checkEmail = (event) => {
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  nameValue && re.test(String(event.target.value).toLowerCase())
    ? send.prop("disabled", false)
    : send.prop("disabled", true);
  re.test(String(event.target.value).toLowerCase())
    ? error.hide()
    : error.show();
  re.test(String(event.target.value).toLowerCase())
    ? (validEmail = true)
    : (validEmail = false);
};

const checkName = (event) => {
  nameValue = event.target.value;
  nameValue && validEmail
    ? send.prop("disabled", false)
    : send.prop("disabled", true);
};

// Menu listner
menuBtn.on("click", toggleMenu);
link.on("click", toggleMenu);
email.on("keyup", checkEmail);
name.on("keyup", checkName);
