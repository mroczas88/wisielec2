var haslo = "Dupa";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var haslo1 = "";
var ileskuch=0;



for ( i=0 ; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}
function wypiszhaslo()
{	
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery ="AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";
function start()
{
	var tresc_diva = "";
	for (i=0;i<35;i++)
	{
		tresc_diva= tresc_diva + '<div class="litera" onclick=sprawdz('+i+') id="lit'+i+'">'+litery.charAt(i)+'</div>';
		if ((i+1)% 7 == 0) tresc_diva = tresc_diva + '<div style="clear: both"></div>';
	}
		document.getElementById("alfabet").innerHTML = tresc_diva;
	wypiszhaslo();
}
String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length-1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}
function sprawdz(nr)
{
var trafiona = false;
for ( i=0 ; i<dlugosc; i++)
	{
		if (haslo.charAt(i)==litery.charAt(nr)) 
			{
				haslo1= haslo1.ustawZnak(i,litery.charAt(nr));
				trafiona = true;
			} 
	}	
	
		if(trafiona == true)
			{
				document.getElementById('lit' + nr).style.background = "#003300";
				document.getElementById('lit' + nr).style.color = "#00c000";
				document.getElementById('lit' + nr).style.border = "2px solid #00c000";
				document.getElementById('lit' + nr).style.cursor = "default";
				wypiszhaslo();
				document.getElementById('lit' + nr).setAttribute("onclick",";");
			}else {
				document.getElementById('lit' + nr).style.background = "#330000";
				document.getElementById('lit' + nr).style.color = "#c00000";
				document.getElementById('lit' + nr).style.border = "2px solid #c00000";
				document.getElementById('lit' + nr).style.cursor = "default";
				ileskuch++;
				document.getElementById("szubienica").innerHTML = '<img src="img/s'+ ileskuch +'.jpg" alt=""/></div>';
				document.getElementById('lit' + nr).setAttribute("onclick",";");
								
			}
	if (haslo == haslo1){
		document.getElementById("alfabet").innerHTML = "Gratuluje! Prawidłowe hasło : " +haslo+
		'<br /><span class="reset" onclick="location.reload()">Zagraj jeszcze raz</span>';
	}
	if (ileskuch >= 9){
					document.getElementById("alfabet").innerHTML = "NIe udało się! Prawidłowe hasło : " +haslo+
					'<br /><span class="reset" onclick="location.reload()">Zagraj jeszcze raz</span>';
	}
}