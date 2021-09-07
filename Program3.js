//program2 problem;
var compress = function(chars) {
    // using two pointers
      // Time complexity O(n)
      // Space complexity O(1)
      
      let p1 = 0;
      
      let len = chars.length;
      
      if (len === 1) {
          return chars.length;
      }
      
      let count = 0;
      
      for (let p2 = 1; p2 <= len; p2++) {
          // this is required, as we incrementally replace this value during the run.
          const curr = chars[p2];
          
          count++;
          
          // check if not equal or reach the end of chars.
          if (chars[p1] !== curr || p2 === len) {
              
              p1++;
              if (count !== 1) {
                  
                  // split the count value to insert in the array
                  let custom = String(count).split('');
                  for (let cc of custom) {
                     chars[p1] = cc;
                      p1++; 
                  }
              }
              
              // reset the running count to 0 and update last char with running chars pointer. 
              count = 0;
              chars[p1] = curr;
          } 
      }
      // trim the array till lenght
      chars.length = p1;
      return p1;
  };