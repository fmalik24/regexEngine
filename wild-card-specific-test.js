    let input = `allla alaccc alllaccc allllllllllllaccc aaccc c a ca ac aa alc
    alllaccc
    alllacccalllacccalllaccc
    alllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllaccc
    alllacccalllacccalllacccalllacccalllacccalllacccalllaccc asdasda asfasaa alllacccalllacccalllacccalllacccalllacccalllaccc alaccc alaccc`
let regex = "al*a"
;[start, end] = regex.split("*")
let repeatChar = start[start.length - 1]
let startPattern = start.substring(0, start.length -1)
let counter = 0
let matches = []
// aa, ala, allllla

for(let i = 0; i < input.length; i++) {
    if(input.substr(i, (start + end).length) === start + end ) {
        matches.push(input.substr(i, (start+end).length))
        i = i - 1 + (start+end).length
    }
    else if(input.substr(i, (startPattern + end).length ) === startPattern + end) {
        matches.push(input.substr(i, (startPattern+end).length))
        i = i -1 + (startPattern+end).length
    }
    else if(input.substr(i,start.length) === start) {
        for(let j = i + start.length; j < input.length; j++) {
            if(input.substr(j, repeatChar.length) === repeatChar) {
                counter++
            } else if(input.substr(j, end.length) === end) {
                matches.push(input.substr(i, (start + end).length + counter))
                counter = 0
                i = j
                break
            } else {
                counter = 0
                break;
            }
        }
    }
}

for(let i = 0; i < matches.length; i++) {
    console.log("Match #", i +1)
    console.log(matches[i])
}

//console.log(matches);
console.log(matches.length);
