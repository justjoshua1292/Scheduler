var hourArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"]
var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var currentHour = moment().format('H');
var theTextInput = $("<input>");



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

    newButton.on('click', function() {
        // we want to save the text value of the textarea to your localstorage

        // select the corresponding textarea

        // get the textvalue of the text area

        // Value is 2nd; Key comes 1st

        // use localstorage.setItem to save the text as value, and hour as key
    
    })

    


    var myContainer = $(".container")
    myContainer.append(newDiv)

    newDiv.append(newH4)
    newDiv.append(newTextarea)
    newDiv.append(newButton)

    newButton.append('<i class="fas fa-save"></i>');
    
}