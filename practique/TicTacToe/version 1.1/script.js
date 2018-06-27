var winner = false;
var activePlayer = 0;
var players = ['X', '0']
var globalStack = [];
window.onload = function() {
    for(var i = 0; i < 9; i++) {
        globalStack.push(0)
        document.querySelector('.main_container').innerHTML += "<div class='block'></div>"
    }
    
    //Blocks

    var blocks = document.querySelectorAll('.block');
    var move = 0;
    document.querySelector('.main_container').onclick = function(event) {
            

        var blocks = document.querySelectorAll('.block');
        var move = 0;
        document.querySelector('.main_container').onclick = function(event) {
            
    
                if(event.target.className === 'block') {
                    if(move % 2 == 0 && event.target.innerHTML == '' || event.target.innerHTML == ' ') {
                        move++;
                        event.target.innerHTML = 'X'  
                    } else if(move % 2 == 1 && event.target.innerHTML == '' || event.target.innerHTML == ' ') {
                        move++;
                        event.target.innerHTML = '0'
                    }
                }
            
                calculateWinner();
            }


            // if(event.target.className === 'block') {
            //     if(move % 2 == 0 && event.target.innerHTML == '' || event.target.innerHTML == ' ') {
            //         move++;
            //         event.target.innerHTML = 'X';
            //         nextPlayer();
            //     } else if(move % 2 == 1 && event.target.innerHTML == '' || event.target.innerHTML == ' ') {
            //         move++;
            //         event.target.innerHTML = '0'
            //     }
            // }
        
            calculateWinner();

    }


function calculateWinner() {
	var array = document.querySelectorAll(".block");
	var lines = [
	    [0, 1, 2],
	    [3, 4, 5],
	    [6, 7, 8],
	    [0, 3, 6],
	    [1, 4, 7],
	    [2, 5, 8],
	    [0, 4, 8],
	    [2, 4, 6],
	  ];
	  for (var i = 0; i < lines.length; i++) {
	    var a = lines[i][0];
		var b = lines[i][1];
  		var c = lines[i][2];
	    if(array[a].innerHTML == 'X' && array[b].innerHTML == 'X' && array[c].innerHTML == 'X'){
            document.querySelector('.scores').innerHTML += '<br/>The winner is X';
            winner = true;
        }
	    else if(array[a].innerHTML == '0' && array[b].innerHTML == '0' && array[c].innerHTML == '0') {
            document.querySelector('.scores').innerHTML += '<br/>The winner is 0';
            winner = true;
        } 
	  }
     
      if(winner == true) {
        var array = document.querySelectorAll(".block");
        for(var i = 0; i < 9; i++) {
            array[i].innerHTML = '';
            winner = false
        }

    }

    }
    
    

}



// function nextPlayer() {

//     var randomNumber = Math.floor(Math.random() * 8 + 1) ;

//     activePlayer = 0;

//     var array = document.querySelectorAll(".block");

//     for(var i = 0; i < array.legnth; i++) {

//         if(array[i].innerHTML == "" || array[i].innerHTML == " ") {

//             array[randomNumber].innerHTML = players[activePlayer]

//         }

//     }

// }

