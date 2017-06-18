$(document).ready(function() {
  var
    imgContainer = document.getElementById('container'),
    quoteField = document.getElementById('quote-field'),
    quoteButton = document.getElementById('quote-btn'),
    tweetBtn = document.getElementById('btn'),
    backgroundImg = "url('https://unsplash.it/1024/768/?random')",
    urlQuotes = 'https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520';

    imgContainer.style.backgroundImage = backgroundImg;

  function randomNum(x) {
    return (x.length * Math.random() << 0);
  };

  function tweetFormat(quote, author) {
    var res = quote;
    var lenWithoutAuthor = 119 - author.length;

    if (quote.length > lenWithoutAuthor) {
      res = quote.substring(0, lenWithoutAuthor) + "...";
    } else {
      res = quote;
    }
    return res;
  }

  function getJson(handleData) {
    $.ajax({
      url: urlQuotes,
      success: function(data) {
        handleData(data);
      },
      cache: "false"
    })
  };

  getJson(function(out) {
    var
      quoteList = JSON.parse(out),
      rand = randomNum(quoteList),
      authorHashTag = quoteList[rand].name.replace(/\s/g, ""),
      fullQuote = tweetFormat(quoteList[rand].quote, authorHashTag);

    quoteField.innerHTML = `${quoteList[rand].quote} - ${quoteList[rand].name}`;
    tweetBtn.innerHTML = "";

    twttr.widgets.createShareButton(
      '/',
      document.getElementById('btn'),
      {
        text: fullQuote,
        hashtags: authorHashTag,
        via: 'itJamesKim'
      }
    );

  });

  // function pickRandomQuote(obj) {
    // // This will put the keys in an array so we can use the index for random assignment.
    // var
    //   keys = Object.keys(obj),
    //   keyNum = keys.length * Math.random() << 0;
    //
    // quoteAuthor.innerHTML = `&nbsp - ${keys[keyNum]}`;
    //
    // return obj[keys[keyNum]];
  // }

  quoteButton.addEventListener('click', function() {
    location.reload();

    getJson(function(out) {
      var
        quoteList = JSON.parse(out),
        rand = randomNum(quoteList),
        authorHashTag = quoteList[rand].name.replace(/\s/g, "");
        fullQuote = tweetFormat(quoteList[rand].quote, authorHashTag);

      quoteField.innerHTML = `${quoteList[rand].quote} - ${quoteList[rand].name}`;
      tweetBtn.innerHTML = "";

      twttr.widgets.createShareButton(
        '/',
        document.getElementById('btn'),
        {
          text: fullQuote,
          hashtags: authorHashTag,
          via: 'itJamesKim'
        }
      );

    });
  });


});
