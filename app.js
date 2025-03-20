let countEl = document.getElementById('count-el')
let entries = document.getElementById('entries')

let count = 0

function plus() {
    count += 1
    countEl.textContent = count
}

function minus() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let num = count + " - "
    entries.innerText += num
    count = 0
    countEl.textContent = 0
}

function reset() {
    count = 0
    countEl.textContent = 0
    entries.innerText = "Previous Entries:"
}