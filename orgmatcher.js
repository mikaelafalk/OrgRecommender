document.body.contenteditable = 'true';
document.designMode = 'on';

var lis = document.getElementsByTagName("li");
for (var i in lis) {
	lis[li].onclick = function() {}
		lis[i].style = "opacity: 0";
	}
}

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



var groups = 
[
  {
    "Name": "Adopt A Grandparent",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Adventist Christian Fellowship",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Africa Conversations Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Agape Campus Christian Fellowship",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "American Medical Student Association Premed Chapter",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "American Medical Women's Association Undergraduate Chapter",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "American Society for Microbiology at Duke University",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "American Society of Civil Engineers",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "American Society of Mechanical Engineers",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Arts Annex Student Advisory Board",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "ArtsConnect",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Asian American Alliance",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Asian Students Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Autism Speaks U Duke",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Bench and Bar Pre-Law Society",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Best Buddies College - Duke Chapter",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Big Brothers Big Sisters at Duke",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Biology Majors Union",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Biomedical Engineering Society",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Black Men's Union",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Black Student Alliance",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Black Women's Union",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Blue Devils United",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Blue Devils versus Cancer",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Buddhist Meditation Community",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Cambridge Christian Fellowship",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Camp Kesem North Carolina",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Center for Race Relations",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Chabad Student Group",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Challah for Hunger at Duke",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "CHANCE",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Christians on Campus",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Circle K International",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Class of 2016 Council",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Club Ski & Snowboard",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Club Tennis (Men)",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Club Tennis (Men)",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Club Tennis (Women)",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Coalition for Preserving Memory",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Crazies Who Care",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Cru",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Cuban American Student Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Dance Program Student Board",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Defining Movement Dance Group",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Delta Sigma Pi",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Democracy Matters",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Desarrolla",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Design for America Duke",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Africa",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Aikido Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Alliance for Citizenship and Education of the Under-resourced",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Asian American Theater",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Association for Business Oriented Women",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Association for Greater Gaming Education and Recreation",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Athlete Ally",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke ATLAS: Adolescents Transitioning to Leadership and Success",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Brazilian Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Business Society",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Catholic Center",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Chamber Players",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Chemistry Majors Union",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Chess",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke China Care",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Chinese Dance Troupe",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Chinese Student Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Climate Coalition",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke College Mentors",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke College Republicans",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Consulting Club",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Colloquium Fellows",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Dance Council",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Dance Marathon",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Democrats",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Dhamaka",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Dhoom",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Disability Alliance",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Durham Health Alliance",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke East Asia Nexus",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Electric Vehicles",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Energy Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Engineers for International Development",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Ethiopian/Eritrean Student Transnational Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Fashion Exchange",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Film Club",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Friends of Israel",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke German Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Global Brigades",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Habitat for Humanity",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Health Occupations Students of America",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Independent Film Festival",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Innoworks",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke International Relations Association",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke InterVarsity Christian Fellowship",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Investment Club",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Israel Public Affairs Committee",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Jewish Student Union",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Jewish Student Union",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Lasya",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Latter-day Saint Student Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Libertarians",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Marketing Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Martial Arts Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Mock Trial",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Moot Court",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Motorsports",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Music Tutors",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Net Impact Undergrad",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Orthodox Christian Student Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Orthodox Christian Student Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Orthodox Christian Student Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Partnership for Service",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke PAWS",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Persian Students Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Players",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Political Review",
    "ACADEMIC": "ACADEMIC",
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Political Science Students Association",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Political Union",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Pre-Dental Society",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Pre-Pharmacy Union",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Pre-Vet Society",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Quidditch",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Quiz Bowl",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Raas",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Real Estate Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Red Cross",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Relay For Life",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Robotics",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Sangeet",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Smart Home",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Smash",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke South Asian Students Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Duke Splash",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Student Government",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Students for Humane Borders",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Swim and SPLASH",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Swing Dance Club",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Symphony Orchestra",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Undergraduate Bioethics Society",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Undergraduate Research Society",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Union for Media and the Arts",
    "ACADEMIC": "ACADEMIC",
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke United Students Against Sweatshops",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Arts",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Athletic Bands",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Athletic Bands",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Badminton Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Ballet",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Bumper Pool",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Cricket Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Debating Society",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University EMS",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Club Duke University Equestrian Team",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Improv",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Mathematics Union",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Rugby Football Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Squash Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke University Wind Symphony",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Voices for Interfaith Action",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Wesley Fellowship",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Women's Club Volleyball",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Women's Mentoring Network",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Women's Ultimate Frisbee Team",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke/Durham Saves",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke-Durham Tennis Program",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "DukeMakers",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Eastern European Association at Duke",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Economics Student Union",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Engineering Student Government",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Environmental Alliance",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Episcopal Center at Duke",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Eruditio",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Evolutionary Anthropology Majors Union",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Females Excelling More in Math, Engineering, and Science",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Food for Thought",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Food Recovery Network",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "FORM Magazine",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Future is Now",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "GenFKD",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Genome Research & Education Society",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Gente Aprendiendo para Nuevas Oportunidades",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Girls Engineering Change",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "GlobeMed at Duke",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Haitian Student Alliance",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Harmonies for Health",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Her Campus Duke",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Hindu Students Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Hoof 'n' Horn",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "INJAZ",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Inside Joke",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Institute of Electrical and Electronics Engineers - Duke Student Branch",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "International Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "J Street U",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Japanese Culture Club",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Know Your Status",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Korean Undergraduate Student Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Lady Blue",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Latent Image",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Learning Through Experience, Action, Partnership, and Service (LEAPS)",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Lets Be Well RED",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Marine Science and Conservation Leaders",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "McKids",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Me Too Monologues",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Men's Ultimate",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Mi Gente",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Minority Association of Pre-Medical Students",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Momentum Dance Company",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Muslim Students Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Nakisai African Dance Ensemble",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Nasher MUSE",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "National Alliance on Mental Illness (NAMI) on Campus at Duke University",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "National Association for the Advancement of Colored People",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "National Society of Black Engineers",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Native American Student Alliance",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "NeuroCare",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Neurogenesis: Journal of Undergraduate Neuroscience",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Neuroscience Majors' Union",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Nourish International",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "On Tap",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Out of the Blue",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Pakistani Students Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Partners In Health Engage",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Passport Magazine",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Peer for You",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Presbyterian Campus Ministry",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Project HEAL: Health Education and Awareness in Latin America",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Project Sunshine",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Project Tadpole",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Public Policy Studies Major's Union",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Reformed University Fellowship",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Research Scholars Program",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Resound Magazine",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Rhythm & Blue",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Rince Diabhal: Irish Dance and Culture Club",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "RIVAL Magazine",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Roots & Shoots at Duke and UNC",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Sabrosura",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Scale and Coin",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "ScienceDays",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Singapore Students' Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Society of Hispanic Professional Engineers",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": "EGR/DESIGN",
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Society of Physics Student",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Society of Women Engineers",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": "EGR/DESIGN",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Something Borrowed Something Blue",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Speak of the Devil",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Special Olympics College",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Spoken Verb",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Spoon University",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Stop Motion Crew",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Street Medicine",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": "SPORTS/RECREATION",
    "INTERNATIONAL": 0
  },
  {
    "Name": "Student Advisory Board of the Duke Human Rights Center at Franklin Humanities Institute",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Student Mentoring & Academic Reinforcement Tutoring Progam",
    "ACADEMIC": "ACADEMIC",
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Students of the Caribbean Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Students of the World",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Synapse",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Taiwanese American Students Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Tau Beta Pi",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "TEDxDuke Coordinating Committee",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Thai Student Organization",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "The Alexander Hamilton Society",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "The Archive",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "The Chanticleer",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "The Community Empowerment Fund",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "The Duke Photography Club",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "The Girls Club",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "The Inferno",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "The Navigators",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "The Other",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "The Pitchforks",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "The Standard",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Time Capsule to Mars",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Turkish Students Association",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Undergraduate Publications Board",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "United in Praise",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Universities Allied for Essential Medicines (Undergraduate Chapter)",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Vertices, Duke University Journal of Science and Technology",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Vision for North Korea",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": "INTERNATIONAL"
  },
  {
    "Name": "Wingman Society",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "WISER Duke",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "YOUnite",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": 0,
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": 0,
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": 0,
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "All of the Above",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Chorale",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Innovative Design Agency (DIDA)",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke Jazz Ensemble (DJE)",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Duke's Devilish Keys (Devilish Keys)",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "DUU Freewater Productions (Freewater Productions)",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Deja Blue",
    "ACADEMIC": 0,
    "ARTS": "ARTS",
    "PRE-PROFESSIONAL": 0,
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "DUHatch",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": "PRE-PROFESSIONAL",
    "SERVICE": 0,
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "ASPIRE",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "DukeHAND",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  },
  {
    "Name": "Pancakes for Parkinson's",
    "ACADEMIC": 0,
    "ARTS": 0,
    "PRE-PROFESSIONAL": 0,
    "SERVICE": "SERVICE",
    "SPORTS/RECREATION": 0,
    "INTERNATIONAL": 0
  }
]






var questions = {
        'question': 'do you want to be off-campus?',
        'type': 'multipleChoice',
        'filters': 
}

var questionNumber = {
    
}

for (i = 0; i < groups.length; i++) {
    if ()
}
    