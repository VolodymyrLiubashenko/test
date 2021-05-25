//burger
let burger = document.getElementsByClassName('burger')[0]
let header = document.getElementsByClassName('header')[0]
let headerMenu = document.getElementsByClassName('header-menu')[0]
let menuItem = document.getElementsByClassName('menu-item')
let headerButtonsClass = document.getElementsByClassName('header-buttons')[0]
let headerButtons = headerButtonsClass.getElementsByTagName('button')
console.log(window.scrollY)
burger.addEventListener('click',function(){
	this.classList.toggle('active')
	header.classList.toggle('active')
	headerMenu.classList.toggle('active')
})
for(elem of menuItem){
	elem.addEventListener('click',function(){
	for(elem of menuItem){
		elem.classList.remove('active')
	}
	this.classList.add('active')
	header.nextElementSibling.innerHTML = '<h1>' + this.textContent + '</h1>'
})
}



window.addEventListener('scroll',()=>{
	if(window.scrollY != 0){
		header.classList.add('scroll')
		burger.classList.add('scroll')
		burger.previousElementSibling.classList.add('scroll')
		for(elem of menuItem ){
			elem.classList.add('scroll')
		}
		for( elem of headerButtons){
			elem.classList.add('scroll')
		}
	}
	else{
		header.classList.remove('scroll')
		burger.classList.remove('scroll')
		burger.previousElementSibling.classList.remove('scroll')
		for(elem of menuItem ){
			elem.classList.remove('scroll')
		}
		for( elem of headerButtons){
			elem.classList.remove('scroll')
		}
	}
})


//subtitle
let subMenuItem = document.	getElementsByClassName('sub-menu-item')

for(elem of subMenuItem){
	elem.addEventListener('click',function(){
		for(elem of subMenuItem){
			elem.classList.remove('active')
		}
	this.classList.add('active')
	})
}

//tips

let accordionSummary = document.getElementsByClassName('accordion-summary')
let accordionContent = document.getElementsByClassName('accordion-content')
for(elem of accordionSummary){
	elem.addEventListener('click',function(){
		if(this.classList.contains('active')){
			this.classList.remove('active')
			this.nextElementSibling.classList.remove('active')
		}
		else{
			for(elem of accordionSummary){
			elem.classList.remove('active')
			elem.nextElementSibling.classList.remove('active')
			}
			this.classList.add('active')
			this.nextElementSibling.classList.add('active')
		}
		
	})
}
//glossary
let glossaryList = document.getElementsByClassName('glossary-list')[0]
let glossaryListElements = glossaryList.getElementsByTagName('li')
let definitionTitle = document.getElementsByClassName('definition-title')[0]
let vpered = document.getElementById('vpered')
let nazad = document.getElementById('nazad')
const listItem = {
	Botnet : 'Malicious software that blocks access to a system until a ransom is paid. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
 	Cloud : 'From my years of teaching, I am confident to say that it is', 
 	DDoS: 'Roven way to learn and speak English ',
 	Domain:'Christopher Hill, the international ESL professor (with 20+ years of exp',
 	Endpoint:'A lot of students have studied English for years but still ',
 	Exploit:'Speak English on an advanced level. They have tried many methods, attend',
 	Firewall:'Chrisn way to learn and speak English',
	Malware:'From my years of teaching, I am confident to say that it is',
	Penetration:'Malicious software that blocks access to a system until a ransom is paid. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
	Test:'Speak English on an advanced level. They have tried many methods, attend',
	'Phishing/Spearphishing':'Christopher Hill, the international ESL professor (with 20+ years of exp',
	Ransomware:'From my years of teaching, I am confident to say that it is',
	Session:'From my years of teaching, I am confident to say that it is',
	Hijacking:'Malicious software that blocks access to a system until a ransom is paid. Lorem ipsum dolor sit amet, consectetur',
	Social:'Speak English on an advanced level. They have tried many methods, attend',
	Engineering:'Christopher Hill, the international ESL professor (with 20+ years of exp',
	Software:'Aren’t able to ing classes, learning how to pronounce every single word and even getting a private Englis',
	SOC:'In this book, erience) will show you powerful unique ways to rapidly improve your spoken English. With',
	Trojan:'Ttopics you already have interest in, you will find out how easy and effortless to learn and speak fluent English. This',
	Horse:	'Ffective method is simple, yet powerful. You will able to learn and improve your spoken English three to five tim',
	VPN:'To improve their spoken English, yet they still have a hard time pronouncing English words correctly or feeling',
	Virus:'Easy for an English learner to go from a beginner English level to an intermediate English level. However, it takes',
	Worm :'More time to go from an Intermediate level to an advanced English level.'
}
let listItemKeys = Object.keys(listItem)
let count = 0;
let glossaryListIndex 
function setGlossaryListIndex(){
	if(window.innerWidth<1024){
	glossaryListIndex = 5
	}
	else{
	glossaryListIndex = 15
	}
}
setGlossaryListIndex()
//Fill ul with
addElemToTheListVpered()
// Убираю предидущщие элементы списка добавляю следуйщие
// Меняю стили кнопкам
function addElemToTheListVpered() {
	if(count > listItemKeys.length-1){
		return
	}
	clearContainer(glossaryList)
	for( i = count ; i <count +  glossaryListIndex; i++){
		if(listItemKeys[i]){
			let li = document.createElement('li')
			li.innerHTML = listItemKeys[i]
			li.classList.add('list-items')
			li.addEventListener('click',getDefinitionFromList)
			glossaryList.appendChild(li)
			}
			else{
				count = i
				vpered.classList.add('stop')
				return
			}
	}
	nazad.classList.remove('stop')
	count += glossaryListIndex
}

function addElemToTheListNazad(){
	if(count <= glossaryListIndex){
		return count = glossaryListIndex
	}
	let listItems = document.querySelectorAll('.list-items')
	let a = count-listItems.length-glossaryListIndex
	clearContainer(glossaryList)
	for( i = a ; i < a + glossaryListIndex; i++ ){
		if(listItemKeys[i]){
			let li = document.createElement('li')
			li.innerHTML = listItemKeys[i]
			li.classList.add('list-items')
			li.addEventListener('click',getDefinitionFromList)
			glossaryList.appendChild(li)
			}
		}	
		count -= listItems.length
		if(count<=glossaryListIndex){
			nazad.classList.add('stop')	
			}
		vpered.classList.remove('stop')
}
//Очищаю контейнер
function clearContainer(elem){
	let count =  elem.children.length
	for(i = 0 ; i <=count-1; i++){
		elem.firstElementChild.remove()
	}
}
vpered.addEventListener('click',addElemToTheListVpered)
nazad.addEventListener('click',addElemToTheListNazad)
// Функции заполняющие поля термином и соответствующим обозначением
function getDefinitionFromList(){
	for( elem of glossaryListElements){
		elem.classList.remove('active')
	}
	this.classList.add('active')
	definitionTitle.innerHTML = this.textContent
	getExplonation()
}

function getExplonation(){
definitionTitle.nextElementSibling.innerHTML = listItem[definitionTitle.textContent]
}

//FAQs
let faqsQuestion = document.getElementsByClassName('faqs-question')
let faqsUnswer = document.getElementsByClassName('faqs-unswer')

for(elem of faqsQuestion){
	elem.addEventListener('click',function(){
		if(this.classList.contains('active')){
			this.classList.remove('active')
			this.nextElementSibling.classList.remove('active')
		}
		else{
			for(elem of faqsQuestion){
			elem.classList.remove('active')
			elem.nextElementSibling.classList.remove('active')
			}
			this.classList.add('active')
			this.nextElementSibling.classList.add('active')
		}
	})
}
