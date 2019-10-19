var sports = ["Soccer", "Bowling", "Tennis", "Golf","Hockey","Football"];

        function displaySportInfo(){

           $("#sports-view").empty();

            var type= $(this).attr("data-name");

        var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + type + "&limit=10";
        console.log(queryURL);

      $.ajax ({
        url: queryURL, 
        method: 'GET'
      }).done(function(response) {

        console.log(response);

        var sportDiv = $("<div class='sporting'>");

        for (var i=0;i<10;i++)
        {
          if (response.data!="")
          {
           
        sportDiv.append("<br><img src='https://media3.giphy.com/media/" + response.data[i].id + "/giphy_s.gif' class='claim'>"); 


        var rating = response.data[i].rating;
          var pOne = $("<p>").text("Rating: " + rating);
          sportDiv.append(pOne);

          $("#sports-view").prepend(sportDiv);
        }}

           $('.claim').on('click',function(){
        var foot = ($(this).attr("src"));

            if (foot.indexOf("giphy_s")>=0)
            {
              foot = foot.replace("giphy_s.gif", "giphy.gif");}

              else {
                  foot = foot.replace("giphy.gif", "giphy_s.gif");
              }
  $(this).attr("src", foot);

});

});
   

    } 



      function renderButtons() {


        $("#buttons-view").empty();

        for (var i = 0; i < sports.length; i++) {

          var a = $("<button>");
          a.addClass("sport");
          a.attr("data-name", sports[i]);
          a.text(sports[i]);
          $("#buttons-view").append(a);
        }
      }

    
      $("#add-sport").on("click", function(event) {
        event.preventDefault();
       
        var sport= $("#sport-input").val().trim();

        sports.push(sport);

      
        renderButtons();
      });

      $(document).on("click", ".sport", displaySportInfo);
      $(document).on("click", "")

      
      renderButtons();