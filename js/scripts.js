$(document).ready(function(){
  $("#formOne").submit(function(event){
    var blanks =["number","location","adjective","plural-animal"];
    // var aNumberInput = $("input#number").val();
    // var aLocationInput = $("input#location").val();
    // var aAdjectiveInput = $("input#adjective").val();
    // var aPluralAnimalInput = $("input#plural-animal").val();
    // var aVerbInput = $("input#verb").val();
    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    })
    // $(".number").text(aNumberInput);
    // $(".location").text(aLocationInput);
    // $(".adjective").text(aAdjectiveInput);
    // $(".plural-animal").text(aPluralAnimalInput);
    // $(".verb").text(aVerbInput);

    $("#story").show();
    event.preventDefault();
  });
});
