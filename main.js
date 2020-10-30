// const merchandiseArray = [
//   {
//     type: 'album',
//     title: 'Don\'t Break My Heart',
//     price: 55.55,
//     imgUrl: 'https://img.discogs.com/LBeTkPkjA9QmK9HxFW9ipDFaWPE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-110148-1223963828.jpeg.jpg',
//   },
//   {
//     type: 'shirt',
//     title: 'Toni Braxton V Neck',
//     price: 13.13,
//     imgUrl: 'https://img.discogs.com/LBeTkPkjA9QmK9HxFW9ipDFaWPE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-110148-1223963828.jpeg.jpg',
//   },
//   {
//     type: 'album',
//     title: 'Don\'t Break My Heart',
//     price: 55.55,
//     imgUrl: 'https://img.discogs.com/LBeTkPkjA9QmK9HxFW9ipDFaWPE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-110148-1223963828.jpeg.jpg',
//   }
// ]

const hideJumbo = () => {
  document.getElementById('myJumbo').classList.add('invisible');
  document.getElementById('studentForm').classList.remove('invisible')
}
  document.getElementById('startSorting').addEventListener('click', hideJumbo);

const sortStudent = () => {
  let name = document.getElementById('studentName').value
  let randomHouse = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
  let houseNumber = Math.floor(Math.random()*randomHouse.length)
  let house = randomHouse[houseNumber]
  let id = Math.random().toString(36).substring(2, 8)
  console.log(id)
  arrayOfStudents.push({name, house, id})
  studentPrinter(arrayOfStudents)
}

document.getElementById('sortButton').addEventListener('click', sortStudent)

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
};

const studentPrinter = (merchandiseArray) => {
console.log('duh array', arrayOfStudents)
let domString = '';
for (let i = 0; i < merchandiseArray.length; i++) {
  domString += '<div class="card-separation">'
  domString += '<div class="card ">';
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${merchandiseArray[i].title}</h5>`;
  domString += `<p class="card-text">${merchandiseArray[i].type}</p>`;
  domString += `<button type="button" class = "expel" class="btn btn-light">Expel</button>`
  domString += '  </div>';
  domString += '</div>';
  domString += '</div>';

  
}
printToDom('allStudents', domString)
activateExpel()
houseColor()
}

const houseColor = () => {
  const elements = document.getElementsByClassName("card-text")

  for (let i = 0; i <elements.length; i++) {
   
    for (let i = 0; i <arrayOfStudents.length; i++) {
      console.log(arrayOfStudents[i].house);
     if (arrayOfStudents[i].house === 'Gryffindor') {
       elements[i].classList.add("red");
     } else if (arrayOfStudents[i].house === 'Hufflepuff') {
       elements[i].classList.add("blue");
     }
     else if (arrayOfStudents[i].house === 'Ravenclaw') {
       elements[i].classList.add("green");
     }
     else if (arrayOfStudents[i].house === 'Slytherin') {
       elements[i].classList.add("orange");
     };
    }
  }
}
const expelStudent = (e) => {
  console.log('skurrrr we in heerr', e);
  console.log(e.target.id)
  for (let i = 0; i < arrayOfStudents.length; i++) {
    if (e.target.id === arrayOfStudents[i].id) {
      arrayOfStudents.splice(i, 1);
    };
  };
  studentPrinter(arrayOfStudents);
}

const activateExpel = () => {
  let getButton = document.getElementsByClassName("expel-btn")
  for (let i = 0; i < getButton.length; i++) {
    getButton[i].addEventListener('click', expelStudent)
  }
}



