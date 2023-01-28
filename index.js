javascript: var inputBox = document.getElementsByClassName('questions-input-adjustment questions-input-width-v3')[0];
var submitButton = document.getElementsByClassName('question-input-form')[0];
for (var i = 0; i < 100; i++) {
    var question = document.getElementsByClassName("questions-text-alignment")[0].innerText;
    question = question.replace(' =', '');
    var answer = eval(question);
    alert(answer);
    inputBox.value = answer;
    submitButton.submit();
    innerSubmitAnswer(innerAnswerInput);
}
