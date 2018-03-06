'use strict';

$(document).ready(function() {
  // Quote box fading effect
  $('#quote-box').hide();
  $('#quote-btn').hide();
  $('.auto-btn-stop').hide();

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
    quoteAuthor = document.getElementById('author-field'),
    quoteButton = document.getElementById('quote-btn'),
    tweetBtn = document.getElementById('btn'),
    urlQuotes = 'https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520',
    // Quote Parsing
    rand,
    authorHashTag,
    fullQuote,
    // Slideshow
    slide = false,
    setSlide;

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

      },
      cache: 'false'
    });
  };

  // Main function that retrieves and loads the content.
  function loadContent(slide) {
    rand = randomQuoteNum(quoteJSON);
    imageNumber = randomImgNum();

    $.ajax({
      url: (backgroundImg + imageNumber),
      error: function(err) {
        // console.log(err.status);
        setTimeout(function() {
          loadContent();
        }, 50);
      },
      success: function() {

        // Quote box fading effect
        $('#quote-box').fadeOut(1100);
        $('#quote-btn').fadeOut(1100);

        $('#image').fadeOut(1000, function() {
          $('#image').attr('src', backgroundImg + imageNumber);
          // Prep Quote string
          authorHashTag = quoteJSON[rand].name.replace(/\s/g, '');
          fullQuote = tweetFormat(quoteJSON[rand].quote, authorHashTag);

        });

        // Set image
        document.getElementById('image').onload = function() {

          // Image resetter
          $('.image-container').stop();
          $('.image-container').css('left', 0);

          $('#quote-box').fadeIn(1100);

          // Quote box fading effect
          if (slide) {
            $('.auto-btn').hide();
            $('#quote-btn').hide();
            $('#btn').hide();
          } else {
            $('#quote-btn').fadeIn(1100);
          }

          // Image moving effect
          $('.image-container').animate({
            left: ('-=' + movePixel),
            easing: 'linear'
          }, 15000);

          $('#image').fadeIn(1000);

          // Quote box content
          quoteField.innerHTML = `${quoteJSON[rand].quote}`;
          quoteAuthor.innerHTML = `- ${quoteJSON[rand].name}`;
          tweetBtn.innerHTML = '';

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

  // AUTO MODE CLICK
  $('.auto-btn').click(function() {
    var setSlide = setInterval(function(){
      loadContent(slide);
    }, 14000);

    slide = true;
    loadContent(slide);

    // Slideshow mode prep
    $('.auto-btn').hide();
    $('.auto-btn-stop').show();
    $('.footer').fadeOut();

    // AUTO MODE STOP
    $('.auto-btn-stop').click(function() {
      clearInterval(setSlide);
      slide = false;

      // Stop slideshow mode prep
      $(this).fadeOut();
      $('.auto-btn').fadeIn();
      $('#quote-btn').fadeIn();
      $('#btn').fadeIn();
      $('.footer').fadeIn();
    });
  });

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
