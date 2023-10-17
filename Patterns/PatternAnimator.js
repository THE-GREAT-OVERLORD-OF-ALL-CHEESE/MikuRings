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
            array[i] = 0xff0000;
        }

        return array;
    }
}

module.exports = {PattenAnimator}
