let monDiv = document.createElement('div');

document.getElementById('viewport').appendChild(monDiv);

monDiv.innerText = "Ce div a été ajouté en utilisant javascript";

let pomme = document.createElement('div');

document.getElementById('viewport').appendChild(pomme);

pomme.style.backgroundColor = 'red';
pomme.style.width = '100px';
pomme.style.height = '100px';

let supprime = document.querySelector('span');
supprime.remove();






