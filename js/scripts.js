$(document).ready(function(){
  $("#formOne").submit(function(event){
    var aNumberInput = $("input#number").val();
    var aLocationInput = $("input#location").val();
    var aAdjectiveInput = $("input#adjective").val();
    var aPluralAnimalInput = $("input#plural-animal").val();
    var aVerbInput = $("input#verb").val();

    $(".number").text(aNumberInput);
    $(".location").text(aLocationInput);
    $(".adjective").text(aAdjectiveInput);
    $(".plural-animal").text(aPluralAnimalInput);
    $(".verb").text(aVerbInput);

    $(story).show();
    event.preventDefault();
  });
});
