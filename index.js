document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const agree = document.getElementById("agree").checked;
  if (!agree) {
    alert("You must agree to the Privacy Agreement before logging in.");
    return;
  }

  alert("Login successful! (Demo only)");
});