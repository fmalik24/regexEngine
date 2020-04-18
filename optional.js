input = "hhhhhhhhh"
regex = "h.";

[start,] = regex.split(".");
let matches = []


for(let i = 0; i < input.length; i++) {
    if(input.substr(i, start.length) === start &&  i < input.length - 1) {
        matches.push(input.substr(i,2))
        i = i + 1
    }
}

for (let i = 0; i < matches.length; i++) {
    console.log("Match #", i + 1)
 
    console.log(matches[i])
}
