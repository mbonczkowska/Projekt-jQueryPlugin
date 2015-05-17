$(document).ready(function (){

	$("#submit").click(function(){
		
		$("#imie").validate( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/} );
		$("#nazwisko").validate( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/}  );
		$("#email").validate(  {pattern:  /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/}); 
		$("#haslo").validate(  {pattern:  /^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż].*[0-9]|[0-9].*[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]$/ }); 
	    $("#kodPocztowy").validate( {pattern: /^[0-9]{2}-[0-9]{3}$/} );
		$.getJSON("kody.json", function(data) {
			for (var i = 0; i < data.length; i++) { 
				 if(data[i]["KOD POCZTOWY"] === $("#kodPocztowy").val()){
					$("#miasto").html(data[i]["MIEJSCOWOŚĆ"]);
				 }
			}
	    });
    });
});
