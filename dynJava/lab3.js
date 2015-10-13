function move(thing, coord)
{
	dom = document.getElementById(thing).style;
	oc = dom.top;
	oldPar = document.getElementById('oldCoord').firstChild;


	coord = +oc.replace("px",'') + +coord;

	newPar = document.createElement('p');
	newLine = document.createElement('br');

	text1 = document.createTextNode("Coord: " + coord);

	newPar.appendChild(text1);
	newPar.appendChild(newLine);

	document.getElementById('oldCoord').replaceChild(newPar, oldPar);

	//changing coord

	dom.top = coord;

	newPar = document.createElement('p');
	newLine = document.createElement('br');

	text1 = document.createTextNode(coord);

	newPar.appendChild(text1);
	newPar.appendChild(newLine);
	document.getElementById('out').appendChild(newPar);
}