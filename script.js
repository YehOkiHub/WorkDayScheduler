$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


$(".saveBtn").on("click", function(){

    var text = $(".description").val();
     
    localStorage.setItem("text", text);


    


    var currentTime = moment().hour();
    });


   



















