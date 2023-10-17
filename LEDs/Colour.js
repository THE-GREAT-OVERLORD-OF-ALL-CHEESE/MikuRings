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
}

module.exports = {Colour}
