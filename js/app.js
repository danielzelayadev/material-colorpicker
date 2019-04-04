var red = 0,
  green = 0,
  blue = 0;

var $sliders = $('#red, #green, #blue');
var $red_slider = $('#red');
var $green_slider = $('#green');
var $blue_slider = $('#blue');
var $color = $('.color');
var $hex = $('#hex');
var rhex = '00',
  ghex = '00',
  bhex = '00';

var decToHex = function(dec) {
  var hexExtras = ['A', 'B', 'C', 'D', 'E', 'F'];

  var digit1 = 0,
    digit2 = 0;

  if (dec < 10) {
    digit2 = dec;
  } else if (dec < 16) {
    digit2 = hexExtras[dec - 10];
  } else {
    digit1 = Math.floor(dec / 16);
    digit2 = dec % 16;

    if (digit1 > 9) {
      digit1 = hexExtras[digit1 - 10];
    }
    if (digit2 > 9) {
      digit2 = hexExtras[digit2 - 10];
    }
  }

  return '' + digit1 + digit2;
};

var updateColor = function() {
  red = $red_slider.val();
  green = $green_slider.val();
  blue = $blue_slider.val();

  $color.css('background', 'rgb(' + red + ',' + green + ',' + blue + ')');
};

var updateHex = function() {
  if ($(this).attr('id') === 'red') rhex = decToHex(red);
  else if ($(this).attr('id') === 'green') ghex = decToHex(green);
  else bhex = decToHex(blue);

  var hex = '#' + rhex + ghex + bhex;

  $hex.css('color', hex);
  $hex.text(hex);
};

$sliders.change(updateColor).change(updateHex);
