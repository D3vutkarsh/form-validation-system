const button = document.querySelector("button")
button.addEventListener("click", (e) => {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const number = document.getElementById("number")
    const pass = document.getElementById("pass")
    const ConfirmPass = document.getElementById("ConfirmPass")
    const error_name = document.querySelector(".error_name")
    const error_email = document.querySelector(".error_email")
    const error_no = document.querySelector(".error_no")
    const error_pass = document.querySelector(".error_pass")
    const error_confirmpass = document.querySelector(".error_confirmpass")

    let a;
    if (name.value.length < 5) {
        error_name.innerHTML = "Name must not be less than 5 characters";
        a = false;
    }
    let b = false;
    let c;
    for (var i = 0; i < email.value.length; i++) {
        if (email.value[i] == "@") {
            b = true;
        }
    }

    if (b == false) {
        error_email.innerHTML = "Enter valid email address";
        c = false;
    }

    let d;
    if (number.value == "123456789" || number.value.length != 10) {
        error_no.innerHTML = "Enter Valid Number";
        d = false;
    }
    let f;

    if (pass.value == "password" || pass.value == name.value || pass.value.length < 8) {
        error_pass.innerHTML = "Password is less than 8 characters or too weak password"
        f = false;
    }
    let g;
    if (ConfirmPass.value != pass.value) {
        error_confirmpass.innerHTML = "Passwords do not match";
        g = false;
    }

    if (a == false || c == false || d == false || f == false || g == false) {
        alert("Error submitting form.")
    }
    else {
        alert("Form submitted successfully .")
    }
})