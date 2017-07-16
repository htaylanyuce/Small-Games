$(document).ready(function() {



  $("#target").submit(function(event) {

     var p_date = $("#date").val();

     var sp = p_date.split("/");

     var str = "https://api.fixer.io/" + sp[2]+"-"+sp[1]+"-"+sp[0] +"?callback=?";


     $.getJSON(str, function(data){
 
        var x = data.rates;
        var trHTML = '  ';
        $("table#currencies").empty();

        for(var i in x)
        {
             $("table#currencies").append('<tr id=i><td>' + i + '</td><td>' + x[i] + '</td></tr>');

        }


     });
     event.preventDefault();

   });


});
