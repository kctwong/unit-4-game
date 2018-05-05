//set upper and lower bound for guessing number and crystal values
var maxguessnum = 120,
    minguessnum = 19;
    maxcrystalnum = 12;
    mincrystalnum = 1;


//Random target number generator
function randomnum (min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
};

//set values for guessing number and crystal
var random = randomnum (minguessnum, maxguessnum);
console.log(random);
$("#target").html("Target Number: " + random);

var img1num = randomnum (mincrystalnum, maxcrystalnum);
console.log(img1num);
$("#img1").attr("value", img1num);


var img2num = randomnum (mincrystalnum, maxcrystalnum);
console.log(img2num);
$("#img2").attr("value", img2num);

var img3num = randomnum (mincrystalnum, maxcrystalnum);
console.log(img3num);
$("#img3").attr("value", img3num);

var img4num = randomnum (mincrystalnum, maxcrystalnum);
console.log(img4num);
$("#img4").attr("value", img4num);

//declare variables for tallies
var wincounter = 0;
$("#wins").html("Wins: " +  wincounter);
var losscounter = 0;
$("#losses").html("Lossess: " + losscounter);
var usertotal = 0;
$("#sumtotal").text(usertotal);


//reset game
function resetgame(){
    img1num = randomnum (mincrystalnum, maxcrystalnum);
    $("#img1").attr("value", img1num);
    img2num = randomnum (mincrystalnum, maxcrystalnum);
    $("#img2").attr("value", img2num);
    img3num = randomnum (mincrystalnum, maxcrystalnum);
    $("#img3").attr("value", img3num);
    img4num = randomnum (mincrystalnum, maxcrystalnum);
    $("#img4").attr("value", img4num);
    random =  randomnum (minguessnum, maxguessnum);
    usertotal = 0;
    $("#target").html("Target Number: " + random);
    $("#sumtotal").text(usertotal);
};



//setup click for crystals 
$("#img1").on("click", function() {
    usertotal+= img1num;
    console.log(usertotal);
    $("#sumtotal").text(usertotal);
    if (usertotal == random){
        wingame();
    } else if (usertotal > random){
        losegame();
    }
});


$("#img2").on("click", function() {
    usertotal+= img2num;
    console.log(usertotal);
    $("#sumtotal").text(usertotal);
    if (usertotal == random){
        wingame();
    } else if (usertotal > random){
        losegame();
    }
});

$("#img3").on("click", function() {
    usertotal+= img3num;
    console.log(usertotal);
    $("#sumtotal").text(usertotal);
    if (usertotal == random){
        wingame();
    } else if (usertotal > random){
        losegame();
    }
});

$("#img4").on("click", function() {
    usertotal+= img4num;
    console.log(usertotal);
    $("#sumtotal").text(usertotal);
    if (usertotal == random){
        wingame();
    } else if (usertotal > random){
        losegame();
        }
});



//count number of wins
function losegame (){
    losscounter ++;
    $("#losses").html("Lossess: " + losscounter);
    resetgame();
};


//count number of losses
function wingame (){
    wincounter ++;
    $("#wins").html("Wins: " +  wincounter);
    resetgame();
};

