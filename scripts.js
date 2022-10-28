/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function(){

/*********************************/

   let conmsg = document.getElementsByClassName("message")[0];
   let btn = document.getElementsByTagName("button")[0];
   let mail = document.getElementById("email");
   
/*********************************/

   btn.addEventListener('click', (event) =>{
       event.preventDefault();
       if (mail.value === ''){
           conmsg.textContent = 'Please enter a valid email address.';
       }
       else{
           conmsg.textContent = `Thank you! Your email address, ${mail.value}, has been added to our mailing list.`;
        }
   });
}, false);