var usernumber = document.getElementById("getNumber") 
usernumber.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run(e);
    };
});

var counter = 0
var wins = 0

usernumber.focus();

function run() {
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "red";
    document.getElementById("paragraph").style.color = "blue";
    // rn()
    // userNum()
    compare()
}


function rn() {
    var ran = Math.floor(Math.random() * 10 + 1)
    var x = document.getElementById("random")

    x.style.color="white"
    x.style.backgroundColor="blue"
    x.style.padding="20px"
    x.style.textAlign="center"

    document.getElementById("random").innerHTML = ran;
    document.getElementById("random").style.backgroundColor = "red";
    document.getElementById("random").style.color = "white";
    return ran
}

function userNum() {
    var user = document.getElementById("getNumber").value;
    // alert(user)
    var y = document.getElementById("userNumber")

    y.style.color="white"
    y.style.backgroundColor="green"
    y.style.padding="20px"
    y.style.textAlign="center"

    document.getElementById("userNumber").innerHTML = user
    return user
}

function compare() {
    var a = userNum();
    var b = rn();
    var z = document.getElementById("compare")
    var c = document.getElementById("counter")
    var w = document.getElementById("wincounter")

    z.style.color="white"
    z.style.backgroundColor="purple"
    z.style.padding="20px"
    z.style.textAlign="center"

    c.style.color="white"
    c.style.backgroundColor="orange"
    c.style.padding="20px"
    c.style.textAlign="center"


    w.style.color="white"
    w.style.backgroundColor="black"
    w.style.padding="20px"
    w.style.textAlign="center"


    if (a != b) {
        z.innerHTML = `Your number is not the same! The computer said ${b} and you said ${a}.`
        counter++
        c.innerHTML = `You have tried ${counter} times.`
    } else if (a==b){
        z.innerHTML = `Your number was the same!`
        wins++
        w.innerHTML = `You have won ${wins} times.`
    }
    reset()
}

function reset() {
    document.getElementById("getNumber").value = "";
}
