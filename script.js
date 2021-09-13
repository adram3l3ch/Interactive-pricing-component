const slider = document.getElementById("slider");
const price = document.getElementById("price");
const toggler = document.querySelector(".toggler");
const checkBox = document.querySelector(".billing__toggler input");
const pageViews = document.getElementById("page-views");
const discount = document.querySelector(".discount");

slider.addEventListener("change", setPrice);
checkBox.addEventListener("change", setBilling);
window.addEventListener("resize", setDiscount);

function setPrice(e) {
	let value = +slider.value;
	let _price =
		value === 0
			? ["10K", 8]
			: value === 1
			? ["50K", 12]
			: value === 2
			? ["100K", 16]
			: value === 3
			? ["500K", 24]
			: value === 4
			? ["1M", 36]
			: 0;
	price.innerHTML = `$${
		checkBox.checked ? _price[1] - _price[1] * 0.25 : _price[1]
	}.00<span> /month</span>`;
	pageViews.textContent = `${_price[0]} PAGEVIEWS`;
	slider.style.setProperty("--percent", `${25 * value}%`);
}

function setBilling(e) {
	toggler.classList.toggle("year");
	setPrice();
}

function setDiscount(e) {
	if (e.srcElement.innerWidth < 601) {
		discount.textContent = "-25%";
	} else {
		discount.textContent = "25% discount";
	}
}

if (window.innerWidth < 601) {
	discount.textContent = "-25%";
} else {
	discount.textContent = "25% discount";
}
