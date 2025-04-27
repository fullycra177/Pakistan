function checkSIM() {
  const number = document.getElementById("numberInput").value.trim();
  const outputDiv = document.getElementById("output");
  const outputSection = document.getElementById("outputSection");

  if (!number) {
    outputSection.style.display = 'block';
    outputDiv.textContent = "Please enter a number.";
    return;
  }

  outputSection.style.display = 'block';
  outputDiv.textContent = "Fetching details...";

  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://fam-official.serv00.net/sim/api.php?num=${number}`)}`)
    .then(response => response.json())
    .then(data => {
      const result = data.contents;
      outputDiv.textContent = result;
    })
    .catch(error => {
      outputDiv.textContent = "Error fetching data. Please try again later.";
      console.error(error);
    });
}

function copyResult() {
  const text = document.getElementById("output").textContent;
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Result copied to clipboard!");
    })
    .catch(err => {
      alert("Failed to copy.");
      console.error(err);
    });
}
