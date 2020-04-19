let input = `abab bababab babab babbba b123[poarsgsf asf ] A aa S  a cvbbvszbvcsvbcas bsbadfasd bbvvbvb vbv`
// abbbaa abbb ab a
let regex = 'ab*'
;[before, ] = regex.split("*")
let repeatCharacter = before[before.length - 1]
let startPattern = before.substr(0, before.length - 1)
let counter = 0;
let matches = [];

for (let i = 0; i < input.length; i++) {
    if(input.substr(i, before.length) === before) {
        for(let j = i + before.length; j < input.length; j++){
            if(input.substr(j,repeatCharacter.length) === repeatCharacter) {
                counter++; 
                if(j === input.length - 1) {
                    input.substr(i, before.length + counter)
                    i = j;
                    break
                }
            } else if(counter > 0) {
                matches.push(input.substr(i, before.length + counter))
                i = j - 1;
                counter = 0;
                break;
            } else {
                matches.push(input.substr(i, before.length))
                break;
            }
        }
        
    }
    else if(input.substr(i, startPattern.length) === startPattern) {
        matches.push(input.substr(i,startPattern.length)) 
    }
}

for(let i = 0; i < matches.length; i++) {
    console.log("Match #", i +1)
    console.log(matches[i])
}