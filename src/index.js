import './index.scss'
import './components/examples/examples'
import './scripts/header'

const sendButton = document.querySelector('.call-me-back')

sendButton.addEventListener('click', function () {
	
	const name = document.querySelector('.name-send')
	const number = document.querySelector('.number-send')
	const email = document.querySelector('.email-send')
	const nameValue = name.value
	const numberValue = number.value
	const emailValue = email.value
	const date = new Date().toLocaleDateString('ru-Ru')
	if (numberValue && nameValue && emailValue ) {
		fetch(
			`https://api.telegram.org/bot5347573628:AAGlHUQzNDeAaC5WSToxc5cXpFYProrrqoU/sendMessage?chat_id=-1001776896462&text=${date}%0AИмя%20%2D%20${nameValue}%0AНомер%20%2D%20${numberValue}%0AТранспорт%20%2D%20${emailValue}`
		)
		sendButton.innerHTML = "Спасибо за обращение"
		sendButton.classList.add('call-me-back-active')
		name.value = ""
		number.value = ""
		email.value = ""

	} else {
		number.classList.add("eror")
		name.classList.add("eror")
		email.classList.add("eror")
		number.placeholder = "Заполните поле"
		name.placeholder = "Заполните поле"
		email.placeholder = "Заполните поле"
	}
})
