$(document).ready(function() {
  var quoteField = document.getElementById('quote-field');
  var quoteButton = document.getElementById('quote-btn');
  var quotes = {
    "Maya": "My mission in life is not merely to survive...",
    "Dita": "Some days are just bad days, that\'s all. You have to experience...",
    "Allen": "Your attitude is like a box of crayons that color your world..."
  };
  function pickRandomQuote(obj) {
    var keys = Object.keys(obj)
    return obj[keys[keys.length * Math.random() << 0]];
  }

  quoteButton.addEventListener('click', function() {
    quoteField.innerHTML = pickRandomQuote(quotes);
  });


});
