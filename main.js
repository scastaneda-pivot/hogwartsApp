const merchandiseArray = [
  {
    type: 'hat',
  },
]

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
  // studentPrinter(merchandiseArray)
}
document.getElementById('sortButton').addEventListener('click', sortStudent)

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
};


const studentPrinter = (merchandiseArray) => {
let domString = '';
for (let i = 0; i < merchandiseArray.length; i++) {
  domString += `<h1>${merchandiseArray[i].type}</h1>`;
}
printToDom('allStudents', domString)
};

const merchInit = () => {
  studentPrinter(merchandiseArray);
};
