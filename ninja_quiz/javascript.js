const url = 'http://spbooks.github.io/questions.json';
fetch(url)
.then(res => res.json())
.then(quiz => {
    view.start.addEventListener('click', () => game.start(quiz.questions), false);
    view.response.addEventListener('click', (event) => game.check(event), false);
});

(function() {
"use strict";

    // gets JSON file with Ajax
    function getQuiz() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status == 200) {
                var quiz = JSON.parse(xhr.responseText);
                new Game(quiz);
            }
        };
        xhr.open("GET", "https://s3.amazonaws.com/sitepoint-book-content/jsninja/quiz.json", true);
        xhr.overrideMimeType("application/json");
        xhr.send();
        update($question, "Waiting for questions...");
    }

    // VIEWS
    var $question = document.getElementById("question");
    var $score = document.getElementById("score");
    var $feedback = document.getElementById("feedback");
    var $start = document.getElementById("start");
    var $form = document.getElementById("answer");
    var $timer = document.getElementById("timer");

    // VIEW FUNCTIONS
    function update(element, content, k) {
        var p = element.firstChild || document.createElement("p");
        p.textContent = content;
        element.appendChild(p);
        
        if(k) {
            p.className = k;
        }
    }

    function hide(element) {
        element.style.display = "none";
    }

    function show(element) {
        element.style.display = "block";
    }

    // event listeners
    $start.addEventListener('click', getQuiz , false);

    // form hidden at beginning
    hide($form);
    
  // FUNCTION DEFINITIONS
    function random(a,b,callback) {
        if(b===undefined) {
            // if only one argument is supplied, assume the lower limit is 1
            b = a, a = 1;
        } 
        
        var result = Math.floor((b-a+1) * Math.random()) + a;
        if(typeof callback === "function") {
            result = callback(result);
        }
        return result;
    }

    function Game(quiz) {
        this.questions = quiz.questions;
        this.phrase = quiz.question;
        this.score = 0; // initialize score
        
        update($score,this.score);
        
        // initialize time, set up interval that counts down every second
        this.time = 20;
        update($timer,this.time);
        this.interval = window.setInterval( this.countDown.bind(this) , 1000 );
        
        // hide button/show form
        hide($start);
        show($form);
        
        // add event listener to form for it's submission 
        $form.addEventListener('click', function(event) { 
            event.preventDefault();
            this.check(event.target.value);
        }.bind(this), false);
        this.chooseQuestion();
    }
  
    // Method definitions
    Game.prototype.chooseQuestion = function() {
        console.log("chooseQuestion() called");
        var questions = this.questions.filter(function(question) {
            return question.asked === false;
        });
        
        // set current question
        this.question = questions[random(questions.length) - 1];
        this.ask(this.question);
    }
    
    Game.prototype.ask = function(question) {
        console.log("ask() called");
        var quiz = this;
        
        // set the question.asked to true so it's not asked again
        question.asked = true;
        update($question,this.phrase + question.question + "?");
        
        // clear previous options
        $form.innerHTML = "";
        
        // create array to put different options in and button variable
        var options = [], button;
        var option1 = chooseOption();
        options.push(option1.answer);
        var option2 = chooseOption();
        options.push(option2.answer);
        
        // add actual answer at a random place in the options array
        options.splice(random(0,2),0,this.question.answer);
        
        // loop through each option and display it as button
        options.forEach(function(name) {
            button = document.createElement("button");
            button.value = name;
            button.textContent = name;
            $form.appendChild(button);
        });

        // choose option from all possible answers without choosing the answer or the same option twice
        function chooseOption() {
            var option = quiz.questions[random(quiz.questions.length) - 1];
            
            // check if option chosen is the current question or already one of the options, if so recursively call this function until it isn't
            if(option === question || options.indexOf(option.answer) !== -1) {
                return chooseOption();
            }
            return option;
        }

    }
  
    Game.prototype.check = function(answer) {
        console.log("check() called");
        
        if(answer === this.question.answer) {
            update($feedback,"Correct!","correct");
            
            // increase score by 1
            this.score++;
            update($score,this.score)
        } else {
            update($feedback,"Wrong!","wrong");
        }
        this.chooseQuestion();
    }
  
    Game.prototype.countDown = function() {
        // called every second, decreases the time by 1
        this.time--;
        
        // update time
        update($timer,this.time);
        
        // game over if timer reaches 0
        if(this.time <= 0) {
            this.gameOver();
        }
    }

    Game.prototype.gameOver = function() {
        console.log("gameOver() invoked");
        
        // game is finished, display points scored
        update($question,"Game Over, you scored " + this.score + " points");
        
        // stop countdown interval
        window.clearInterval(this.interval);
        hide($form);
        show($start);
    }
}())