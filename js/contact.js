const form = document.querySelector("#contactForm");
const successDiv = document.querySelector(".successContainer");

form.addEventListener("submit", validateForm);

// form validation
function validateForm(event) {
  event.preventDefault();
  console.log("Submitted");


  validateName();
  validateAnswer();
  validateEmailInput();
  validateAddress();
  displaySuccess();

  // name validation
  function validateName() {
    const nameField = document.querySelector("#name");
    const nameError = document.querySelector("#nameError");
    const nameValue = nameField.value;

    if (valueCheck(nameValue) === true) {
      nameError.style.display = "none";
      return true;
    } else {
      nameError.style.display = "block";
      return false;
    }
  }

  function valueCheck(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  // answer validation
  function validateAnswer() {
    const answerField = document.querySelector("#answer");
    const answerError = document.querySelector("#answerError");
    const answerValue = answerField.value;

    if (answerCheck(answerValue) === true) {
      answerError.style.display = "none";
      return true;
    } else {
      answerError.style.display = "block";
      return false;
    }
  }

  function answerCheck(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 9) {
      return true;
    } else {
      return false;
    }
  }

  // email validation
  function validateEmailInput() {
    const emailField = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");
    const emailValue = emailField.value;

    function validateEmail(email) {
      const regEx = /\S+@\S+\.\S+/;
      return regEx.test(email);
    }

    if (valueCheck(emailValue)) {
      emailError.style.display = "none";
      structureCheck();
    } else {
      emailError.style.display = "block";
      invalidEmailError.style.display = "none";
    }

    function structureCheck() {
      if (validateEmail(emailValue)) {
        invalidEmailError.style.display = "none";
        return true;
      } else {
        invalidEmailError.style.display = "block";
        return false;
      }
    }

    if (structureCheck() === true) {
      return true;
    } else {
      return false;
    }
  }

  // address validation
  function validateAddress() {
    const addressField = document.querySelector("#address");
    const addressError = document.querySelector("#addressError");
    const addressValue = addressField.value;

    if (addressCheck(addressValue) === true) {
      addressError.style.display = "none";
      return true;
    } else {
      addressError.style.display = "block";
      return false;
    }
  }

  function addressCheck(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 14) {
      return true;
    } else {
      return false;
    }
  }

  // display message
  function displaySuccess() {
    if (validateName() === true) {
      checkAnswer();
    } else {
      displayMissing();
    }

    function checkAnswer() {
      if (validateAnswer() === true) {
        checkEmail();
      } else {
        displayMissing();
      }
    }

    function checkEmail() {
      if (validateEmailInput() === true) {
        checkAddress();
      } else {
        displayMissing();
      }
    }

    function checkAddress() {
      if (validateAddress() === true) {
        displaySuccessMessage();
      } else {
        displayMissing();
      }
    }

    function displayMissing() {
      let html = "";

      html += ` <h3>Ooops.. Something is missing!</h3>`;

      successDiv.innerHTML = html;
    }

    function displaySuccessMessage() {
      let html = "";

      html += ` <h2>You're all good &#x1f44d;</h2>`;

      successDiv.innerHTML = html;
    }
  }
}