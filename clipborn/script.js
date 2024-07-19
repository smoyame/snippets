let timestampGraf = document.querySelector('.timestamp')
let time = document.querySelector('#time')
let date = document.querySelector('#date')

function updateTimeStamp() {
	let locale = navigator.languages[0]
	let lastUse = new Date()
	let tzShort = Intl.DateTimeFormat(locale, {
		timeZoneName: "short"
	}).format(lastUse).match(/(?<=\,\s).*$/g)

	let dateUsed = lastUse.toLocaleDateString(locale)
	let dateCA = lastUse.toLocaleDateString('en-CA')
	let timeUsed = lastUse.toLocaleTimeString(locale, {
		timeStyle: "short",
		hour12: false
	})

	time.attributes.datetime.value = timeUsed
	time.innerText = `${timeUsed} ${tzShort}`

	date.attributes.datetime.value = dateCA
	date.innerText = dateUsed

	if (!timestampGraf.style.opacity) {
		timestampGraf.style.opacity = 1
		timestampGraf.removeAttribute("aria-hidden")
	}
}