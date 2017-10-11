
var rightAnswerCode = '';
var rightAnswersInTest = 0;
var attemptsToAnswer = 0;
var questionsInTests = 0;

var currentQuestions;
var currentAnswers;
var currentCaption;
var activeQuestion;
var startQuestion;
var currentTest;

function setupTest (questions, caption, answers) {
    var testFileName = 'sounds/' + questions [activeQuestion][0] + ".mp3";
    rightAnswerCode = questions [activeQuestion][1];

    var testCaptionNode = document.getElementById ("testcaption");
    testCaptionNode.innerHTML = caption;

    var captionNode = document.getElementsByClassName ("et_audio_module_meta") [0];
    //captionNode.innerHTML = '<p class="et_audio_module_meta">' + caption + '</p>';

    var audioNode = document.getElementsByTagName ("audio") [0];
    audioNode.setAttribute ("src", testFileName + "?_=1");

    var sourceNode = audioNode.getElementsByTagName ("source") [0];
    sourceNode.setAttribute ("src", testFileName + "?_=1");

    var aNode = audioNode.getElementsByTagName ("a") [0];
    aNode.setAttribute ("href", testFileName);

    audioNode.load ();

    var answersPrompt = document.getElementById ("answerprompt");
    answersPrompt.innerHTML = "Пожалуйста, выберите ответ:";
    answersPrompt.removeAttribute ("style");

    var answersNode = document.getElementById ("answermenu");
    while (answersNode.hasChildNodes ()) {
        answersNode.removeChild (answersNode.firstChild);
    }
    
    var longest = answers.slice().sort(function (a, b) { return b[0].length - a[0].length; })[0][0].length;
    longest = Math.min (longest*1.5, 8.3);
    for (var i = 0; i < answers.length; i++) {
        var a = document.createElement ("a");
        a.innerHTML = "<strong>" + answers [i][0] + "</strong>" + "&emsp;";
        a.setAttribute ('href', "#answers");
        a.setAttribute ('onclick', "checkTest(this);");
        a.setAttribute ('title', answers [i][1]);
        var liNode = document.createElement ("li");
        liNode.appendChild (a);
        liNode.setAttribute ("id", answers [i][2]);
        liNode.setAttribute ("style", "width:" + longest.toString() + "em");
        answersNode.appendChild (liNode);
    }
}

function choseTest (questions, answers, caption) {
    var randQuests = shuffle (questions);
    rightAnswersInTest = 0;
    attemptsToAnswer = 0;
    questionsInTests = questions.length;

    currentQuestions = randQuests;
    currentAnswers = answers;
    currentCaption = caption;

    startQuestion = Math.round (questionsInTests * Math.random() - 0.5);
    activeQuestion = startQuestion;

    setupTest (randQuests, caption, answers);
    setBars (rightAnswersInTest, attemptsToAnswer, rightAnswersInTest, questionsInTests);
}

function nextQuestion () {
    activeQuestion = (activeQuestion + 1) % questionsInTests;
    if (startQuestion == activeQuestion) {
        var nextButton = document.getElementById ("gotonextquestion");
        var aNode = nextButton.getElementsByTagName ("a") [0];
        aNode.setAttribute ("href", "#exam");
        aNode.innerHTML = "Всё сначала ещё раз";
        aNode.setAttribute ("onclick", "selectTest (currentTest)");
    }
    setupTest (currentQuestions, currentCaption, currentAnswers);
}

function selectTest (sel) {
    currentTest = sel;
    var optId = sel.options [sel.selectedIndex].getAttribute ("id");
    var group = optId.charAt (1);
    var index = optId.substr (3, optId.length -1);
    var g = Number (group) - 1;
    var i = Number (index) - 1;
    choseTest (eval (allTests [g][i][0]),
               eval (allTests [g][i][1]),
               allTests [g][i][2]);
    setupMethodics (g, i);

    var selectNodes = document.getElementsByTagName ("select");
    for (var i = 0; i < selectNodes.length; i++ ) {
        if (selectNodes [i].id != sel.id) {
            selectNodes [i].selectedIndex = 0;
        }
    }

    var nextButton = document.getElementById ("gotonextquestion");
    var aNode = nextButton.getElementsByTagName ("a") [0];
    aNode.setAttribute ("href", "#exam");
    aNode.innerHTML = "Следующий вопрос";
    aNode.setAttribute ("onclick", "nextQuestion()");

    location.href = "#exam";
}

function setupMethodics (group, index) {
    var methodicsNode = document.getElementById ("methodics");

    if (group == 0) {
        var textNode = methodicsNode.getElementsByClassName ("learn-more-content") [0];
        var j = 0;
        if (index < 4) j = index;
        else if (index < 9) j = 3;
        else if (index < 15) j = 4;
        else j = index - 10;
        textNode.innerHTML = methodicTexts [j]; 
        methodicsNode.setAttribute ("style", "visibility:visible");
    }
    else {
        methodicsNode.setAttribute ("style", "visibility:hidden");
    }

}

function checkTest (sel) {
    var answersNode = document.getElementById ("answerprompt");
    var chosen = sel.parentNode;

    attemptsToAnswer++;

    if (chosen.id != rightAnswerCode) {
        answersNode.setAttribute ("style", "color:#f23b1c");
        answersNode.innerHTML = "Неправильно, попробуйте ещё раз";
        sel.setAttribute ("style", "color:#f23b1c");
        sel.innerHTML = "<del><strong>" + sel.textContent.trim() + "</strong></del>" + "&emsp;";
    } else {
        rightAnswersInTest++;
        answersNode.setAttribute ("style", "color:#127826");
        answersNode.innerHTML = "Верно; переходите к следующему вопросу";
        sel.setAttribute ("style", "color:#127826");
    }

    setBars (rightAnswersInTest, attemptsToAnswer, rightAnswersInTest, questionsInTests);
}

function setBars (rightAnswers, attempts, questionsPassed, totalQuestions) {
    var a, q;
    if (attempts == 0) a = 0;
    else a = Math.round ((rightAnswers / attempts) * 100).toString ();
    if (totalQuestions == 0) q = 0;
    else q = Math.round ((questionsPassed / totalQuestions) * 100).toString ();

    var progressNode = document.getElementById ("testProgress");
    var barNodes = progressNode.getElementsByClassName ("et_pb_counter_amount");

    barNodes [0].setAttribute ("style", "width: " + a + "%; background-color: rgb(46, 163, 242);");
    barNodes [0].style.width = a + "%";
    barNodes [0].setAttribute ("data-width", a + "%");
    //barNodes [0].data-width = a + "%";
    barNodes [0].getElementsByClassName ("et_pb_counter_amount_number") [0].innerHTML = a + "%";

    barNodes [1].setAttribute ("style", "width: " + q + "%; background-color: rgb(46, 163, 242);");
    barNodes [1].style.width = q + "%";
    barNodes [1].setAttribute ("data-width", q + "%");
    //barNodes [1].data-width = q + "%";
    barNodes [1].getElementsByClassName ("et_pb_counter_amount_number") [0].innerHTML = q + "%";

    var barTitles = progressNode.getElementsByClassName ("et_pb_counter_title");
    barTitles [0].innerHTML = "Правильных ответов: " + rightAnswers.toString() + " (попыток: " + attempts.toString() + ")";
    barTitles [1].innerHTML = "Пройдено вопросов: " + questionsPassed.toString() + " (всего в тесте: " + totalQuestions.toString() + ")";
}

function shuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor (Math.random () * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array [currentIndex];
      array [currentIndex] = array [randomIndex];
      array [randomIndex] = temporaryValue;
    }

    return array;
}

jQuery(document).ready( function($) {
    //console.log( "ready!" );
});
