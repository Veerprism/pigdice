// function to generate random number
var rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// the function to be biased on certain numbers
var generateList = function(list, weight) {
  var dicenumbers = [];

  for (var i = 0; i < weight.length; i++) {
    var multiples = weight[i] * 5;

    for (var j = 0; j < multiples; j++) {
      dicenumbers.push(list[i]);
    }
  }
  return dicenumbers;
};

var list = [1, 2, 3, 4, 5, 6];
var weight = [0.05, 0.05, 0.3, 0.3, 0.2, 0.1];
var weighedList = generateList(list, weight);
var randomNum = rand(0, weighedList.length - 1);


//variables and arrays for the players and computer
var end;
end = 0;
var ending = true;
var overallPlayerOne = [] //overall points of player one
var overallPlayerTwo = [] //overall points of player two
var overallComputer=[]
var turnsPlayerOne = []  //points accumulating in each turn when the player rolls
var turnsPlayerTwo = []   //points accumulating in each turn when the player rolls
var turnsComputer=[]
var tr = overallPlayerOne.length

var sumTurns;
var sumTurns2;

// player one function
function PlayerOneChance(randomNum) {
  var turnsSum = 0;
  while (end <= 102) {
    if (end <= 102) {
      var sum = 0;
      //overall points are pushed to this array
      overallPlayerOne.push(randomNum)

      var overallLength = overallPlayerOne.length
      var turnLengthPlayerOne = turnsPlayerOne.length
      //create a copy of the turns variables in another array
      //points accumulating are pushed to this array
      turnsPlayerOne.push(overallPlayerOne[overallLength - 1])

      //loop calculating the overall points of the player
      for (var i = 0; i < overallPlayerOne.length; i++) {
        sum = overallPlayerOne[i] + sum;
      }

      //function to return the number of points in each turn
      function turns() {
        for (var j = 0; j < turnsPlayerOne.length; j++) {
          turnsSum = turnsPlayerOne[j] + turnsSum;
        }
        return turnsSum
      }

      sumTurns = turns()
      //checks if condition or number played is one then resets the players points to zero

      if ((randomNum == 1) && (overallLength == turnLengthPlayerOne)) {
        overallPlayerOne.splice(0, overallLength)
        turnsPlayerOne.splice(0, turnLengthPlayerOne)
        sum = 0
        sumTurns = 0
        console.log(overallPlayerOne);
        console.log(turnsPlayerOne);
        console.log(sumTurns)
        return sum
      }
      //if the players continuously plays without giving another one a turn and they get a 1,then the overall and turns points is zero
      else if (randomNum === 1) {
        console.log(turnsPlayerOne.length+1);
        var newsum = 0
        sumTurns = 0
        var j=0;
        while(j<turnLengthPlayerOne+1 ){
        overallPlayerOne.pop()
        j++
        }
        for (var i = 0; i < overallPlayerOne.length; i++) {
          newsum = overallPlayerOne[i] + newsum;
        }
        console.log("this is the sliced " +overallPlayerOne)
        turnsPlayerOne.length = 0
        turnsPlayerOne.splice(0, length)
        console.log(overallPlayerOne)
        console.log(turnsPlayerOne);
        console.log(sumTurns)
        return newsum
        break
      }
      //normal execution continues if the sum is less than 100
        else if (sum <= 100) {
        console.log(overallPlayerOne)
        console.log(turnsPlayerOne);
        console.log(sumTurns);
        end++
        return sum
      }
      //if the sum is more than 100,alert the user
      else if (sum >= 100){

        return sum;
      }
      else if (sum === undefined) {
        console.log('end');
        break
        return false;
      }
      else {
        return console.log("at ten");
      }
    }
    else{
      console.log('the sum is' + sum);
      break

    }

  }
}

function PlayerTwoChance(randomNum) {
  var turnsSum = 0;
  while (end <= 102) {
    if (end <= 102) {
      var sum = 0;
      //overall points are pushed to this array
      overallPlayerTwo.push(randomNum)
      var overallLength = overallPlayerTwo.length
      var turnLengthPlayerTwo = turnsPlayerTwo.length
      //create a copy of the turns variables in another array
      //points accumulating are pushed to this array
      turnsPlayerTwo.push(overallPlayerTwo[overallLength - 1])

      //loop calculating the overall points of the player
      for (var i = 0; i < overallPlayerTwo.length; i++) {
        sum = overallPlayerTwo[i] + sum;
      }
      //function to return the number of points in each turn
      function turns() {
        for (var j = 0; j < turnsPlayerTwo.length; j++) {
          turnsSum = turnsPlayerTwo [j] + turnsSum;
        }
        return turnsSum
      }
      sumTurns2 = turns()
      //checks if condition or number played is one then resets the players points to zero
      if ((randomNum == 1) && (overallLength == turnLengthPlayerTwo)) {
        overallPlayerTwo.splice(0, overallLength)
        turnsPlayerTwo.splice(0, turnLengthPlayerTwo)
        sum = 0
        sumTurns2 = 0
        console.log(overallPlayerTwo);
        console.log(turnsPlayerTwo);
        console.log(sumTurns2)
        return sum
      }
      //if the players continuously plays without giving another one a turn and they get a 1,then the overall and turns points is zero
      else if (randomNum === 1) {
        console.log(turnsPlayerTwo.length+1);
        var newsum = 0
        sumTurns2 = 0
        var j=0;
        while(j<turnLengthPlayerTwo+1){
        overallPlayerTwo.pop()
        j++
        }
        for (var i = 0; i < overallPlayerTwo.length; i++) {
          newsum = overallPlayerTwo[i] + newsum;
        }
        console.log("this is the sliced " +overallPlayerTwo)
        turnsPlayerTwo.length = 0
        turnsPlayerTwo.splice(0, length)
        console.log(overallPlayerTwo)
        console.log(turnsPlayerTwo);
        console.log(sumTurns)
        return newsum
        break
      }
      //normal execution continues if the sum is less than 100
      else if(sum <= 100) {
        console.log(overallPlayerTwo)
        console.log(turnsPlayerTwo);
        console.log(sumTurns2)
        end++
        return sum
      }
      //if the sum is more than 100,alert the user
      else if (sum >= 100) {

        return sum;
      }

      else if (sum === undefined) {
        console.log('end');
        break
        return false;
      }
      else {
        return console.log("at ten");
      }
    }
    else {
      console.log('the sum is' + sum);
      break
    }
  }
}
function Computer(randomNum){
  var turnsSum = 0;
  while (end <= 102) {
    if (end <= 102) {
      var sum = 0;

      overallComputer.push(randomNum)
      var overallLength = overallComputer.length
      //create a copy of the turns variables in another array
      turnsComputer.push(overallComputer[overallLength - 1])

      for (var i = 0; i < overallComputer.length; i++) {
        sum = overallComputer[i] + sum;
      }

      function turns() {

        for (var j = 0; j < turnsComputer.length; j++) {
          turnsSum = turnsComputer[j] + turnsSum;


        }
        return turnsSum
      }
      var arrayCompToDetermineWhentoStop=[]
      var sumTurns = turns()
      //checks if condition or number played is one then resets the players points to zero
      var turnLengthComputer = turnsComputer.length
      if ((randomNum == 1) && (overallComputer == turnLengthComputer)) {
        arrayCompToDetermineWhentoStop=[randomNum,sum]
        overallComputer.splice(0, overallLength)
        turnsComputer.splice(0, turnLengthComputer)
        sum = 0
        sumTurns = 0

        console.log(overallComputer);
        console.log(turnsComputer);
        console.log(sumTurns)
        return   arrayCompToDetermineWhentoStop
      } else if (randomNum === 1) {

        console.log(turnsComputer.length+1);
        var newsum = 0
        sumTurns = 0
        var j=0;
        while(j<turnLengthComputer+1){
        overallComputer.pop()
        j++
        }
        for (var i = 0; i < overallComputer.length; i++) {
          newsum = overallComputer[i] + newsum;
        }
        console.log("this is the sliced " +overallComputer)
        turnsComputer.length = 0
        turnsComputer.splice(0, length)
        console.log(overallComputer)
        console.log(turnsComputer);
        console.log(sumTurns)
        arrayCompToDetermineWhentoStop=[randomNum,sum]
        return arrayCompToDetermineWhentoStop
        break
      } else if (sum <= 100) {
        console.log(overallComputer)
        console.log(turnsComputer);
        console.log(sumTurns);
        end++
        return sum
      } else if (sum >= 100) {
        console.log('The sum is' + sum);
        ending = false;
        break
        return false;
      } else if (sum === undefined) {
        console.log('end');
        break
        return false;
      } else {
        return console.log("at ten");
      }
    } else {
      console.log('the sum is' + sum);
      break

    }

  }

}
var playOn=true;
var overallPlayOne;
var overallPlayTwo;
//the jquery to show results on the page
$(document).ready(function() {
  //user clicks add button for playerone
  $("#add").click(function() {
    var dicenumbers = generateList(list, weight);
    var randomNum = rand(0, dicenumbers.length - 1);
    var ty = dicenumbers[randomNum];
    overallPlayOne = PlayerOneChance(ty)
    console.log(overallPlayOne);
    $('#addOverallScore').html(overallPlayOne);
    $('#addCurrentScore').html(sumTurns);
    var zero=0
    $('#diceroll').html(ty);
    if((overallPlayOne>=100) || (overallPlayTwo>=100)){
      $('#win').show();
      overallPlayOne=0
      overallPlayTwo=0
      overallPlayerOne.length = 0;
      overallPlayerTwo.length = 0;
      turnsPlayerOne.length = 0;
      turnsPlayerTwo.length=0;
      $('#addOverallScore').html(zero);
      $('#addCurrentScore').html(zero);
      $('#addOverallScore2').html(zero);
      $('#addCurrentScore2').html(zero);
    }else{
        $('#win').hide();
    }
    if (ty==1 ) {
      $( "#alert" ).fadeIn();
       $('#add').attr("disabled", true);
        $('#add2').attr("disabled", false);
          $('#diceroll').html("");
    } else if (ty!=1) {
      $( "#alert" ).fadeOut();
    }

  });
  $("#add").mousedown(function() {
    $("#win").hide();
  });
  $("#add2").mousedown(function() {
    $("#win").hide();
  });



  //computer part does not work for now
  $("#computer").click(function() {
    var dicenumbers = generateList(list, weight);
    var randomNum = rand(0, dicenumbers.length - 1);
    var ty = dicenumbers[randomNum];
    var over = Computer(ty)

    //!!!!!!!!!!?????????
    while(over[0]!=1){
        console.log(over[2]);
        console.log(over[0]);
      }
    });

    //when user clicks add button for player two
  $("#add2").click(function() {
    var dicenumbers = generateList(list, weight);
    var randomNum = rand(0, dicenumbers.length - 1);
    var ty = dicenumbers[randomNum];
    var overallPlayTwo = PlayerTwoChance(ty)
    $('#addOverallScore2').html(overallPlayTwo);
    $('#addCurrentScore2').html(sumTurns2);
    $('#diceroll2').html(ty);
    if((overallPlayOne>=100) || (overallPlayTwo>=100)){
      $('#win').show();
      overallPlayOne=0
      overallPlayTwo=0
      overallPlayerOne.length = 0;
      overallPlayerTwo.length = 0;
      turnsPlayerOne.length = 0;
      turnsPlayerTwo.length=0;
      $('#addOverallScore').html(zero);
      $('#addCurrentScore').html(zero);
      $('#addOverallScore2').html(zero);
      $('#addCurrentScore2').html(zero);
    }else{

    }
    if (ty==1 ) {
      $( "#alert" ).fadeIn();
      $('#add').attr("disabled", false);
       $('#add2').attr("disabled", true);
         $('#diceroll2').html("");
    } else if (ty!=1) {
      $( "#alert" ).fadeOut();
    }
    var zero=0

  });


  //actions when pass to other player for player one is clicked
  $("#remove").click(function() {
    turnsPlayerOne.length = 0;
      $('#addCurrentScore').html("")
    $('#diceroll').html("");
     $('#add').attr("disabled", true);
      $('#add2').attr("disabled", false);
    });

    //actions when pass to other player for player two is clicked
  $("#remove2").click(function() {
    turnsPlayerTwo.length = 0;
    $('#addCurrentScore2').html("");
    $('#diceroll2').html("");
     $('#add2').attr("disabled", true);
      $('#add').attr("disabled", false);
    console.log(turnsPlayerTwo);
  });
  $("#newgame").click(function() {
    overallPlayerOne.length = 0;
    overallPlayerTwo.length = 0;
    turnsPlayerOne.length = 0;
    turnsPlayerTwo.length=0;
    $('#diceroll').html("");
    $('#diceroll2').html("");
    $('#win').hide();
    var zero=0;
    $('#addOverallScore').html(zero);
    $('#addCurrentScore').html(zero);
    $('#addOverallScore2').html(zero);
    $('#addCurrentScore2').html(zero);
  });
  $("#rule").click(function() {
    $( ".rules").toggle(250);

  });
  $("#win").click(function() {
    $( "#win" ).fadeOut();
    overallPlayerOne.length = 0;
    overallPlayerTwo.length = 0;
    turnsPlayerOne.length = 0;
    turnsPlayerTwo.length=0;
    overallPlayOne=0;
    overallPlayTwo=0
    var zero=0;
    $('#addOverallScore').html(zero);
    $('#addCurrentScore').html(zero);
    $('#addOverallScore2').html(zero);
    $('#addCurrentScore2').html(zero);

  });

});
