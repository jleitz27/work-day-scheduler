// Show today's date
$(document).ready(function(){
    //current time
    $("#currentDay").text(moment().format("dddd, MMM Do YYYY "));

    // save button listener for user input
    $(".saveBtn").on("click", function(){

        // console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save in localStorage
        localStorage.setItem(time, text);
    });
    
});

//track the time

function timeTracker (){
    // get current time
    var currentTime = moment().hour();
    
    //loop for schedule blocks
    $(".time-block").each(function(){
        var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

        //check for time and add classes for background
        if (hourBlock < currentTime){
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (hourBlock === currentTime){
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

//data from Localstorage on page load 
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeTracker();