// anagrama
let word1 = "ramo"
let word2 = "amro"
let anagr = true;

function anagram( word1, word2 ) {
    let lower1 = word1.toLowerCase().split('')
    let lower2 = word2.toLowerCase().split('')

    if (lower1.length === lower2.length) {

        lower1.forEach(element1 => {
            if (lower2.includes(element1)) {
                anagr = true
            } else {
                anagr = false
            }
        });
        
    } else {
        anagr = false;
    }

    console.log(anagr)
}

anagram(word1, word2)