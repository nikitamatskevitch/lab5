const modal = document.getElementById('myModal')
const modalTextContainer = document.getElementById('modalTextContainer')
const closeBtn = document.getElementsByClassName('close')[0]

const firstText = document.getElementById('firstText')
const firstTextColor = document.getElementById('firstTextColor')

const secondText = document.getElementById('secondText')
const secondTextColor = document.getElementById('secondTextColor')

const thirdText = document.getElementById('thirdText')
const thirdTextColor = document.getElementById('thirdTextColor')

const fourthText = document.getElementById('fourthText')
const fourthTextColor = document.getElementById('fourthTextColor')

const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')

firstText.style.color = firstTextColor.value
secondText.style.color = secondTextColor.value
thirdText.style.color = thirdTextColor.value
fourthText.style.color = fourthTextColor.value


firstTextColor.addEventListener('input', function () {
    firstText.style.color = firstTextColor.value
})

secondTextColor.addEventListener('input', function () {
    secondText.style.color = secondTextColor.value
})

thirdTextColor.addEventListener('input', function () {
    thirdText.style.color = thirdTextColor.value
})

fourthTextColor.addEventListener('input', function () {
    fourthText.style.color = fourthTextColor.value
})

button1.addEventListener('click', function () {
    firstText.value = ''
    secondText.value = ''
    thirdText.value = ''
    fourthText.value = ''
})

button2.addEventListener('click', function () {
    const textFields = [
        {
            text: document.getElementById('firstText').value,
            color: document.getElementById('firstTextColor').value,
        },
        {
            text: document.getElementById('secondText').value,
            color: document.getElementById('secondTextColor').value,
        },
        {
            text: document.getElementById('thirdText').value,
            color: document.getElementById('thirdTextColor').value,
        },
        {
            text: document.getElementById('fourthText').value,
            color: document.getElementById('fourthTextColor').value,
        },
    ]

    textFields.forEach(function (textField) {
        const textElement = document.createElement('p')
        textElement.textContent = textField.text
        textElement.style.color = textField.color

        modalTextContainer.appendChild(textElement)
    })

    showModal()
})


button3.addEventListener('click', function () {
    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleDateString()
    
    const newInputItemHTML = `
    <div class="input-item">
        <input type="text" placeholder="Текст здесь" value="${fourthText.value + formattedDate}" size="18" style="color: ${fourthTextColor.value}">
        <input type="color" value="${fourthTextColor.value}">
    </div>
`;
    const secondInputItem = document.querySelector('#firstText').closest('.input-item');   
    secondInputItem.insertAdjacentHTML('afterend', newInputItemHTML);

})

closeBtn.addEventListener('click', closeModal)


function showModal() {
    modal.style.display = 'block'
}


function closeModal() {
    modal.style.display = 'none'
    modalTextContainer.innerHTML = ''
}