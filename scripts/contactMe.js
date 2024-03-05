const messgeForm = document.getElementById("message-form");
const message = document.getElementById("msg");
const Name = document.getElementById("subject");
const email = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const contactButton = document.querySelector(".contactBtnn");



messgeForm.addEventListener("submit",async (e) => {
    e.preventDefault();
    if(message.value.length === 0){
        errorMessage.textContent = "Message required";
        setTimeout(() => {
            errorMessage.textContent = "";
            
        }, 5000);
        return false;

    }

    if(Name.value.length === 0){
        errorMessage.textContent = "name required";
        setTimeout(() => {
            errorMessage.textContent = "";
            
        }, 5000);
        return false;

    }

    if(email.value.length === 0){
        errorMessage.textContent = "Email required";
        setTimeout(() => {
            errorMessage.textContent = "";
            
        }, 5000);
        return false;

    }




    const formData = { email: email.value, message: message.value, name: Name.value };
    
    contactButton.textContent = "Loading...";
    contactButton.attributes.disabled = true;
     const response = await fetch('https://backend-ctov.onrender.com/api/v1/messages',{
    method: "POST",
    body:JSON.stringify(formData),
    headers:{
      "Content-Type": "application/json"
    }
  });
  contactButton.textContent = "submit";
  contactButton.attributes.disabled = false;

  const data = await response.json();
  if(response.status === 201){
    messgeForm.reset();
    successMessage.textContent = "Message sent";
    setTimeout(() => {
        errorMessage.textContent = "";
        
    }, 5000);
    return false;


  }
  else{
    errorMessage.textContent = data.message;
    setTimeout(() => {
        errorMessage.textContent = "";
        
    }, 5000);
    return false;
    
  }
});
