function setData(index){
	let object = document.getElementsByClassName('object');
	console.log(object[index].innerHTML);
	let storage1 = localStorage.getItem('inventory1');
	let storage2 = localStorage.getItem('inventory2');
	let storage3 = localStorage.getItem('inventory3');
	let storage4 = localStorage.getItem('inventory4');

	if(storage1 == null){
		localStorage.setItem('inventory1',object[index].innerHTML);
	}
	else if(storage2 == null){
		localStorage.setItem('inventory2',object[index].innerHTML);
	}
	else if(storage3 == null){
		localStorage.setItem('inventory3',object[index].innerHTML);
	}
	else if(storage4 == null){
		localStorage.setItem('inventory4',object[index].innerHTML);
	}
	else{
		console.log("No space remaining in inventory");
		alert("No space remaining in inventory");
	}

}

function deleteData(key){
	localStorage.removeItem(key);
}

/*

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


var promptText = prompt('hibou lol');

function addObject(object){

	inventory.push(object,'chaise','chien','ece');
}




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

