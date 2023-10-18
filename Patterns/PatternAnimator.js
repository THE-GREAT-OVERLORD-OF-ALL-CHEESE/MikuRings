const { Time } = require('./Time/Time');

class PattenAnimator
{
	constructor(pattern)
	{
		this.pattern = pattern;
	}

    Update(time, array)
    {
        for (let i = 0; i < array.length; i++)
        {
            array[i] = this.pattern.EvaluateColour(Time.GetTime(), null).ToHex();
        }

        return array;
    }
}

module.exports = {PattenAnimator}
