let input = `bbbb hhhbb hhhh`
let regex = "h*b"
// b, hb, hhb

;[start, end] = regex.split('*')
let counter = 0
matches = [];
for(let i = 0; i < input.length; i++) {
    if(input.substr(i, start.length) === start) {
        for(let j = i + start.length; j < input.length; j++) {
            if(input.substr(j,start.length) === start) {
                counter++
                if( j === input.length - 1)  {
                   matches.push(input.substr(i, counter + 1)) 
                    i = j
                    break;
                }
            } else if (input.substr(j,end.length) === end) {
                matches.push(input.substr(i, counter + 2))
                counter = 0;
                i = j 
                break;
            } else {
                break;
            }
        }

    }
    else if(input.substr(i, end.length) === end) {
        matches.push(input.substr(i,end.length))
    }
    else {
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
