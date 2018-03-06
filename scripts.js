'use strict';

$(document).ready(function() {
  $('#quote-box').hide();

  // Image related
  var backgroundImg,
      movePixel = 150,
      imageNumber = randomImgNum();
  // if mobile { load 1024x768 image else 2048x1536 }
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    movePixel = 200;
    backgroundImg = 'https://picsum.photos/1024/768/?image=';
  } else {
    backgroundImg = 'https://picsum.photos/2048/1536/?image=';
  }

  var
    // Quote related
    quoteJSON = {},
    quoteField = document.getElementById('quote-field'),
    quoteButton = document.getElementById('quote-btn'),
    tweetBtn = document.getElementById('btn'),
    urlQuotes = 'https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520',
    // Quote Parsing
    rand,
    authorHashTag,
    fullQuote;

  // Random Number Generators
  function randomQuoteNum(x) {
    return (x.length * Math.random() << 0);
  }
  function randomImgNum() {
    return Math.round(Math.random() * 1084);
  }

  // Tweet formatter
  function tweetFormat(quote, author) {
    var res = quote,
        lenWithoutAuthor = 119 - author.length;

    if (quote.length > lenWithoutAuthor) {
      res = quote.substring(0, lenWithoutAuthor) + '...';
    } else {
      res = quote;
    }
    return res;
  }

  // Quote JSON function
  function getJSON() {
    $.ajax({
      url: urlQuotes,
      error: function() {
        setTimeout(function(){
          getJSON();
        }, 50);
      },
      success: function(data) {
        quoteJSON = JSON.parse(data);
        rand = randomQuoteNum(quoteJSON);

        // Prep Quote string
        authorHashTag = quoteJSON[rand].name.replace(/\s/g, '');
        fullQuote = tweetFormat(quoteJSON[rand].quote, authorHashTag);
      },
      cache: 'false'
    });
  };

  // Main function that retrieves and loads the content.
  function loadContent() {
    rand = randomQuoteNum(quoteJSON);
    imageNumber = randomImgNum();

    $('#image').fadeOut(1000, function() {
      $('#image').attr('src', backgroundImg + imageNumber);
    });

    $.ajax({
      url: (backgroundImg + imageNumber),
      error: function(err) {
        // console.log(err.status);
        setTimeout(function() {
          loadContent();
        }, 50);
      },
      success: function() {

        // Set image
        document.getElementById('image').onload = function() {

          // Image resetter
          $('.image-container').stop();
          $('.image-container').css('left', 0);

          // Image moving effect
          $('.image-container').animate({
            left: ('-=' + movePixel),
            easing: 'linear'
          }, 15000);

          $('#quote-box').show();
          $('#image').fadeIn(1000);

          // Quote box content
          quoteField.innerHTML = `${quoteJSON[rand].quote} - ${quoteJSON[rand].name}`;
          tweetBtn.innerHTML = '';

          $('#quote-field').hide();
          $('#quote-field').fadeIn(1100);

          twttr.widgets.createShareButton(
            '/',
            document.getElementById('btn'),
            {
              text: fullQuote,
              hashtags: authorHashTag,
              via: 'itJamesKim'
            }
          );

        }
      }
    });
  }

  // Initializes image and quote
  loadContent();

  // Gets JSON once and stores it in quoteJSON
  getJSON();

  // Image and quote refreshes on button click
  $('#quote-btn').click(function() {
    loadContent();
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
});
