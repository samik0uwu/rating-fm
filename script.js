
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
        var myElements = document.getElementsByClassName("numbers-btn-selected"); 
        console.log("there");
        for(var index = 0; index < myElements.length; index++){
          console.log("almost there");
          myElements[index].className="numbers-btn";
          console.log("here");
        }
        document.getElementById(value).className="numbers-btn-selected";
      };