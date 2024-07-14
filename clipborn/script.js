let lastUse = new Date()
let lastUseDate = lastUse.toLocaleDateString('en-US')
let lastUseTime = lastUse.toLocaleTimeString('en-US', { timeStyle: "short", hour12: false })
let lastUseISO = lastUse.toISOString()