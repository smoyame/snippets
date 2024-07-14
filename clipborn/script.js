let timestampGraf = document.querySelector('.timestamp')
let time = document.querySelector('#time')
let date = document.querySelector('#date')

function updateTimeStamp() {
	let lastUse = new Date()
	let lastUseDateCA = lastUse.toLocaleDateString('en-CA', { year: "numeric", month: "2-digit", day: "2-digit" })
	let lastUseDateUS = lastUse.toLocaleDateString('en-US', { year: "numeric", month: "2-digit", day: "2-digit" })
	let lastUseTime = lastUse.toLocaleTimeString('en-US', { timeStyle: "short", hour12: false })

	time.attributes.datetime.value = lastUseTime
	time.innerText = lastUseTime

	date.attributes.datetime.value = lastUseDateCA
	date.innerText = lastUseDateUS

	if (!timestampGraf.style.opacity) {
		timestampGraf.style.opacity = 1
		timestampGraf.removeAttribute("aria-hidden")
	}
}