const {Clamp} = require("../Time/Math");

class Colour
{
	constructor(r = 0, g = 0, b = 0)
	{
		this.r = r;
		this.g = g;
		this.b = b;

		console.log("I am a new colour!");
		console.log(r);
		console.log(g);
		console.log(b);
	}
	
	Add(colour)
	{
		this.r += colour.r;
		this.g += colour.g;
		this.b += colour.b;
	}
	
	Sub(colour)
	{
		this.r -= colour.r;
		this.g -= colour.g;
		this.b -= colour.b;
	}
	
	Mul(colour)
	{
		this.r *= colour.r;
		this.g *= colour.g;
		this.b *= colour.b;
	}
	
	Div(colour)
	{
		this.r /= colour.r;
		this.g /= colour.g;
		this.b /= colour.b;
	}

	ToHex(r, g, b)
	{
    	let outR = Math.round(Clamp(r, 0, 1) * 255);
    	let outG = Math.round(Clamp(g, 0, 1) * 255);
    	let outB = Math.round(Clamp(b, 0, 1) * 255);

    	return (outR << 16) + (outG << 8) + outB;
	}
}

module.exports = {Colour}
