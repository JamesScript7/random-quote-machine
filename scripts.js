$(document).ready(function() {
  var
    imgContainer = document.getElementById('container'),
    quoteField = document.getElementById('quote-field'),
    quoteAuthor = document.getElementById('quote-author'),
    quoteButton = document.getElementById('quote-btn'),
    quotes = {
    "Maya": "My mission in life is not merely to survive...",
    "Dita": "Some days are just bad days, that\'s all. You have to experience...",
    "Allen": "Your attitude is like a box of crayons that color your world...",
    "James": "You can only YOLO once...",
    "Jewel": "I love furries and ice cream!",
    "Jean": "I\'m proud to be a part of vape nation."
  };

  function pickRandomQuote(obj) {
    // This will put the keys in an array so we can use the index for random assignment.
    var
      keys = Object.keys(obj),
      keyNum = keys.length * Math.random() << 0;

    quoteAuthor.innerHTML = `&nbsp - ${keys[keyNum]}`;

    return obj[keys[keyNum]];
  }

  var msg = pickRandomQuote(quotes);
  quoteField.innerHTML = msg;
  // imgContainer.style.backgroundImage = "url('https://unsplash.it/1024/768/?random')";

  quoteButton.addEventListener('click', function() {
    $.ajax({
      url: 'https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520',
      success: function(data) {
        var quoteList = JSON.parse(data);
        var randomNum = test.length * Math.random() << 0;
        console.log(randomNum);




      },
      cache: false
    });

    // // url doesn't seem to be refreshing on their end.
    // $.ajax({
    //   url: 'https://unsplash.it/1024/768/?random',
    //   success: function() {
    //     imgContainer.style.backgroundImage = "url('https://unsplash.it/1024/768/?random')";
    //   },
    //   cache: false
    // });

    // This is here because the Math.random() function returned the same keys at times.
    while (quoteField.innerHTML === msg) {
      msg = pickRandomQuote(quotes);
    }
    quoteField.innerHTML = msg;
  });

});
