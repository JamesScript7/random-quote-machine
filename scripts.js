$(document).ready(function() {
  $('#quote-box').hide();

  // Image related
  var backgroundImg,
      movePixel = 60;
  // if mobile { load 1024x768 image else 2048x1536 }
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    movePixel = 200;
    backgroundImg = 'https://picsum.photos/1024/768/?image=';
  } else {
    backgroundImg = 'https://picsum.photos/2048/1536/?image=';
  }

  var
    imageNumber = randomImgNum(),
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

  // Gets JSON once and stores it in quoteJSON
  getJSON();

  // Random Number Generators
  function randomQuoteNum(x) {
    return (x.length * Math.random() << 0);
  };
  function randomImgNum() {
    return Math.round(Math.random() * 1084);
  }

  // Tweet formatter
  function tweetFormat(quote, author) {
    var res = quote;
    var lenWithoutAuthor = 119 - author.length;

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
        }, 100);
      },
      success: function(data) {
        quoteJSON = JSON.parse(data);
      },
      cache: 'false'
    });
  };

  // Main function that retrieves and loads the content.
  function loadContent() {
    imageNumber = randomImgNum();
    rand = randomQuoteNum(quoteJSON);

    $('#image').fadeOut(1000, function() {
      $.ajax({
        url: (backgroundImg + imageNumber),
        error: function(err) {
          // console.log(err.status);
          setTimeout(function() {
            loadContent();
          }, 100);
        },
        success: function() {
          // Prep Quote string
          authorHashTag = quoteJSON[rand].name.replace(/\s/g, '');
          fullQuote = tweetFormat(quoteJSON[rand].quote, authorHashTag);

          // Set image
          $('#image').attr('src', backgroundImg + imageNumber);

          document.getElementById('image').onload = function() {

            // Image resetter
            $('.image-container').stop();
            $('.image-container').css('left', 0);

            // Image moving effect
            $('.image-container').animate({
              left: ('-=' + movePixel),
              easing: 'easeInOutSine'
            }, 9000);

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
    });
  }

  // Initializes image and quote
  loadContent();

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
