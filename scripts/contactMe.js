const messgeForm = document.getElementById("message-form");
const message = document.getElementById("msg");
const subject = document.getElementById("subject");
const email = document.getElementById("email");

// const myArr = [{ name: "soleil", exp: "js py" }, 34]
// localStorage.setItem("messagesy", JSON.stringify(myArr))

messgeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = { email: email.value, message: message.value, subject: subject.value };

    // Retrieve existing data from localStorage
    const retrivedArr = JSON.parse(localStorage.getItem("messages")) || []

    // Add the new form data to the container
    retrivedArr.push(formData);

    // Save the updated container back to localStorage
    localStorage.setItem("messages", JSON.stringify(retrivedArr ));

    // Reset the form
    messgeForm.reset();

    // Log the form values
    console.log(formData.email);
    console.log(formData.subject);
    console.log(formData.message.trim());
});








console.log("retrived ddtaa : ",retrivedArr)