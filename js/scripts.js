/*
LEGACY SCRIPT
*/

'use strict';
$(document).ready(function() {
  // Hide quote box initially, so it can fade in with background image.
  $('#quote-box').hide();
  $('#quote-btn').hide();
  $('.auto-btn-stop').hide();

  // Image related
  var backgroundImg,
      movePixel = 150,
      imageNumber = randomImgNum();
  // if mobile device, load 1024x768 image or else 2048x1536
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    movePixel = 200;
    backgroundImg = 'https://picsum.photos/1024/768/?image=';
  } else {
    backgroundImg = 'https://picsum.photos/2048/1536/?image=';
  }

  // Quote related
  var
    quoteJSON = {},
    quoteField = document.getElementById('quote-field'),
    quoteAuthor = document.getElementById('author-field'),
    tweetBtn = document.getElementById('btn'),
    urlQuotes = '', // 'https://gist.githubusercontent.com/JamesScript7/9071c8419edaca2c7ced77c18c4236f1/raw/ef1161709601eb71db6fa7da99c657a3f4bd2fda/Quotes.json',
    // Quote Parsing
    rand,
    authorHashTag,
    fullQuote,
    // Slideshow
    slide = false,
    // setSlide;

  // Random Number Generators :)
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
        // quoteJSON = JSON.parse(data);
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
        setTimeout(function() {
          loadContent(slide);
          // console.log(err.status);
        }, 50);
      },
      success: function() {
        // Quote box fading effect
        $('#quote-box').fadeOut(1100);
        $('#quote-btn').fadeOut(1100);

        $('#image').fadeOut(1000, function() {
          $('#image').attr('src', backgroundImg + imageNumber);
          // Prep Quote string
          // authorHashTag = quoteJSON[rand].name.replace(/\s/g, '');
          // fullQuote = tweetFormat(quoteJSON[rand].quote, authorHashTag);
        });

        // When the image has finished loading!
        document.getElementById('image').onload = function() {
          // Image resetter
          $('.image-container').stop();
          $('.image-container').css('left', 0);

          // Quote box fading effect
          $('#quote-box').fadeIn(1100);
          if (slide) {
            $('.auto-btn').hide();
            $('#quote-btn').hide();
            // $('#btn').hide();
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
          if (twttr) {
            twttr.widgets.createShareButton(
              '/',
              document.getElementById('btn'),
              {
                text: fullQuote,
                hashtags: authorHashTag,
                via: 'itJamesKim'
              }
            ); // End of twitter widget.
          }
        } // End of image on load function.
      }
    }); // End of background image ajax.
  } // End of loadContent function.

  // Initializes image and quote
  loadContent();
  // Gets JSON once and stores it in quoteJSON
  getJSON();
  // AUTO MODE CLICK
  $('.auto-btn').click(function() {
    var setSlide = setInterval(function(){
      loadContent(slide);
    }, 15000);

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
      $('.footer').fadeIn();
    });
  });

  // Image and quote refreshes on button click
  $('#quote-btn').click(function() {
    loadContent();
  });
});
