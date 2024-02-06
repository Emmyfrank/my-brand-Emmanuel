function handleLogin() {
    const errorMessage = document.getElementById('error-message');
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are filled
    if (!username || !password) {
        errorMessage.textContent = 'Fill UserName and Passwoed';
        return;
  }
  // check weak password
  if (password.length < 4) {
    return errorMessage.textContent = "Weak Password";
  }


    // Check if the entered credentials are valid )
    if (validateCredentials(username, password)) {
        // link to admin dashboard if credintial are valid
        window.location.href = './dashboard.html';
    } else {
        // error message
        errorMessage.textContent = 'Invalid username or password.';
    }
}

function validateCredentials(username, password) {
    
    // this isstatic admin username and password
    const validUsername = 'Emmy';
  const validPassword = '     ';
  
  
  return username === validUsername && password === validPassword;

}








