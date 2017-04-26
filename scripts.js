$(document).ready(function() {
  var
    quoteField = document.getElementById('quote-field'),
    quoteButton = document.getElementById('quote-btn'),
    quoteAuthor = document.getElementById('quote-author'),
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

  quoteButton.addEventListener('click', function() {
    // This is here because the Math.random() function returned the same keys at times.
    while (quoteField.innerHTML === msg) {
      msg = pickRandomQuote(quotes);
    }

    quoteField.innerHTML = msg;
  });

});
