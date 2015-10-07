function move(thing, coord)
{
	dom = document.getElementById(thing).style;
	oldCoord = dom.top;
	oldPar = document.getElementById('oldCoord').firstChild;


	newPar = document.createElement('p');
	newLine = document.createElement('br');

	text1 = document.createTextNode("Coord: " +oldCoord);

	newPar.appendChild(text1);
	newPar.appendChild(newLine);

	document.getElementById('oldCoord').replaceChild(newPar,oldPar);

	//changing coord

	dom.top = coord + "px";

	newPar = document.createElement('p');
	newLine = document.createElement('br');

	text1 = document.createTextNode("Coord: " + coord + "px");

	newPar.appendChild(text1);
	newPar.appendChild(newLine);
	document.getElementById('out').appendChild(newPar);
}