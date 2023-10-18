class Time
{
    constructor()
	{
        this.startTime = Date.now();

        this.time = 0;

        this.deltaTime = 0;
        this.deltaTimeMs = 0;
	}
    
    static Tick()
    {
        this.deltaTimeMs = Date.now() - timeMs;
        this.deltaTime = deltaTimeMs / 1000;
        this.time = (Date.now() - startTime) / 1000;
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