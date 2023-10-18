class Time
{
    static startTime = 0;
    
    static time = 0;

    static deltaTime = 0;
    static deltaTimeMs = 0;

    static Init()
	{
        startTime = Date.now();
	}
    
    static Tick()
    {
        deltaTimeMs = Date.now() - timeMs;
        deltaTime = deltaTimeMs / 1000;
        time = (Date.now() - startTime) / 1000;
    }
    
    static GetTime()
    {
        return time;
    }
    
    static GetDeltaTime()
    {
        return deltaTime;
    }
}

module.exports = {Time}