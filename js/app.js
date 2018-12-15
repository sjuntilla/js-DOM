/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
let tayName = 'Tay-Tay';
const getName1 = document.getElementById('name1');
getName1.innerHTML = tayName;


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
let projMan = 'Project Manager';
const getPos2 = document.getElementById('position2');
getPos2.innerHTML = projMan;


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
let conCatOne = 'Concatenation';
const getAlias3 = document.getElementById('alias3');
getAlias3.innerHTML = conCatOne;




/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
let thisCouldBeUs = 'This could be us, but you be playin.';
const getProfile = document.getElementsByClassName('profile');
getProfile[0].innerHTML = thisCouldBeUs;


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
let bruceQuote = 'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.';
getProfile[1].innerHTML = bruceQuote;


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
let samRole = 'Nick Fury';
const getAlias = document.getElementsByClassName('alias');
getAlias[2].innerHTML = samRole;


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
let famDude = 'Peter Griffin';
const nameSeven = document.createElement('div');
nameSeven.innerHTML = famDude;
nameParent.appendChild(nameSeven);


/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
let oldMan = 'Old Man Riverwalk';
const aliasEight = document.createElement('div');
aliasEight.innerHTML = oldMan;
aliasParent.appendChild(aliasEight);


//Final Boss
/*9. Create your own profile.*/
let selfName = 'Samantha Eve';
const nameNine = document.createElement('div');
nameNine.innerHTML = selfName;
const blockThree = document.getElementsByClassName('block3');

let selfAlias = 'Very, very tired';
const aliasNine = document.createElement('div');
aliasNine.innerHTML = selfAlias;

let selfBio = "I don't have a catchphrase. :(";
const bioNine = document.createElement('div');
bioNine.innerHTML = selfBio;

const getImg = document.getElementsByTagName('img');
getImg[8].src = 'https://i.imgur.com/85g4msW.jpg';

blockThree[2].appendChild(nameNine);
blockThree[2].appendChild(aliasNine);
blockThree[2].appendChild(bioNine);