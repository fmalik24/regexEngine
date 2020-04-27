let input = `my name is farhan!`
let regex = `n.me is far.an`

let match = (regex, input) => {
    if (regex.length === 0) {
        return true;
    }

    if(regex[0] === "." || regex[0] === input[0]) {
        return match(regex.substr(1), input.substr(1))
    } 

    return false;
}

for(let i = 0; i < input.length; i++) {
    if(match(regex, input.substr(i))){
        console.log('Found it')
    }
}