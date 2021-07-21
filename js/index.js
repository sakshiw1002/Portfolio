      arr = [" \"Websites promote you 24/7: No employee will do that.\" ",
      " \"Code is read more than it is written.\" ",
      " \"Life would be much easier if I had the source code. \" ",
      " \"Developer is the one who creates bugs/defects mostly and working code rarely\" ",
      " \"Developer refracts. Hacker does. Programmer solves.\" ",
      " \"Programming is not easy like Sunday morning, it is silent poetry.\" ",
      " \"First, solve the problem. Then, write the code.\" ",
      " \"A language that doesn't affect the way you think about programming is not worth knowing.\" "]
      
       function myFunction() {
              
            document.getElementById("demo").innerHTML = arr[Math.floor((Math.random() * 8))];
       
            }
            setInterval(myFunction, 2000);