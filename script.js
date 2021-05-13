const list = document.querySelector('#list');
const input = document.querySelector('#input');

let array = []

const addListItem = () => {
    let item = {
        text: '',
        done: false
    }
    if (input.value.length > 0) {
        item.text = input.value
        input.value = ''
        array.unshift(item)
        updateList()
    }
}

const updateList = () => {
    list.innerHTML = null
    array.map(item => {
        const delBtn = document.createElement('button')
        delBtn.addEventListener('click', (event) => {
            return removeItem(event.target.parentElement.firstChild)
        })
        delBtn.innerHTML = 'delete'

        const span = document.createElement('span')
        span.appendChild(document.createTextNode(item.text));

        const div = document.createElement('div')
        div.classList.add('item')
        item.done ? div.classList.toggle('done') : null
        div.addEventListener('click', (event) => {
            return toggleItemState(event.target.firstChild)
        })
        div.appendChild(span)
        div.appendChild(delBtn)

        list.appendChild(div);
    })
}

const removeItem = (target) => {
    array = array.filter(el => el.text != target.innerText)
    updateList()
}

const toggleItemState = (target) => {
    array.map(el => {
        if (el.text == target.innerHTML) {
            el.done = !el.done
        }
    })
    array.sort((a, b) => {
        return a.done - b.done
    })
    updateList()
}