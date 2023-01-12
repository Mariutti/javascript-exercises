const fibonacci = function(n) {
    let a = 0
    let b = 1
    let c = 0
    if(n < 0){
        return 'OOPS'
    }
    for(let i = 0; i <= n; i++) {
      c = a
      a = b
      b = a + c
      
  
    }
      return c
  }

// Do not edit below this line
module.exports = fibonacci;
