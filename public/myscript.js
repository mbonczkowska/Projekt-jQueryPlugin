$(document).ready(function (){

	$( "form" ).submit(function( event ) {
		
		$("#imie").validate( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/} );
		$("#nazwisko").validate( {pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/}  );
		$("#email").validate(  {pattern:  /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/}); 
		$("#haslo").validatePassword(  {pattern:  /^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż].*[0-9]|[0-9].*[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]$/ }); 
	    $("#kodPocztowy").validateZipCode( {pattern: /^[0-9]{2}-[0-9]{3}$/} );

    });
});
