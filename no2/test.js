// console.log('hello');




// const string = "xxxxxxxxxxxxxxxxxxaxbcdefgzzzzzzzzzzzzzzzzzzzzzz" 7

function getCounts(string) {

    const charCount = {}
    for (let i in string) {
        const char = string[i]
        if(!charCount[char] ){
            charCount[char] = 0
        }
        charCount[char]++
        // if(charCount[char] >= 1){
        //     delete charCount[char]
        // }
    }

    return charCount
}

// console.log(getCounts("xxxxxxxxxxxxxxxxxxaxbcdefgzzzzzzzzzzzzzzzzzzzzzz"));
// console.log(getCounts("abc"));


function getSliceCount (string){
    const arr = []
    const alphabeth = "abcdefghijklmnopgrstuvwxyz"

    // for(let j in alphabeth){
        
    // }

    




    for(const key of Object.values(getCounts(string))) {
        // console.log(`${key}`);
        if(key <= 1){
            // console.log(`${key}`);
            arr.push(key)
        }
    }
    return arr.length
}


    // console.log(arr.length);

    console.log(getSliceCount("xxxxxxxxxxxxxxxxxxaxbcdefgzzzzzzzzzzzzzzzzzzzzzz"));















