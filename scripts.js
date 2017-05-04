$(document).ready(function() {
  var
    imgContainer = document.getElementById('container'),
    quoteField = document.getElementById('quote-field'),
    quoteButton = document.getElementById('quote-btn'),
    tweetBtn = document.getElementById('btn'),
    backgroundImg = "url('https://unsplash.it/1024/768/?random')";

    imgContainer.style.backgroundImage = backgroundImg;
    var url = 'https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520';

  function randomNum(x) {
    return (x.length * Math.random() << 0);
  };

  function getJson(handleData) {
    $.ajax({
      url: url,
      success: function(data) {
        handleData(data);
      }
    })
  };

  getJson(function(out) {
    var quoteList = JSON.parse(out);
    var rand = randomNum(quoteList);
    quoteField.innerHTML = `${quoteList[rand].quote} - ${quoteList[rand].name}`;
    var fullQuote = quoteField.innerHTML;

    twttr.widgets.createShareButton(
      'http:\/\/localhost:3000\/',
      document.getElementById('btn'),
      {
        text: fullQuote
      }
    );
  });

  // function pickRandomQuote() {
    // // This will put the keys in an array so we can use the index for random assignment.
    // var
    //   keys = Object.keys(obj),
    //   keyNum = keys.length * Math.random() << 0;
    //
    // quoteAuthor.innerHTML = `&nbsp - ${keys[keyNum]}`;
    //
    // return obj[keys[keyNum]];
  // }

  function tweetFormat(quote, author) {
    var res = quote;
    var lenWithoutAuthor = 112 - author.length;

    if (quote.length > lenWithoutAuthor) {
      res = quote.substring(0, lenWithoutAuthor) + "..." + " -" + author;
    } else {
      res = quote + " - " + author;
    }
    return res;
  }

  quoteButton.addEventListener('click', function() {
    getJson(function(out) {
      var
        quoteList = JSON.parse(out),
        rand = randomNum(quoteList),
        fullQuote = tweetFormat(quoteList[rand].quote, quoteList[rand].name);

      quoteField.innerHTML = `${quoteList[rand].quote} - ${quoteList[rand].name}`;
      tweetBtn.innerHTML = "";

      twttr.widgets.createShareButton(
        'http:\/\/localhost:3000\/',
        document.getElementById('btn'),
        {text: fullQuote});
    });
  });


});
