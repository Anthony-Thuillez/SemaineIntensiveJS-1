 var ico = document.querySelector('.profilIcon');
 var modal = document.querySelector('.openProfil_modal');
 var overlay = document.querySelector('.openProfil_overlay');

 ico.addEventListener('click', function() {
   modal.style.display = 'block';
 });

 overlay.addEventListener('click', function() {
   modal.style.display = '';
 });

 var fields = document.querySelectorAll('.allId');

 for (let i = 0; i < fields.length; i++) {
   console.log(fields[i]);
   fields[i].addEventListener('focus', function() {
     fields[i].style.border = '2px red solid';
   });

   fields[i].addEventListener('blur', function() {

     if (fields[i].value !== '') {
       fields[i].style.border = '';
     }
   });
 }