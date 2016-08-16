import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';




Template.layout.rendered = function(){
  $('.right.menu.open').on("click",function(e){
        e.preventDefault();
    $('.ui.vertical.menu').toggle();
  });
    
  $('.ui.dropdown').dropdown();
}




Template.slider.onRendered(function() {
  console.log('onRendered');
});

Template.slider.rendered = function(){
  this.$('#carousel').slick({
       dots: false,
       arrows: true
     });
    console.log('rendered');
}
// Template.slider.rendered = function() {
//     $('#carousel').slick({
//       dots: false,
//       arrows: true
//     });
//   };
