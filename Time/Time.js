class Time
{
    static startTime = 0;
    
    static time = 0;

    static deltaTime = 0;
    static deltaTimeMs = 0;

    static Init()
	{
        Time.startTime = Date.now();
	}
    
    static Tick()
    {
        Time.deltaTimeMs = Date.now() - timeMs;
        Time.deltaTime = deltaTimeMs / 1000;
        Time.time = (Date.now() - startTime) / 1000;
    }
    
    static GetTime()
    {
        return Time.time;
    }
    
    static GetDeltaTime()
    {
        return Time.deltaTime;
    }
}

module.exports = {Time}