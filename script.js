$(document).ready(function(){
  var getQuote = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  
  

  
  
    $.getJSON(getQuote)
      .done(function(init){
      $("#quote").html(JSON.stringify(init["quoteText"]));
      $("#author").html(JSON.stringify(init["quoteAuthor"]).replace(/\"/g, ""));
    })
  
  
    $(".btn").click(function(){
      $.getJSON(getQuote)
      .done(function(data){
        $("#quote").html(JSON.stringify(data["quoteText"]));
        $("#author").html(JSON.stringify(data["quoteAuthor"]).replace(/\"/g, ""));
      })
    });
});
