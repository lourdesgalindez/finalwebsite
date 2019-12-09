document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.slider');
   var instances = M.Slider.init(elems);
 });



 // var instance = M.Slider.getInstance(elem);

     /* jQuery Method Calls
       You can still use the old jQuery plugin method calls.
       But you won't be able to access instance properties.

       $('.slider').slider('methodName');
       $('.slider').slider('methodName', paramName);
     */


//   instance.pause();
//   instance.start();
//   instance.next();
//   instance.prev();
//
// instance.destroy();
