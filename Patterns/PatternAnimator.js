class PattenAnimator
{
	constructor()
	{
		this.pattern = null;
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
