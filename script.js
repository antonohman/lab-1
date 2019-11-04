function startQuiz() {
  let quiz1 = prompt("Vad blir 506 + 831?").toLowerCase()
  let quiz2 = prompt("Vad bör man inte ha i chokladbollar?").toLowerCase()
  let quiz3 = prompt("Vem föreställer jag?").toLowerCase()
  let quiz4 = prompt("Är du nykter?").toLowerCase()
  let correctAnswers = 0

  if (quiz1 === "1337") {
    correctAnswers += 1
  }

  if (quiz2 === "marsipan") {
    correctAnswers += 1
  }

  if (quiz3 === "michael jackson" || quiz3 === "micke j" || quiz3 === "mj") {
    correctAnswers += 1
  }

  if (quiz4 === "ja") {
    correctAnswers += 1
  }

  let prisonRealese = 0;
  if (correctAnswers === 4) {
    prisonrealese = alert("Fantastiskt, du är fri!")

  } else if (correctAnswers <= 3) {
    prisonrealese = alert("Vad i hela friden? Försök igen...")
  }

}