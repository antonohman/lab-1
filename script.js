function startQuiz() {
    let quiz1 = prompt("Vad blir 506 + 831?")
    let quiz2 = prompt("Vad bör man inte ha i chokladbollar?")
    let quiz3 = prompt("Vem föreställer jag?")
    let quiz4 = prompt("Är du nykter?")
    let correctAnswers = 0

if (quiz1 == "1337" || quiz1 == 1337) {
    correctAnswers += 1
  }

if (quiz2 == "marsipan" || quiz2 == "Marsipan") {
    correctAnswers += 1
  }
  
if (quiz3 == "Michael Jackson" || quiz3 == "michael jackson" || quiz3 == "Micke J") {
    correctAnswers += 1
  }

if (quiz4 == "Ja" || quiz4 == "ja") {
    correctAnswers += 1
  }

let prisonRealese = 0;
  if (correctAnswers == 4) {
    prisonrealese = alert("Fantastiskt, du är fri!")

  } else if (correctAnswers <= 3) {
    prisonrealese = alert("Vad i hela friden? Försök igen...")
  }
  
}

// const resultsContainer = document.getElementById('results')