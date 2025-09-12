// Mental Health Tests Functionality

// Test data
const tests = {
  phq9: {
    title: "PHQ-9 Depression Screening",
    description:
      "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    questions: [
      "Little interest or pleasure in doing things",
      "Feeling down, depressed, or hopeless",
      "Trouble falling or staying asleep, or sleeping too much",
      "Feeling tired or having little energy",
      "Poor appetite or overeating",
      "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
      "Trouble concentrating on things, such as reading the newspaper or watching television",
      "Moving or speaking so slowly that other people could have noticed, or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
      "Thoughts that you would be better off dead, or of hurting yourself in some way",
    ],
  },
  gad7: {
    title: "GAD-7 Anxiety Screening",
    description:
      "Over the last 2 weeks, how often have you been bothered by the following problems?",
    questions: [
      "Feeling nervous, anxious, or on edge",
      "Not being able to stop or control worrying",
      "Worrying too much about different things",
      "Trouble relaxing",
      "Being so restless that it is hard to sit still",
      "Becoming easily annoyed or irritable",
      "Feeling afraid, as if something awful might happen",
    ],
  },
};

const options = [
  { value: 0, text: "Not at all" },
  { value: 1, text: "Several days" },
  { value: 2, text: "More than half the days" },
  { value: 3, text: "Nearly every day" },
];

let currentTest = null;
let currentQuestionIndex = 0;
let answers = [];

function startTest(testType) {
  currentTest = testType;
  currentQuestionIndex = 0;
  answers = new Array(tests[testType].questions.length).fill(null);

  document.getElementById("home-section").classList.add("hidden");
  document.getElementById("test-section").classList.remove("hidden");
  document.getElementById("results-section").classList.add("hidden");

  setupTestInterface();
  showQuestion();
}

function setupTestInterface() {
  const test = tests[currentTest];
  document.getElementById("test-title").textContent = test.title;
  document.getElementById("test-description").textContent = test.description;
  document.getElementById("total-questions").textContent =
    test.questions.length;
}

function showQuestion() {
  const test = tests[currentTest];
  const question = test.questions[currentQuestionIndex];

  const questionHtml = `
        <div class="question">
            <h3>${currentQuestionIndex + 1}. ${question}</h3>
            <div class="question-options">
                ${options
                  .map(
                    (option, index) => `
                    <div class="option">
                        <input type="radio" 
                               id="option_${index}" 
                               name="question_${currentQuestionIndex}" 
                               value="${option.value}"
                               ${
                                 answers[currentQuestionIndex] === option.value
                                   ? "checked"
                                   : ""
                               }
                               onchange="saveAnswer(${option.value})">
                        <label for="option_${index}">${option.text}</label>
                    </div>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;

  document.getElementById("question-container").innerHTML = questionHtml;

  // Update progress
  const progress = ((currentQuestionIndex + 1) / test.questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";

  // Update counter
  document.getElementById("current-question").textContent =
    currentQuestionIndex + 1;

  // Update navigation buttons
  document.getElementById("prev-btn").style.display =
    currentQuestionIndex > 0 ? "inline-flex" : "none";
  document.getElementById("next-btn").textContent =
    currentQuestionIndex === test.questions.length - 1 ? "Submit" : "Next";
}

function saveAnswer(value) {
  answers[currentQuestionIndex] = value;
}

function nextQuestion() {
  if (answers[currentQuestionIndex] === null) {
    alert("Please select an answer before continuing.");
    return;
  }

  if (currentQuestionIndex < tests[currentTest].questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function showResults() {
  const score = answers.reduce((sum, answer) => sum + (answer || 0), 0);
  const severity = getSeverity(score, currentTest);

  document.getElementById("test-section").classList.add("hidden");
  document.getElementById("results-section").classList.remove("hidden");

  document.getElementById("score-number").textContent = score;
  document.getElementById("severity-badge").textContent = severity.level;
  document.getElementById(
    "severity-badge"
  ).className = `severity-badge severity-${severity.level.toLowerCase()}`;
  document.getElementById("score-interpretation").textContent = severity.range;
  document.getElementById("results-message").textContent = severity.message;
  document.getElementById(
    "results-title"
  ).textContent = `Your ${tests[currentTest].title} Results`;
}

function getSeverity(score, testType) {
  if (testType === "phq9") {
    if (score <= 4)
      return {
        level: "Minimal",
        range: `Score: ${score}/27`,
        message:
          "Your responses suggest minimal depression symptoms. This is a positive result indicating good mental health in this area. Continue maintaining healthy lifestyle habits and reach out for support if needed.",
      };
    else if (score <= 9)
      return {
        level: "Mild",
        range: `Score: ${score}/27`,
        message:
          "Your responses indicate mild depression symptoms. While this may not significantly impact daily life, consider speaking with a healthcare provider or counsellor for guidance and support strategies.",
      };
    else if (score <= 14)
      return {
        level: "Moderate",
        range: `Score: ${score}/27`,
        message:
          "Your responses suggest moderate depression symptoms. We recommend speaking with a healthcare professional who can provide appropriate support and treatment options to help improve your wellbeing.",
      };
    else
      return {
        level: "Severe",
        range: `Score: ${score}/27`,
        message:
          "Your responses indicate severe depression symptoms. Please consider reaching out to a healthcare provider, counsellor, or mental health professional as soon as possible for proper evaluation and support.",
      };
  } else {
    // GAD-7
    if (score <= 4)
      return {
        level: "Minimal",
        range: `Score: ${score}/21`,
        message:
          "Your responses suggest minimal anxiety symptoms. This indicates good emotional wellbeing in this area. Continue practicing stress management techniques and healthy coping strategies.",
      };
    else if (score <= 9)
      return {
        level: "Mild",
        range: `Score: ${score}/21`,
        message:
          "Your responses indicate mild anxiety symptoms. Consider exploring relaxation techniques, mindfulness practices, or speaking with a counsellor for additional coping strategies and support.",
      };
    else if (score <= 14)
      return {
        level: "Moderate",
        range: `Score: ${score}/21`,
        message:
          "Your responses suggest moderate anxiety symptoms. We recommend consulting with a healthcare professional who can help develop an appropriate treatment plan and provide effective anxiety management strategies.",
      };
    else
      return {
        level: "Severe",
        range: `Score: ${score}/21`,
        message:
          "Your responses indicate severe anxiety symptoms. Please consider contacting a healthcare provider or mental health professional promptly for proper evaluation, support, and treatment options.",
      };
  }
}

function showBookingForm() {
  alert(
    "Thank you for your interest in booking a counsellor. This feature would connect to our booking system. For now, please contact us directly or visit our Resources page for immediate support options."
  );
}

function goToResources() {
  window.location.href = "index.html#blog";
}

function retakeTest() {
  document.getElementById("results-section").classList.add("hidden");
  document.getElementById("home-section").classList.remove("hidden");
  currentTest = null;
  currentQuestionIndex = 0;
  answers = [];
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", function () {
  // Add any initialization code here if needed
  console.log("Mental Health Tests page loaded successfully");
});
