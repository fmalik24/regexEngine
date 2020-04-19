input = `hashahahsdhasdhahd ahsdadh haaaaaaaaa 123123 a;ldsfkasdmc.,v  hahahah a sdfasd f asdf ljkhsadfjhjhskadfhjaksdfa skdfhahsah ahha has fhaha ha hhah ahha ha ha ha h ahahsadsshah hah a`
regex = ".ha";

// haaaaa ha h 
[start, end] = regex.split(".")
let matches = []

if (start.length === 0) {
    for (let i = 0; i < input.length; i++) {
        if (input.substr(i + 1, end.length) === end && i + end.length < input.length ) {
            matches.push(input.substr(i, end.length + 1))
            i = i + end.length;
        }
    }
}

for (let i = 0; i < matches.length; i++) {
    console.log("Match #", i + 1)
    console.log(matches[i])
}