$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
var currentTime = moment().hour();
var timeBlocks = $(".time-block");


$(".saveBtn").on("click", function(){

    var text = $(".description").val();
     
    localStorage.setItem("text", text);
    
    });


timeBlocks.each(function(i) {
    // console.log(this);
    let parsedTime = parseInt($(this).attr('id').split('hour')[1]);
    console.log(parsedTime)
    console.log(currentTime)

        if (parsedTime < currentTime ) {
          $(".description").css("background-color", "red");

        }else if (parsedTime === currentTime) {
            $(".description").css("background-color", "grey");

        }else if (parsedTime > currentTime){
            $(".description").css("background-color", "green");
        }
    });


   



















