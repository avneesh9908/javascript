// string palidrome 

function isPalindrome(s) {
    // return s === s.split('').reverse().join('');
    // return s === [...s].reverse().join('');
    let len=s.length-1;
    for (let i = 0; i < len; i++) {
        if (s[i] !== s[len-i]) {
            return false;
            }
        }
        return true;
    }

    // console.log(isPalindrome("RAR"));

    //string palidrome with recursion
    
    // function isPalindrome(s) {
    //     if (s.length <= 1) return true;
    //     if (s[0] !== s[s.length - 1]) return false;
    //     return isPalindrome(s.slice(1, -1));
    //     }

    //number palidrome

    function isPalindromeNumber(number){
        let reverse=0;
        while(number!==0){
            let digit=number%10;
            reverse=reverse*10+digit;
            number=math.floor(number/10);
        }
        return reverse;
    }
    
   let result=isPalindromeNumber(1213);
   console.log(math.floor(101/10));