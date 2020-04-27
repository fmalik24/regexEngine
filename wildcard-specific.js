let input = `allla alaccc alllaccc allllllllllllaccc aaccc c a ca ac aa alc
alllaccc
alllacccalllacccalllaccc
alllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllacccalllaccc
alllacccalllacccalllacccalllacccalllacccalllacccalllaccc asdasda asfasaa alllacccalllacccalllacccalllacccalllacccalllaccc alaccc alaccc`
let regex = "al*a"

// allllla, aa, a;a 

if(regex.split("*").length===2){
    [start, end] = regex.split("*")
    wildCard(start, end, "*")
}


function wildCard(start, end, type) {
  
    let mainStart = start.substr(0, start.length - 1)
    let matches = [];
    let startChar = start[start.length - 1];
  
    let patterLen = start.length + end.length
    let mainPatternLen = mainStart.length + end.length
    let thirdCase = ""
    let counter = 0;

    for (let i = 0; i < input.length ; i++) {
        // lc
        if(input.substr(i, patterLen)===(start+end)) {
            matches.push(input.substr(i, patterLen))
            i = i + patterLen - 1
        }
        else if(input.substr(i,mainPatternLen)===(mainStart+end)) {
            matches.push(input.substr(i, mainPatternLen))
            i = i + mainPatternLen - 1
        }



        


        else if(input.substr(i, start.length) === start && type === "*") {
            for(let j = i + start.length-1; j < input.length; j++) {
                if(input.substr(j,startChar.length) === startChar){
                    thirdCase =  input.substr(i, start.length + counter)
                    counter++;
                } else if(input.substr(j,end.length) === end) {
                    matches.push(thirdCase + input.substr(j, end.length))
                    thirdCase = ""
                    i = j
                    counter = 0;
                    break
                } else {
                    counter = 0;
                    thirdCase = ""
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

}