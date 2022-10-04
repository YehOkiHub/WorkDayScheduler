$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
var currentTime = moment().hour();
var timeBlocks = $(".time-block");


$(".saveBtn").on("click", function(){
    
    var text = $(this).siblings(".description").val();
     
    localStorage.setItem("text", text);
    
    });


timeBlocks.each(function(i) {
    let parsedTime = parseInt($(this).attr('id').split('hour')[1]);
     

        if (parsedTime < currentTime ) {
          $(this).css("background-color", "red");

        }else if (parsedTime === currentTime) {
            $(this).css("background-color", "grey");

        }else if (parsedTime > currentTime){
            $(this).css("background-color", "green");
        }
    });

   

















