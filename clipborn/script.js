let timestampGraf = document.querySelector('.timestamp')
let timeElement = document.querySelector('#time')

function getTimeStamp() {
	let lastUse = new Date()
	let lastUseDate = lastUse.toLocaleDateString('en-US')
	let lastUseTime = lastUse.toLocaleTimeString('en-US', { timeStyle: "short", hour12: false })

	timeElement.attributes.datetime.value = lastUse.toISOString()
	timeElement.innerText = `${lastUseTime} on ${lastUseDate}`

	if (!timestampGraf.style.opacity) {
		timestampGraf.style.opacity = 1
		timestampGraf.removeAttribute("aria-hidden")
	}
}