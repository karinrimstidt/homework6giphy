console.log("connected");


     // This is our API key
    var APIKey = "dc6zaTOxFJmzC";
    
    
      // Initial array of musicians
      var musicians = ["Placebo", "Muse", "All-American Rejects", "Beethoven"];


      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayMusicianInfo() {

        var musician = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + musician + "&api_key=" + APIKey;

        // Creates AJAX call for the specific musician button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

      
        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);


        });

      }

      // Function for displaying musician data
      function renderButtons() {

        // Deletes the musicians prior to adding new musicians
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Loops through the array of musicians
        for (var i = 0; i < musicians.length; i++) {

          // Then dynamicaly generates buttons for each musician in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of musician to our button
          a.addClass("musician");
          // Added a data-attribute
          a.attr("data-name", musicians[i]);
          // Provided the initial button text
          a.text(musicians[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where the add musician button is clicked
      $("#add-musician").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var musician = $("#musicianAdd").val().trim();

        // The musician from the textbox is then added to our array
        musicians.push(musician);

        // Calling renderButtons which handles the processing of our musician array
        renderButtons();

      });

      // Adding click event listeners to all elements with a class of "musician"
      $(document).on("click", ".musician", displayMusicianInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();


