// Form validation
document.getElementById("form1").addEventListener("submit", function (event) {
  const username = document.getElementById("username").value;

  // Validate the username
  if (!username) {
    alert("Please enter a username.");
    event.preventDefault(); // Prevent form submission
  } else {
    alert("Username submitted successfully!");
  }
});

// Modal functionality
document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block"; // To display the hidden modal
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none"; // To hide the modal content
});
