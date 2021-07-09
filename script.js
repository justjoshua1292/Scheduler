var hourArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"]
var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var currentHour = moment().format('H');


for (let index = 0; index < 10; index++) {
    var newDiv= $("<div>")
    newDiv.addClass("time-block row")


    var newH4= $("<h4>")
    newH4.addClass("hour col-md-1") 
    newH4.text(hourArray[index])


    var newTextarea= $("<textarea>")
    newTextarea.addClass("description col-md-10")

    if(currentHour == militaryHours[index]) {
        newTextarea.addClass('present')
    } else if (currentHour > militaryHours[index]) {
        newTextarea.addClass('past')
    } else {
        newTextarea.addClass('future')
    }


    var newButton= $("<button>")
    newButton.addClass("saveBtn col-md-1")

    var myContainer = $(".container")
    myContainer.append(newDiv)

    newDiv.append(newH4)
    newDiv.append(newTextarea)
    newDiv.append(newButton)

    newButton.append('<i class="fas fa-save"></i>');
 
}


$(".saveBtn").on('click', function () {
    var value = ($(this).siblings('.description').val());
    var time = ($(this).siblings('.hour').text());

    localStorage.setItem(time, value); 


 function loadHistory (){
     var myStuff = localStorage.getItem("someKey") //or whatever key you saved stuff under
     console.log(myStuff)
   
     //put myStuff on the page
   }
   loadHistory()



})