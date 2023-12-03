let con = document.getElementById("con");
let nextButton = document.getElementById("nextButton");

const api = "https://emojihub.yurace.pro/api/random";

function fetchAndDisplayEmoji() {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const formattedData = `
        <div id="name">Name: ${data.name} <br>
        Emoji: ${data.htmlCode}</div>
      `;
      con.innerHTML = formattedData;
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Initial load
fetchAndDisplayEmoji();

// Event listener for the "Next" button
nextButton.addEventListener("click", fetchAndDisplayEmoji);