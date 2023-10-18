const ws281x = require('rpi-ws281x-native');
const { Colour } = require('./LEDs/Colour');
const { PattenAnimator } = require('./Patterns/PatternAnimator');
const { Patten_SolidColour } = require('./Patterns/SolidColour');

const options = {
    dma: 10,
    freq: 800000,
    gpio: 18,
    invert: false,
    brightness: 255,
    stripType: ws281x.stripType.WS2812B
};

const channel = ws281x(2, options);

let colorArray = channel.array;

let pattern = new PattenAnimator();
pattern.pattern = new Patten_SolidColour(new Colour(1,1,1));

let startTime = Date.now();
let timeMs = Date.now();
Main();

function Main()
{
    let deltaTimeMs = Date.now() - timeMs;
    let deltaTime = deltaTimeMs / 1000;
    let time = (Date.now() - startTime) / 1000;

    timeMs = Date.now();

    colorArray = pattern.Update(time, colorArray);

    ws281x.render();
    //console.log(colorArray);
    setTimeout(Main, 10);
}

function Clamp(val, min, max)
{
    return Math.min(Math.max(val, min), max)
}