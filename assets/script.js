const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const chemin = "./assets/images/slideshow/"
////////////////////
creationDots()
carrouselDefilement()

function carrouselDefilement() {
	let index = 0
	let arrowLeft = document.querySelector(".arrow_left")
	let arrowRight = document.querySelector(".arrow_right")
	arrowRight.addEventListener("click", () => {
		console.log("feleche de droite")
		index++
		if (index >= slides.length) {
			index = 0
		}
		changeSlide(index)
	})
	arrowLeft.addEventListener("click", () => {
		console.log("feleche de gauche")
		index--
		if (index < 0) {
			index = slides.length - 1
		}
		changeSlide(index)
	})
}

function creationDots() {
	let dots = document.querySelector(".dots")
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("span")
		dot.classList.add("dot")
		if (i === 0) {
			dot.classList.add("dot_selected")
		}
		dots.appendChild(dot)
	}
}

function changeSlide(index) {
	const elem = slides[index]
	let tagLine = document.getElementById("tagLine")
	let bannerImg = document.querySelector(".banner-img")
	bannerImg.src = chemin + elem.image
	tagLine.innerHTML = elem.tagLine
	let dotSelector = document.querySelectorAll(".dot")
	for (let i = 0; i < dotSelector.length; i++) {
		let dot = dotSelector.item(i)
		dot.classList.remove("dot_selected")
		if (i === index) {
			dot.classList.add("dot_selected")
		}
	}
}