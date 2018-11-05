const data = [
  {
    "name" : "Mircea Angehlescu",
    "age" : 32,
    "gender" : "barbat",
    "lookingfor" : "femeie",
    "location" : "Cluj-Napoca, CJ",
    "image" : " https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    "name" : "Maria Popa",
    "age" : 28,
    "gender" : "femeie",
    "lookingfor" : "brbat",
    "location" : "Tecuci, Gl",
    "image" : " https://randomuser.me/api/portraits/women/35.jpg"
  },
  {
    "name" : "Lazar Auguztin",
    "age" : 44,
    "gender" : "barbat",
    "lookingfor" : "femeie",
    "location" : "Alba Iulia, AB",
    "image" : " https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "name" : "Flori Paraschiv",
    "age" : 33,
    "gender" : "femeie",
    "lookingfor" : "barbat",
    "location" : "Bucuresti, B",
    "image" : " https://randomuser.me/api/portraits/women/45.jpg"
  }
]

// create a variable

const profiles = profileIterator(data);

// call first profile on page reload or initially to have something on page first, and when the profiles end  on reload to starts again
nextProfile();

// next event

document.getElementById('next').addEventListener('click', nextProfile);

// Next progfile display

function nextProfile () {
  const profilulCurent = profiles.next().value;

  if(profilulCurent !== undefined){
    document.getElementById('profile-display').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Nume: ${profilulCurent.name}</li>
      <li class="list-group-item">Varsta: ${profilulCurent.age}</li>
      <li class="list-group-item">Sex: ${profilulCurent.gender}</li>
      <li class="list-group-item">Cauta: ${profilulCurent.lookingfor}</li>
      <li class="list-group-item">Locatie: ${profilulCurent.location}</li>
    </ul>
  `;
  document.getElementById('img-display').innerHTML = `<img src="${profilulCurent.image}">`
  } else {
    // reload window
    window.location.reload();
  }

}
//create iterate function 

function profileIterator(profiles){
  let nextIndex = 0;

  return {
    next: function (){
      return nextIndex < profiles.length ?
      {
        value :profiles[nextIndex++], done:false
      }:
      {
        done: true
      }
    }
  }
}