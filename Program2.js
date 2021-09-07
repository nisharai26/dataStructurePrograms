/*Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

    If the group's length is 1, append the character to s.
    Otherwise, append the character followed by the group's length.

The compressed string s should not be returned separately, but instead be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.
You must write an algorithm that uses only constant extra space. */


var compress = function(chars) {
    let times = 1
     for(let i=1;i<=chars.length;i++) {
         if(chars[i-1]==chars[i]) {
             while(chars[i-1]==chars[i]) {
                  console.log( chars.splice(i-1,1))
               console.log(times++);
             }
             let str = String(times)
             console.log(str)
            var x = String(times).split('').reverse().forEach(e=>{
                 chars.splice(i,0, e)
             })
     
             i++
             times=1
         }
     }
 };
compress(["a","a","b","b","c","c","c"]);