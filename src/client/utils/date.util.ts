export function getLocaleStringFromEpochTime(epochTime: number) {
    const date = new Date(0)
    date.setMilliseconds(epochTime)
    return date.toLocaleString()
}