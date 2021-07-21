arr = [" \"Speaking\" ",
" \"Listening\" ",
" \"Leadership\" ",
" \"Time management\" ",
" \"Stress managment\" ",
" \"Quick Learner\" "]

 function myFunction() {
        
      document.getElementById("demo").innerHTML = arr[Math.floor((Math.random() * 6))];
 
      }
      setInterval(myFunction, 2000);