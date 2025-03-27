function handleSubmit(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const emoji = document.getElementById("emoji").value;
  
    const fullMessage = `${message} ${emoji}`;
  
    // Simulate sending
    const status = document.getElementById("form-status");
    status.innerText = `Thank you! Your message:\n"${fullMessage}" was sent from ${email}.`;
  
    // Optionally clear form
    event.target.reset();
  
    return false;
  }
  