document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
  
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject),
    });
  
    if (response.ok) {
      console.log('User registered successfully');
      // Handle success, e.g., redirect to login page
    } else {
      console.error('Failed to register user');
      // Handle error, e.g., display an error message
    }
  });
  