let input = `bas
bas
bs
bss
bssssss
bssss
bssssssssss
basasasasasasasasasasas
basasas

basasasasasasasasasasasasasssssssaaaassssaaa
`

let regex = "ba?s";
let matches = []

;[before, after] = regex.split('?');
let optionaChar = before[before.length - 1]
let beforeWithoutOptional = before.substr(0, before.length - 1)

for (let i = 0; i < input.length; i++) {
    if(input.substr(i, before.length + after.length) === (before + after)) {
        matches.push(input.substr(i, before.length + after.length))
        i = i + before.length + after.length - 1
    } else if (input.substr(i, after.length + beforeWithoutOptional.length) === (beforeWithoutOptional +after)) {
        matches.push(input.substr(i, after.length + beforeWithoutOptional.length))
        i = i + after.length + beforeWithoutOptional.length - 1
    }
}

for(let i = 0; i < matches.length; i++) {
    console.log("Match #", i +1)
    console.log(matches[i])
}


//console.log(matches)