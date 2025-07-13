document.getElementById("validatorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("certificateInput").value.trim();
  const resultBox = document.getElementById("resultBox");

  resultBox.classList.remove("hidden", "success", "error");

  // Dummy validation logic (as per assignment)
  const validCert = "VLT2025CERT";
  if (input === validCert) {
    resultBox.textContent = "✅ Certificate is valid!";
    resultBox.classList.add("success");
  } else {
    resultBox.textContent = "❌ Certificate not found. Please check your ID.";
    resultBox.classList.add("error");
  }
});
