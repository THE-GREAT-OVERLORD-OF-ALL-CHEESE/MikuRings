const {Colour} = require("./Colour.js");

class LED
{
	constructor()
	{
		this.colour = new Colour();
		this.lastColour = new Colour();
	}
}

module.exports = {LED}
