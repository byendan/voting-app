var answerCount = 1;

function generateAnswerField(count) {
    var answerId = "answer-" + count
    var html = '<div class="form-group row">';
    html += '<label for="' + answerId + '" class="col-xs-2 col-form-label">Answer</label>';
    html += '<div class="col-xs-10">';
    html += '<input class="form-control" type="text" name="answers[answer]" value="" id="' + answerId + '">';
    html += '</div>';
    html += '</div>';
    return html
}

function addField() {
    $("#answers-area").append(generateAnswerField(answerCount));
}

$(document).ready(function() {
    addField();
});

$("#newAnsBtn").on('click', function() {
    answerCount++;
    addField();
});


