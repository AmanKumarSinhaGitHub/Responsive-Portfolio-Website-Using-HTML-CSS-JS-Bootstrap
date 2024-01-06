function submitForm() {
  const name = document.getElementById("name").value;

  const message = document.getElementById("message").value;

  if (!name || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const myEmail = "amankrsinha07@gmail.com";

  const subject = "New message from your portfolio website";

  const body = `Name: ${name}\n\n  
                Message:\n${message}`;

  const mailtoLink = `mailto:${myEmail}?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
}
