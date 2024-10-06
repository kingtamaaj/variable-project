// select form and output div 
const form = document.getElementById('form');
const output = document.getElementById('output');

// add an event listener to handle the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    // prevents the page from reloading or navigating away

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    output.innerHTML = `<p>Name: ${name}</p> <p>Email: ${email}</p>`;
});

