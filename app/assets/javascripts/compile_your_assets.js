$(document).on('ready', function(){

  $('body').append('<span data-line-number="3. ">Compile your assets,</span><br>');

  $("#hidden").hide();

  $('#rick').on("click", function(){
    console.log("IDFWU")
    $("#hidden").fadeIn(2500);
  });

  $("#hidden").on("click", function(){
    $("#hidden").fadeOut("slow");
  });

});
