import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.slider.rendered = function() {
    $('#carousel').slick({
      dots: false,
      arrows: true
    });
  };
  