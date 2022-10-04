$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
var currentTime = moment().hour();
var timeBlocks = $(".time-block");


$(".saveBtn").on("click", function(){

    var text = $(".description").val();
     
    localStorage.setItem("text", text);
    
    });


$(".time-block").each(function(i) {
    console.log(this);
    let parsedTime = parseInt(this.id)
    // console.log(parsedTime)
        if (parsedTime < currentTime ) {
          $(".description").css("background-color", "red");
        } 
        else if (parsedTime === currentTime) {
            $(".description").css("background-color", "grey");

        }else {
            $(".description").css("background-color", "green");
        }
    });


   



















