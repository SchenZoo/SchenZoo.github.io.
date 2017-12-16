function Heroj(i,n,k,p,f)
{
	var that=this;
	this.ime=i;
	this.nivo=n;
	this.klasa=k;
	this.pol=p;
	this.frakcija=f;
	(function validation()
	{
		if(that.ime==undefined || that.ime=="")
			that.ime="Unknown name";
		if(that.nivo==undefined || that.nivo<0)
			that.nivo=0;
		if(that.klasa==undefined || that.klasa=="")
			that.klasa="Unknown class";
		if(that.pol==undefined || (that.pol!="M" && that.pol!="Z"))
			that.pol="M";
		if(that.frakcija==undefined || that.frakcija=="")
			that.frakcija="Unknown fraction";
	})();
	this.dodajMe=function()
	{
		var body=document.querySelector(".PotrebanBody");
		var row=document.createElement("tr");
		body.appendChild(row);
		
		var cell=document.createElement("td");
		cell.innerHTML=this.ime;
		row.appendChild(cell);
		
		var cell=document.createElement("td");
		cell.innerHTML=this.nivo;
		row.appendChild(cell);
		
		var cell=document.createElement("td");
		cell.innerHTML=this.klasa;
		row.appendChild(cell);
		
		var cell=document.createElement("td");
		cell.innerHTML=this.pol;
		row.appendChild(cell);
		
		var cell=document.createElement("td");
		cell.innerHTML=this.frakcija;
		row.appendChild(cell);
	}
}
function Druzina()
{
	var that=this;
	this.nizHeroja=[];
	this.dodajHeroja=function(heroj)
	{
		this.nizHeroja.push(heroj);
	}
	this.crtaj=function(host)
	{
		if(host==undefined || host==null)
			throw new Error("Greska u hostu");
		//Ime
		var fs=document.createElement("fieldset");
		host.appendChild(fs);
		var labela=document.createElement("label");
		labela.innerHTML="Ime";
		fs.appendChild(labela);
		var input=document.createElement("input");
		input.name="Ime";
		input.type="text";
		fs.appendChild(input);
		var br=document.createElement("br");
		fs.appendChild(br);
		//Nivo
		labela=document.createElement("label");
		labela.innerHTML="Nivo";
		fs.appendChild(labela);
		input=document.createElement("input");
		input.name="Nivo";
		input.type="number";
		fs.appendChild(input);
		 br=document.createElement("br");
		fs.appendChild(br);
		//Klasa
		labela=document.createElement("label");
		labela.innerHTML="Klasa";
		fs.appendChild(labela);
		input=document.createElement("input");
		input.name="Klasa";
		input.type="text";
		fs.appendChild(input);
		var br=document.createElement("br");
		fs.appendChild(br);
		//POL
		labela=document.createElement("label");
		labela.innerHTML="Pol";
		fs.appendChild(labela);
		input=document.createElement("input");
		input.value="M";
		input.name="Pol";
		input.type="radio";
		input.className="radioDugme";
		fs.appendChild(input);
		
		input=document.createElement("input");
		input.value="Z";
		input.name="Pol";
		input.type="radio";
		input.className="radioDugme";
		fs.appendChild(input);
		var br=document.createElement("br");
		fs.appendChild(br);
		//Frakcija
		
		labela=document.createElement("label");
		labela.innerHTML="Frakcija";
		fs.appendChild(labela);
		
		input=document.createElement("input");
		input.value="Alijansa";
		input.name="Frakcija";
		input.type="radio";
		input.className="radioDugme2";
		fs.appendChild(input);
		
		input=document.createElement("input");
		input.value="Horda";
		input.name="Frakcija";
		input.type="radio";
		input.className="radioDugme2";
		fs.appendChild(input);
		
		input=document.createElement("input");
		input.value="Neutralna";
		input.name="Frakcija";
		input.type="radio";
		input.className="radioDugme2";
		fs.appendChild(input);
		var br=document.createElement("br");
		fs.appendChild(br);
		br=document.createElement("br");
		fs.appendChild(br);
		
		var dugme=document.createElement("button");
		dugme.innerHTML="Dodaj";
		dugme.className= "DodajDugme";
		dugme.refzaListu=this;
		fs.appendChild(dugme);
		dugme.onclick=function()
		{
			var input=document.getElementsByName("Ime");
			var ime=input[0].value;
			console.log(input);
			input=document.getElementsByName("Nivo");
			var nivo=input[0].value;
			input=document.getElementsByName("Klasa");
			var klasa=input[0].value;
			var Polovi=document.getElementsByName("Pol");
			var pol;
			for(var i = 0; i < Polovi.length; i++)
			{
				if(Polovi[i].checked)
				{
					pol = Polovi[i].value;
					break;
				}
			}
			var Frak=document.getElementsByName("Frakcija");
			var frakcija;
			for(var i = 0; i < Frak.length; i++)
			{
				if(Frak[i].checked)
				{
					frakcija = Frak[i].value;
					break;
				}
			}
			var osoba=new Heroj(ime,nivo,klasa,pol,frakcija);
			osoba.dodajMe();
			this.refzaListu.dodajHeroja(osoba);
			
			
			
		}
		
		
		var tabla=document.createElement("table");
		host.appendChild(tabla);
		var tableHead=document.createElement("thead");
		tabla.appendChild(tableHead);
		var red=document.createElement("tr");
		tableHead.appendChild(red);
		var cell=document.createElement("th");
		cell.innerHTML="Ime";
		red.appendChild(cell);
		
		cell=document.createElement("th");
		cell.innerHTML="Nivo";
		red.appendChild(cell);
		
		cell=document.createElement("th");
		cell.innerHTML="Klasa";
		red.appendChild(cell);
		
		cell=document.createElement("th");
		cell.innerHTML="Pol";
		red.appendChild(cell);
		
		cell=document.createElement("th");
		cell.innerHTML="Frakcija";
		red.appendChild(cell);
		var tableBody=document.createElement("tbody");
		tabla.appendChild(tableBody);
		tableBody.className="PotrebanBody";
		
		
		this.nizHeroja.forEach(function(x)
		{
			x.dodajMe();
		});
		
		
		
	}
		
		
		
}