
var inventory = [];
var object = 'coucou';
localStorage.setItem("item1","chat");
localStorage.setItem("item2","cool");


var lol = document.getElementsByTagName('button');
lol[0].addEventListener('click', function(){

	console.log("page 2");
	localStorage.setItem("item3","chat");
	sessionStorage.setItem("item4","time");

inventory.push('coton');
console.log(inventory);
});


/*var promptText = prompt('hibou lol');*/

function addObject(object){

	inventory.push(object,'chaise','chien','ece');
}



/*
addObject(object);
console.log(inventory);


// Supprimer un element de l'inventaire
var index = -1;

for(var i = 0; i < inventory.length ; i++)
{
	if( 'chaise' == inventory[i])
	{
		index = i;
	}
}
console.log(index);
inventory.splice(index,1);
console.log(inventory);
*/

