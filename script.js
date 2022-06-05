
      var rating = document.getElementById("rating-page")
      var thankyou = document.getElementById("thank-you-page")
      var ratedVal=0;
    

      function toggleView(){
      rating.style.display= "none";
      thankyou.style.display="block";
      document.getElementById("selectedRating").innerText="You selected "+ratedVal+" out of 5";
      };

      function getValue(value){
        ratedVal=value;
      };