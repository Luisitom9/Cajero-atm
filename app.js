
function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("pass").value;	

			if(usuario == "Mali"  && Contraseña == "1234")
			{
				window.location.href = "index2.html";
			} else if(usuario == "Gera"  && Contraseña == "1234")
			{
				window.location.href = "index3.html";
			} else if(usuario == "Maui"  && Contraseña == "1234")
			{
				window.location.href = "index4.html";
			}
			else
			{
				alert("Verifique sus datos");
			}
		}

		
		function deposito( ){
			var Quantity=parseInt(document.getElementById('Cant').value);
			var Quantity1=parseInt(document.getElementById('C1').value);
			if(Quantity+Quantity1<=990){
				document.getElementById('C1').value=(Quantity1+Quantity);
			}else{
				alert('El saldo no puede ser mayor a $990')
			}
			
		}
		function retiro(){
			var Quantity=parseInt(document.getElementById('Cant').value);
			var Quantity1=parseInt(document.getElementById('C1').value);
			if(Quantity1-Quantity>=10){
				document.getElementById('C1').value=(Quantity1-Quantity);
			}else{
				alert('El saldo no puede ser menor a $10')
			}
		}