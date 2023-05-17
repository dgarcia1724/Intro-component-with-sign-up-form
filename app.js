const button = document.querySelector("button");

// inputs
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const emailAddress = document.querySelector(".emailAddress");
const password = document.querySelector(".password");

// error messages
const firstNameError = document.querySelector(".firstNameError");
const lastNameError = document.querySelector(".lastNameError");
const emailAddressError = document.querySelector(".emailAddressError");
const passwordError = document.querySelector(".passwordError");

// error Icons
const firstNameIcon = document.querySelector(".firstNameIcon");
const lastNameIcon = document.querySelector(".lastNameIcon");
const emailAddressIcon = document.querySelector(".emailAddressIcon");
const passwordIcon = document.querySelector(".passwordIcon");

button.addEventListener("click", function () {
  // one
  if (firstName.value === "") {
    firstNameError.style.display = "block";
    firstNameIcon.style.display = "block";
    firstName.classList.add("borderAndFont");
  } else {
    firstNameError.style.display = "none";
    firstNameIcon.style.display = "none";
    firstName.classList.remove("borderAndFont");
  }
  // two
  if (lastName.value === "") {
    lastNameError.style.display = "block";
    lastNameIcon.style.display = "block";
    lastName.classList.add("borderAndFont");
  } else {
    lastNameError.style.display = "none";
    lastNameIcon.style.display = "none";
    lastName.classList.remove("borderAndFont");
  }
  // three
  if (emailAddress.value === "") {
    emailAddressError.querySelector("p").textContent = "Email cannot be empty";

    emailAddressError.style.display = "block";
    emailAddressIcon.style.display = "block";
    emailAddress.classList.add("borderAndFont");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.value)) {
    emailAddressError.querySelector("p").textContent =
      "Looks like this is not an email";
    emailAddressError.style.display = "block";
    emailAddressIcon.style.display = "block";
    emailAddress.classList.add("borderAndFont");
  } else {
    emailAddressError.style.display = "none";
    emailAddressIcon.style.display = "none";
    emailAddress.classList.remove("borderAndFont");
  }
  // four
  if (password.value === "") {
    passwordError.style.display = "block";
    passwordIcon.style.display = "block";
    password.classList.add("borderAndFont");
  } else {
    passwordError.style.display = "none";
    passwordIcon.style.display = "none";
    password.classList.remove("borderAndFont");
  }
});
