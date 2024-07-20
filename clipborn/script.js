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

let table = document.querySelector('#output-table tbody')
let origRow = document.querySelector('[data-table="row-template"]')
const templateRow = origRow
let genericRowContents = document.querySelector('[data-table="row-template"]').innerHTML

function newRow(type, attr, content, index = "00") {
	let timestamp = Date.now()
	let newRow = templateRow.cloneNode(true)

	newRow.setAttribute("data-table", "row")
	newRow.setAttribute("data-added", timestamp)

	newRow.querySelector('[data-column="index"]').innerText = index
	newRow.querySelector('[data-column="data-type"]').innerText = type
	newRow.querySelector('[data-column="attribute"]').innerText = attr
	newRow.querySelector('[data-column="preview"] pre').innerText = content

	if (templateRow) {
		templateRow.remove()
	}
	table.appendChild(newRow)
}


if (navigator.clipboard) {
	async function getClipList() {
		try {
			const items = await navigator.clipboard.read();
			for (const clipboardItem of items) {
				let decoder = new TextDecoder()
				let selectedType = clipboardItem.types[0]

				let blob = await clipboardItem.getType(selectedType);
				let blobText = await blob.bytes()
				let decodedText = decoder.decode(blobText)

				newRow(selectedType, "ATTR", decodedText)
				console.log(selectedType)
			}
		} catch (err) {
			console.error(err.name, err.message);
		}
	}

	document.querySelector('.fi-input').addEventListener('paste', () => {
		updateTimeStamp()
		getClipList()
	})
}