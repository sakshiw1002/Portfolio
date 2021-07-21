      arr = [" \"Try try but don't cry\" ",
      " \"Failure is the stepping stone to success\" ",
      " \"Impossible is 'I am possible' \" ",
      " \"Believe in yourself\" ",
      " \"Change the world by being yourself\" ",
      " \"Every moment is a fresh beginning\" ",
      " \"Die with memories, not dreams\" ",
      " \"Never regret anything that made you smile\" "]
      
       function myFunction() {
              
            document.getElementById("demo").innerHTML = arr[Math.floor((Math.random() * 8))];
       
            }
            setInterval(myFunction, 2000);