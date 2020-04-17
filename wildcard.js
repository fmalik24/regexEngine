let input = `123 as 1!@#! $@#$   Be the you want change  you wish to see  in the world. Mahatma Gandhi Mahatma Mahatma change to 1Mahatma 1 1`;
let regex = "change.*Mahatma.*1";
let patterns = regex.split(".*")

let isGreedy = true;
let firstMatch = -1;
let output = true;


for (let i = 1; i < patterns.length; i++) {
    if (output) {
        if (patterns[i].startsWith('?')) {
            patterns[i] = patterns[i].substr(1);
            isGreedy = false;
        }
        let out = wildCard(patterns[i-1], patterns[i], i  === patterns.length - 1, isGreedy)
        output = out;
        isGreedy = true;
    }
}

function wildCard(behind, ahead, isLast, isGreedy) {
    let outputstring = "";
    let  display = false;
    let previousMatched = false;
    for (let i = 0; i < input.length; i++) {
        if (input.substr(i, behind.length).includes(behind)) {
            if (firstMatch === -1) {
                firstMatch = i;
            }
            previousMatched = true;
        }
        if (input.substr(i, ahead.length).includes(ahead)) {
            if (previousMatched && isLast && firstMatch >= 0) {
                outputstring = input.substr(firstMatch, i + ahead.length - firstMatch)
                display = true;
                if (!isGreedy) {
                    break;
                }
            }
        }
    }
 if(display) {
        console.log("The output is:\n", outputstring)
    }
    
    return firstMatch >= 0;
}
