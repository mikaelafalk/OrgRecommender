var questions = [
    {
        'question': 'do you like sports',
        'type': 'multipleChoice',
        'choices': ['yes','no','maybe'],
        'filters': [
            function(group) {return true;},
            function(group) {return false;},
            function(group) {return false;}
        ]
    }
]

var questionNumber = 0;
generateQuestion();

function generateQuestion() {
    var question = questions[questionNumber];
     //display question
    writeQuestionText(question.question);
    
    if (question.type === 'multipleChoice') {
        //generate a multiple choice question here
            //display all answers
                //grab place to put them
                var answerLocation = document.querySelector('#answerSpot'); 
                answerLocation.innerHTML = '<form>';
            for (var i = 0; i < question.choices.length; i++) {
                answerLocation.innerHTML += '<input type="radio" value="' + i + '">';
            }
                answerLocation.innerHTML = '</form>';
            //handle response
            var form = document.querySelector('#answerSpot form');
            form.onsubmit = function(e) {
                e.target.value
                filterGroups(filter[i])
            }
    }
}

function questionText(text) {
    //find where to display text
    var textlocation = document.querySelector('#myID');
    //insert our text onto that spot
    var textLocation.innerText = text;
}


//person answers question causing function meets() to be created

for (var i = 0; i < groups.length; i++) {
    if (!filter(group[i]) {
        groups.splice(i,1);
    }
}