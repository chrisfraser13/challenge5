$(document).ready(function () {
    //causes current day and time to display
    $("#currentDay").text(moment().format("MMMM do YYYY, h:mm:ss a"));
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
    //data for each hour saved to LocalStorage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10")); 
    $("#hour11 .description").val(localStorage.getItem("hour11")); 
    $("#hour12 .description").val(localStorage.getItem("hour12")); 
    $("#hour13 .description").val(localStorage.getItem("hour13")); 
    $("#hour14 .description").val(localStorage.getItem("hour14")); 
    $("#hour15 .description").val(localStorage.getItem("hour15")); 
    $("#hour16 .description").val(localStorage.getItem("hour16")); 
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));    

    //function that tracks the hour
    function hourTracker() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else  if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
        })
    }
    hourTracker();
})