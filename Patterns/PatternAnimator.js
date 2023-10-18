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
            array[i] = pattern.EvaluateColour(Time.GetTime(), null).ToHex();
        }

        return array;
    }
}

module.exports = {PattenAnimator}
