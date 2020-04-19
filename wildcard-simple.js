input = `aaaabbasdasdasdmbbnbnasdbbnasdbnbnbnasdbnadbansdbnasdbjnabsd 
sdasdasdmbbnbnasdbbnasdbnbnbnasdbnadbansdbnasdbjnabsd 
sdasdasdmbbnbnasdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbnasdbnbnbnasdbnadbansdbnasdbjnabsd  
basdbbnasdbnbnbnasbbbbbbbbbbbbbbbbbbbbbbbbbbdbnadbansdbnasdbjnabsd 
sdasdasdmbbnbnasdbbn
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb`
regex = "b*"

// "", b, bb 
;[start, ] = regex.split("*")
let counter = 0;
let matches = [];

for (let i = 0; i < input.length; i++) {
    if(input.substr(i, start.length) === start) {
        for(let j = i + start.length; j < input.length; j++) {
            if (input.substr(j, start.length) === start) {
                counter++
                if(j === input.length - 1){
                    matches.push(input.substr(i, counter + 1))
                    i = j;
                    break;
                }
            } else if (counter > 0) {
                matches.push(input.substr(i, counter + 1))
                counter = 0;
                i = j - 1;
                break;
            } else {
                matches.push(input.substr(i, start.length))
                break;
            }
        }
    } else {
        matches.push("")
    }
}

matches.push("")
for(let i = 0; i < matches.length; i++) {
    console.log("Match #", i +1)
    console.log(matches[i])
}

//console.log(matches);
console.log(matches.length);


