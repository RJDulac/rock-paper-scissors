var player = prompt("do you choose Rock, Paper, or Scissors?");
var win = false;
var npc = Math.random();
var playerSelection = player.charAt(0).toLowerCase();

var output = document.getElementById("output");
if (npc < 0.34) {
    npc = 'rock';
} else if (npc < 0.67) {
    npc = "paper";
} else {
    npc = "scissors";
}
var npcSelection = npc.charAt(0).toLowerCase();

// if(playerSelection === npcSelection) {
//     output.innerHTML = "You both chose: " + npc + "<br/>" + "it's a tie";
// } else {
//     if(playerSelection === "s" && npcSelection === "p") {
//         win = true;
//     } else if(playerSelection === "s" && npcSelection === "r") {
//         win = false;
//     } else if(playerSelection === "r" && npcSelection === "p") {
//         win = false;
//     } else if(playerSelection === "r" && npcSelection === "s") {
//         win = true;
//     } else if(playerSelection === "p" && npcSelection === "r") {
//         win = true;
//     } else if(playerSelection === "p" && npcSelection === "s") {
//         win = false;
//     }
// }
var displayHtml = "";
if (npcSelection === playerSelection) {
    if(playerSelection === "s") {
        player = "Scissors";
    } else if(playerSelection === "r") {
        player = "Rock";
    } else if(playerSelection === "p") {
        player = "Paper";
    }
    displayHtml += "Its a Tie";
} else {
    if (playerSelection === "r") {
        player = "Rock";
        if (npcSelection === "s") {
            win = true;
        }
    }
    else if (playerSelection === "p") {
        player = "Paper";
        if (npcSelection === "r") {
            win = true;
        }
    }
    else {
        player = "Scissors";
        if (npcSelection === "p") {
            win = true;
        }
    }
}

if (win) {
    displayHtml += "You win!"
} else {
    if(npcSelection !== playerSelection) {
        displayHtml += "You lose!"
    }
    
}
output.innerHTML = "You chose: " + player + " and the computer chose: " + npc + "<br/> " + displayHtml;
console.log(npc);
console.log(win);