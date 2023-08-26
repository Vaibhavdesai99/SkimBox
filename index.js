// Add an event listener to all radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('click', handleRadioButtonClick);
});

// Event handler for radio button clicks
function handleRadioButtonClick(event) {
  // Reset background color of all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.backgroundColor = 'white';
  });

  // Make all .value_horizontal elements lighter
  const makeBold = document.querySelectorAll('.value_horizontal');
  makeBold.forEach(element => {
    element.style.fontWeight = 'lighter';
  });

  // Find the parent section of the clicked radio button
  const parentSection = event.target.closest('section');
  parentSection.style.backgroundColor = 'pink';

  // Find the .value_horizontal within the parent section and make it bold
  const valueHorizontal = parentSection.querySelector('.value_horizontal');
  valueHorizontal.style.fontWeight = 'bold';
}

// Add an event listener to all select elements
const selectElements = document.querySelectorAll('select');
selectElements.forEach(selectElement => {
  selectElement.addEventListener('click', handleSelectClick);
});

// Event handler for select clicks
function handleSelectClick(event) {
  const valueHorizontal = event.target.closest('.left_1_Box').querySelector('.value_horizontal');
  valueHorizontal.style.fontWeight = 'bold';
}
