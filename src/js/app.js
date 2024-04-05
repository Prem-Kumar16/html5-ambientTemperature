import Mustache from 'mustache';

var template;

var controls = [
    { id: 'MAIN', name: 'Temperature'},
];


function render_sliders(sliders) {
    var sliderContainer = document.getElementById('SliderContainer');
    for( var i=0; i<sliders.length; i++) {
        var node = Mustache.render(template, sliders[i]);
        sliderContainer.innerHTML += node;
        console.log("From APP.js " + sliderContainer.innerHTML)
    }
}


export function init() {
    template = document.getElementById('slider-template').innerHTML;
    render_sliders(controls);
}
