var hourArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"]


for (let index = 0; index < 10; index++) {
    var newDiv= $("<div>")
    newDiv.addClass("time-block row")


    var newH4= $("<h4>")
    newH4.addClass("hour col-md-1") 
    newH4.text(hourArray[index])


    var newTextarea= $("<textarea>")
    newTextarea.addClass("description col-md-10")


    var newButton= $("<button>")
    newButton.addClass("saveBtn col-md-1")


    var myContainer = $(".container")
    myContainer.append(newDiv)

    newDiv.append(newH4)
    newDiv.append(newTextarea)
    newDiv.append(newButton)
    
}