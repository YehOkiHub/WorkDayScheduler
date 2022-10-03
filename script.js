$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
var currentTime = moment().hour();
var timeBlocks = $(".time-block");


$(".saveBtn").on("click", function(){

    var text = $(".description").val();
     
    localStorage.setItem("text", text);
    
    });


$(".time-block").each(function(i) {
        if (this < currentTime ) {
          $(".description").css("background-color", "red");
        } 
        else if (this === currentTime) {
            $(".description").css("background-color", "grey");

        }else {
            $(".description").css("background-color", "green");
        }
    });


   



















