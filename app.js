// Define arrays for month and weekday names
const monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Get references to HTML elements
const container = document.querySelector(".container");
const monthTitle = document.querySelector(".month");
const yearTitle = document.querySelector(".year");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const days = document.querySelector(".days");

// Get current date
let currentDate = new Date();

// Function to render calendar
function renderCalendar() {
	// Clear previous calendar
	days.innerHTML = "";

	// Set current month and year titles
	monthTitle.textContent = monthNames[currentDate.getMonth()];
	yearTitle.textContent = currentDate.getFullYear();

	// Get the number of days in the current month
	const numDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

	// Get the index of the first day of the month
	const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

	// Create calendar days
	for (let i = 1; i <= numDays; i++) {
		const day = document.createElement("div");
		day.classList.add("day");
		day.textContent = i;

		if (i === currentDate.getDate() && currentDate.getMonth() === new Date().getMonth()) {
			day.classList.add("today");
		}

		days.appendChild(day);
	}

	// Add blank days to beginning of calendar
	for (let i = 0; i < firstDayIndex; i++) {
		const blank = document.createElement("div");
		blank.classList.add("day", "blank");
		days.appendChild(blank);
	}
}

// Render initial calendar
renderCalendar();

// Add event listeners to previous and next buttons
prevBtn.addEventListener("click", () => {
	currentDate.setMonth(currentDate.getMonth() - 1);
	renderCalendar();
});

nextBtn.addEventListener("click", () => {
	currentDate.setMonth(currentDate.getMonth() + 1);
	renderCalendar();
});
