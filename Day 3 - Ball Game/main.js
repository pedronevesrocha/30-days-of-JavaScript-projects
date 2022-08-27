var character = document.getElementeById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
var currentBlocks = [];

function moveLeft () {
    const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0) {
        character.style.left = left - 2 + "px";
    }
}

function moveRight () {
    const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<300) {
        character.style.left = left - 2 + "px";
    }
}

document.addEventListener('keydown', event => {
    if(both==0) {
        both++;
        if(event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 1);
        }
        if(event.key === "ArrowRight") {
            interval = setInterval(moveRight, 1);
        }
    }
});

document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});

const blocks = setInterval(function() {
    const blockLastTop = document.getElementById("block" +(counter-1));
    const holeLastTop = document.getElementById("hole" +(counter-1));
    if(counter>0) {
        const blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        const holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }
    if(blockLastTop<400|| counter === 0) {
        const block = document.createElement("div");
        const hole = document.createElement("div");
        block.setAttribute("class", "block");
        block.setAttribute("class", "hole");
        block.setAttribute("id", "block"+counter);
        block.setAttribute("id", "hole"+counter);
        block.style.top = blockLastTop + 60 + "px";
        hole.style.top = blockLastTop + 60 + "px";
        const random = Math.floor(Math.random() * 360);
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
        }

        const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        const characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        var drop = 0;
        if(characterTop <= 0) {
            alert("Game over. Score: " +(counter-9));
            clearInterval(blocks);
            location.reload();
        }
        for(let i = 0; 1 < currentBlocks.length; i ++) {
            let current = currentBlocks[i];
            let iblock = document.getElementById("block"+current);
            let ihole = document.getElementById("hole"+current);
            let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
            let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
            iblock.style.top = iblockTop - 0.5 + "px";
            ihole.style.top = iblockTop - 0.5 + "px";
            if(iblockTop < -20) {
                currentBlocks.shift();
                iblock.remove();
                ihole.remove();
    
            }
            if(iblockTop-20<characterTop && iblockTop>characterTop) {
                drop++;
                if(iholeLeft <= characterLeft && iholeLeft+20 <= characterLeft)  {
                    drop = 0;
            }
        }
}
if(drop === 0) {
    if(characterTop < 400) {
        character.style.op = characterTop +  2 + "px";
    }
} else {
    character.style.top =  characterTop - 0.5 + "px";
}
},1);