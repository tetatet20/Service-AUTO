import"./index.scss";import"./components/examples/examples";import"./scripts/header";const sendButton=document.querySelector(".call-me-back");sendButton.addEventListener("click",(function(){const e=document.querySelector(".name-send"),t=document.querySelector(".number-send"),a=document.querySelector(".email-send"),s=e.value,c=t.value,o=a.value,r=(new Date).toLocaleDateString("ru-Ru");c&&s&&o?(fetch(`https://api.telegram.org/bot5347573628:AAGlHUQzNDeAaC5WSToxc5cXpFYProrrqoU/sendMessage?chat_id=-1001776896462&text=${r}%0AИмя%20%2D%20${s}%0AНомер%20%2D%20${c}%0AТранспорт%20%2D%20${o}`),sendButton.innerHTML="Спасибо за обращение",sendButton.classList.add("call-me-back-active"),e.value="",t.value="",a.value=""):(t.classList.add("eror"),e.classList.add("eror"),a.classList.add("eror"),t.placeholder="Заполните поле",e.placeholder="Заполните поле",a.placeholder="Заполните поле")}));