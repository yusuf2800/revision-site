const today = new Date();
const exam = new Date("2025-05-08");
const timeDifference = exam - today;

const daysUntilExam = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
const weeksUntilExam = Math.floor(daysUntilExam / 7);
const remainingDays = daysUntilExam % 7;

document.getElementById("date").textContent = `🚨Days until GCSE: ${daysUntilExam}🚨`;

