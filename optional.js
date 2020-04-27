let input = `At no stage has the White House ordered Americans to "lock down". Instead, it has chosen to issue advice and leave it to the governors of each state to decide.

Minnesota is another of around 20 states hat has already seen a protest, with threats of more if the stay-at-home order is not lifted.

"I'll tell you that demonstration was like a real kick in the teeth to us frontline health care workers," says Mary Turner, a nurse leader in an intensive care unit in Minnesota.

She gets emotional as she talks of the risks she and her colleagues are taking every day treating coronavirus patients in her state.

"These protests here are so discouraging. With no one doing social distancing or wearing masks, and they all say they are outraged. I don't know if this is a problem anywhere else in the world," says Mary.`
let regex = " asy? sh?e? t?tal?k?s"


let match = (regex, input) => {
     if(regex.length === 0) {
        return true;
    } 
    if(regex[1] === "?") {
        return match(regex.substr(2), input) || match(regex.substr(2), input.substr(1))
    } else if(regex[0] === input[0]) {
        return match(regex.substr(1), input.substr(1))
    }
    return false;

}
let output = false;

for(let i = 0; i < input.length; i++) {
    output = match(regex, input.substr(i))
    if(output === true) {
        break;
    }
}

console.log(output)
console.log(count)

