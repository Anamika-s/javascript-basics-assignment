/* Write a Program to Flatten a given n-dimensional array */

const flatten = (a) => {
    // Write your code here
    var s;
    if(typeof a == "object")
    {
    var c=[].concat(...a);
    var d=[].concat(...c)
    s=[].concat(...d);
    }
    else{
    s=null;
    }
    return s;
    };
    
    /* For example,
    INPUT - flatten([1, [2, 3], [[4], [5]])
    OUTPUT - [ 1, 2, 3, 4, 5 ]
    
    */
    
    module.exports = flatten;