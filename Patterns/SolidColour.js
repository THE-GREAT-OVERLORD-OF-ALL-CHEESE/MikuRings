const {Colour} = require("../LEDs/Colour");

class Patten_SolidColour
{
    /**
     * 
     * @param {Colour} colour 
     */
	constructor(colour)
	{
		this.colour = colour;
	}

    /**
     * 
     * @param {number} time 
     * @param {LED} LED 
     * @returns 
     */
    EvaluateColour(time, LED)
    {
        return this.colour;
    }
}

module.exports = {Patten_SolidColour}
