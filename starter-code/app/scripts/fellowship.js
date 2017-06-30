console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];

//Variables used by more than one function
var fellowshipDiv,
    rivendell,
    mtDoom,
    gollum,
    region,
    mordor,
    shire,
    frodo,
    ring,
    sam;

var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var map = document.createElement('section'); //Create a map
  map.setAttribute('id', 'middle-earth'); //Set that map's id to middle-earth so we can put middle-earth in the DOM later
  // inside, add each land as an article tag
  lands.forEach(function(land) {
    region = document.createElement('article');
    // inside each article tag include an h1 with the name of the land
    var regionName = document.createElement('h1');

    regionName.textContent = land;
    region.appendChild(regionName);
    map.appendChild(region);
  });
  // append middle-earth to your document body
  body.appendChild(map);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var list = document.createElement('ul');
  hobbits.forEach(function(hobbit) {
    var tinyPeople = document.createElement('li');
    tinyPeople.textContent = hobbit;
    // give each hobbit a class of hobbit
    tinyPeople.setAttribute('class', 'hobbit');
    list.appendChild(tinyPeople);
  });
  shire = document.querySelector('article');
  shire.appendChild(list);
}

makeHobbits();

// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  ring = document.createElement('div');
  ring.setAttribute('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  ring.setAttribute('class', 'magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ring.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
  frodo = document.querySelector('li');
  frodo.appendChild(ring);
}

keepItSecretKeepItSafe();


// Part 4

function makeBuddies() {
  // create an aside tag
  var sidebar = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var fellowship = document.createElement('ul');
  buddies.forEach(function(buddy) {
    var fellow = document.createElement('li');
    fellow.textContent = buddy;
    fellowship.appendChild(fellow);
  });
  sidebar.appendChild(fellowship);
  // insert your aside as a child element of rivendell
  rivendell = document.querySelector('article').nextSibling;
  rivendell.appendChild(sidebar);
}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var elfLover = document.querySelector('aside ul').children[3];
  elfLover.textContent = "Aragorn";
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitConglomerate = document.querySelector('article ul');
    rivendell.appendChild(hobbitConglomerate);
}

leaveTheShire();


// Part 7

function forgeTheFellowship() {
  // create a new div called 'the-fellowship' within rivendell
  fellowshipDiv = document.createElement('div');
  fellowshipDiv.setAttribute('id', 'the-fellowship');
  rivendell.appendChild(fellowshipDiv);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  //Getting
  var thisIsStupidIs = document.querySelector('ul li');
  var thisJustSoThat = document.querySelector('ul li').nextSibling;
  var iGetUsedToDOM = document.querySelector('ul').childNodes[2];
  var apiMethodsAnd = document.querySelector('ul').lastChild.previousSibling;
  var propertiesOrIs = document.querySelector('ul').lastChild;
  var thisJustBusyWork = document.querySelector('.hobbit');
  var okButReally = document.querySelector('.hobbit').nextSibling;
  var thatWasReallyHelpful = document.querySelector('.hobbit').parentNode.lastChild;
  var uhOhForgotMerry = document.querySelector('.hobbit').parentNode.lastChild.previousSibling;
  //Here's a question: would there be any way to loop through these? I guess you would
  //have to keep things more organized to loop through them all, but I'm already balls deep into this...
  //Setting
  fellowshipDiv.appendChild(thisIsStupidIs);
  fellowshipDiv.appendChild(thisJustSoThat);
  fellowshipDiv.appendChild(iGetUsedToDOM);
  fellowshipDiv.appendChild(apiMethodsAnd);
  fellowshipDiv.appendChild(propertiesOrIs);
  fellowshipDiv.appendChild(thisJustBusyWork);
  fellowshipDiv.appendChild(okButReally);
  fellowshipDiv.appendChild(thatWasReallyHelpful);
  fellowshipDiv.appendChild(uhOhForgotMerry);

  var fellowshipArray = [];

  fellowshipArray.push(thisIsStupidIs.textContent);
  fellowshipArray.push(' ' + iGetUsedToDOM.textContent);
  fellowshipArray.push(' ' + apiMethodsAnd.textContent);
  fellowshipArray.push(' ' + propertiesOrIs.textContent);
  fellowshipArray.push(' ' + thisJustBusyWork.textContent);
  fellowshipArray.push(' ' + okButReally.textContent);
  fellowshipArray.push(' and ' + uhOhForgotMerry.textContent); 

  // after each character is added make an alert that they have joined your party

  alert(fellowshipArray + " have joined your party!");
}

forgeTheFellowship();


// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalf = document.querySelector('div li');
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.background = 'white';
  gandalf.style.borderColor = 'grey';
}

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('The horn of Gondor has been blown!');
  // Boromir's been killed by the Uruk-hai!
  alert('Boromir\'s been killed by the Uruk-hai!');
  // put a linethrough on boromir's name
  var boromir = document.querySelector('#the-fellowship').childNodes[4];
  boromir.style.textDecoration = 'line-through';
  // Remove Boromir from the Fellowship
  boromir.style.display = 'none';
}

hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  sam = document.querySelector('#the-fellowship').childNodes[6];
  mordor = document.querySelector('section').lastChild;
  var twosome = document.createElement('ul');
  mordor.appendChild(twosome);
  fellowshipDiv.removeChild(frodo);
  twosome.appendChild(sam);
  twosome.appendChild(frodo);

  // add a div with an id of 'mount-doom' to Mordor
  mtDoom = document.createElement('div');
  mtDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mtDoom);
}

itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  gollum = document.createElement('div');
  gollum.textContent = "Gollum";
  gollum.setAttribute('id', 'gollum');
  mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  frodo.removeChild(ring);
  gollum.appendChild(ring);
  // Move Gollum into Mount Doom
  mtDoom.appendChild(gollum);

}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  gollum.remove();
  // remove all the baddies from the document
  mordor.remove();
  // Move all the hobbits back to the shire
  shire.appendChild(frodo);
  shire.appendChild(sam);

  var pippin = document.getElementById('the-fellowship').childNodes[5];
  console.log(pippin);
  var merry =  document.getElementById('the-fellowship').childNodes[6];
  console.log(merry);

  fellowshipDiv.removeChild(pippin);
  fellowshipDiv.removeChild(merry);

  shire.appendChild(pippin);
  shire.appendChild(merry);
}

thereAndBackAgain();

