 document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from submitting

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let number = document.getElementById("number").value.trim();
    let msg = document.getElementById("msg").value.trim();

    // Regex patterns
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;

    if (firstName === "") {
      alert("Please enter your First Name");
      return;
    }
    if (lastName === "") {
      alert("Please enter your Last Name");
      return;
    }
    if (!emailPattern.test(email)) {
      alert("Please enter a valid Email address");
      return;
    }
    if (!phonePattern.test(number)) {
      alert("Please enter a valid 10-digit Phone Number");
      return;
    }
    if (msg === "") {
      alert("Please enter your Message");
      return;
    }




    


    // If everything is correct
    alert("Form submitted successfully ✅");
    this.submit(); // actually submit the form
  });








  

 function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
  }

  function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message === "") return;

    // User message
    appendMessage(message, "user");

    // Simulated Gemini AI response
    setTimeout(() => {
      const responses = [
        "That's an interesting question! Let me think 🤔",
        "Here’s something helpful I found on that:",
        "I see what you mean. Let me explain in simple words.",
        "Good point! I’d suggest looking at it this way 👉",
        "Absolutely! That connects with what you just said."
      ];
      const aiResponse = responses[Math.floor(Math.random() * responses.length)];
      appendMessage("Gemini AI: " + aiResponse, "ai");
    }, 800);

    input.value = "";
  }

  function appendMessage(text, sender) {
    const msgContainer = document.createElement("div");
    msgContainer.className = "message " + sender;
    msgContainer.textContent = text;
    document.getElementById("chatMessages").appendChild(msgContainer);

    // Auto scroll
    const chatMessages = document.getElementById("chatMessages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }