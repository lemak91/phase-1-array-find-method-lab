// code your solution here

// write function called suberbowlWin()
function suberbowlWin(record) {
    
}


// the function should recieve 1 parameter, an array of javascript objects
// each opbject has two properties: year and result
// ex: { year: 1997, results: 'W' }
// it should use find() to test each Object to see if the result is "w" - a win!
    // tools i might use:
        // record.results
        // conditional (if or ternary)
        // test each Object => loop ?
// it should return the year when the win occurred (if it ocured at all!)
// if no win is found, it should return, sadly, undefined

// input:
    // data type: number
    // example: 7
    const record = [
        { year: "2015", result: "W"},
        { year: "2014", result: "N/A"},
        { year: "2013", result: "L"},
        //...
      ]

// output
      //data type: boolean
      // example: true

// 7 -> true
// 8 -> false
// 9 -> true
// ....

function superbowlWin(record){



    function isOdd(element) {
         return (element % 2 === 1);
    }

    function isWin(element, index, array){
        return (element.result === 'W');
    }

    const result = record.find(isWin)

    if (result === undefined) {
        return undefined;
    }
}
