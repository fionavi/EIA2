window.addEventListener("load", function () {

let person: string = prompt("Wie heißt Du?", "");

if (person != null) {
  document.getElementById("name").innerHTML = "Hallo " + person + ", wie geht es dir?";
}
});


// Idee von https://www.w3schools.com/JSREF/met_win_prompt.asp