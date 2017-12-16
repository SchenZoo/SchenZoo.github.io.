window.onload=function()
{
	var lista=new Druzina();
	lista.dodajHeroja(new Heroj("Schenzo",100,"Warrior","M","Horda"));
	lista.dodajHeroja(new Heroj("Baus",99,"Mage","M","Horda"));
	lista.dodajHeroja(new Heroj("Rebbul",98,"Assassin","Z","Horda"));
	lista.dodajHeroja(new Heroj());
	lista.crtaj(document.getElementById("main"));
}