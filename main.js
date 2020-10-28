const arrayOfStudents = []

const hideJumbo = () => {
  document.getElementById('myJumbo').classList.add('invisible');
  document.getElementById('studentForm').classList.remove('invisible')
}
  document.getElementById('startSorting').addEventListener('click', hideJumbo);

const sortStudent = () => {
  let name = document.getElementById('studentName').value
  let randomHouse = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
  let houseNumber = Math.floor(Math.random()*randomHouse.length)
  let id = Math.random().toString(36).substring(2, 8)
  arrayOfStudents.push({name, id})
  studentPrinter(arrayOfStudents)
}

document.getElementById('sortButton').addEventListener('click', sortStudent)

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
};


const studentPrinter = (arrayOfStudents) => {
let domString = '';
for (let i = 0; i < arrayOfStudents.length; i++) {
  domString += `<h1>${arrayOfStudents[i].name}</h1>`;
}
printToDom('allStudents', domString)
};
