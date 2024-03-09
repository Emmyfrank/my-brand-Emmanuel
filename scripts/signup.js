const signUpForm = document.getElementById('signupform');

const baseUrl = "https://backend-ctov.onrender.com/api/v1/users/register"

signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const name = document.getElementById('name');

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const buttonnToloady = document.getElementById("btn");
    let loading = false;

    buttonnToloady.textContent = "Loading...";
  buttonnToloady.attributes.disabled = true;


   const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },


        body: JSON.stringify({
            name: name.value,
            username: username,
            email: email,
            password: password
        })
    });
    let res = await response.json();
    if(res){
        window.alert("Account created successfully go and login");
    }
    buttonnToloady.textContent = "Signup";
    buttonnToloady.attributes.disabled = false;

    // console.log("from server: " + JSON.parse(response))
    console.log("from server: " + response.data)
    signUpForm.reset();

 })
 