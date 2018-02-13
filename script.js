$(document).ready(function(){
  var getQuote = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

  

  
  
    $.getJSON(getQuote)
      .done(function(init){
      var quote = JSON.stringify(init["quoteText"]);
      
      $("#quote").html(quote);
      $("#author").html(JSON.stringify(init["quoteAuthor"]).replace(/\"/g, ""));
      $(".btn").click(function(){
      $.getJSON(getQuote)
      .done(function(init){
        $("#quote").html(JSON.stringify(init["quoteText"]));
        $("#author").html(JSON.stringify(init["quoteAuthor"]).replace(/\"/g, ""));
      })
    });
     
      $("#tweetQuote").click(function(){
        var quoteTweet = $("#quote").text().replace(/\"/g, "");
        var quoteAuthor= $("#author").text();
        var message = quoteTweet + " - " + quoteAuthor;
        
        if(message.length < 140){
          window.open('https://twitter.com/intent/tweet?text=' + message + '', '_blank');
        };
        
      });
      
    });
  
  


  
  
});
