input = `The general form of these algorithms are the same. On recursion the algorithm slices the input into substrings, and considers a match to have happened when ONE of the substrings return a positive match. For dowild("*X", "abcX"), it would greedily call dowild("X", "abcX"), dowild("X", "bcX"), dowild("X", "cX") and dowild("X", "X"). They usually differ by less-important things like support for features and by more important factors such as minor but highly effective optimizations. Some of them include:

The ABORT signal against over-recursion (Lars Mathiesen 1991). While it is correct to naively recurse by the entire rest of the strings (pattern and text) on * and making sure that ONE of the substrings return a positive match, the running time becomes exponential for rejecting a match with many * in the text. Lars Mathiesen changes the return to three classes, match, no-match, and ABORT (no match possible at all for asterisk recursion.) The ABORT value is returned when the text is consumed too early or when another asterisk match has failed, guaranteeing a linear performance with respect to the number of asterisks. (The overall complexity is additionally quadratic to the number of characters left to match.)[14] Git/Rsync's wildmatch ABORT also covers invalid inputs.[21] The new INN uwildmat does the same.[22]
Asterisk advancement in recursion. This wildmatch tweak is relatively more minor. It applies to when the recursion wants to match "*X" on "abcX": when an asterisk is followed by a literal like "X", it is obvious that only the last comparison with equal lengths would have a chance of producing a match.[21] This is seen earlier in uwildmat in 2000[22] and more implicitly in van Rossum's fnmatch for FNM_PATHNAME.
Martin Richter's algorithm is an exception to this pattern, although the overall operation is equivalent. On * it recurses into increasing either of the indexes, following the dynamic programming formulation of the problem. The "ABORT" technique is applicable to it as well.[9] On typical patterns (as tested by Cantatore) it is slower than the greedy-call implementations.[10]

The recursive algorithms are in general easier to reason about, and with the ABORT modification they perform acceptably in terms of worst-case complexity. On strings without * they take linear-to-string-size time to match since there is a fixed one-to-one relation.`
regex = "f*i"
let matches = []
let startIndex = -1;
let counter = 0;

;[start, end] = regex.split("*")

for (let i = 0; i < input.length; i++) {
    if (start.length === 1) {
        if (input.substr(i, start.length) === start) {
            for (let j = i + start.length; j < input.length; j++) {
                if (input.substr(j, start.length) === start) {
                    counter++;
                    if (j === input.length - 1) {
                        matches.push(input.substr(i, counter + start.length))
                        i = j;
                    }
                } else if (input.substr(j, end.length) === end) {
                    matches.push(input.substr(i, counter + start.length + end.length))
                    counter = 0;
                    i = j - 1 + end.length;
                    break;
                } else {
                    break;
                }

            }
        } else if (input.substr(i, end.length) === end) {
            matches.push(input.substr(i, end.length))
            i = i + end.length - 1
        }
    }
}

//matches.push("")

for (let i = 0; i < matches.length; i++) {
    console.log("Match #", i + 1)
    console.log(matches[i])
}





