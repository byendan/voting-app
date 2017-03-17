'use strict';

(function () {
    
    var url = window.location.href;
    url = url.split("/");
    var pollId = url[url.length - 1];
   
    var title = document.querySelector('#question') || null;
    var apiUrl = appUrl + '/api/' + pollId + '/polls'; 
    
    function updateHtmlElement (data, element, userProperty) {
      element.innerHTML = data[userProperty];
    }
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function (data) {
        var pollObject = JSON.parse(data);
        
        if(pollObject.title !== null) {
            updateHtmlElement(pollObject, title, 'title');
        } else {
            updateHtmlElement(pollObject, title, 'question needed');
        }
        
        var answers = pollObject.responses;
        for (var i = 0; i < answers.length; i++) {
            var answerHtml = "<div id='answer-" + i + "'>";
            answerHtml += "<p>" + answers[i].response + "</p>";
            answerHtml += "</div>";
            $("#poll-answers").append(answerHtml);
        }
        
        
    }));
})();