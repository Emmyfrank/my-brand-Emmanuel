const signUpForm = document.getElementById('signupform');

const baseUrl = "https://backend-ctov.onrender.com/api/v1/users/register"

signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const name = document.getElementById('name');

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


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

    // console.log("from server: " + JSON.parse(response))
    console.log("from server: " + response.data)


 })