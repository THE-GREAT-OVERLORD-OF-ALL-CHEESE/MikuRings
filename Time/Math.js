function Clamp(val, min, max)
{
    return Math.min(Math.max(val, min), max)
}

module.exports = {Clamp}