var newDiv= $("<div>")
newDiv.addClass("time-block row")


var newH4= $("<h4>")
newH4.addClass("hour col-md-1") 
newH4.text("9am")


var newTextarea= $("<textarea>")
newTextarea.addClass("description col-md-10")


var newButton= $("<button>")
newButton.addClass("saveBtn col-md-1")


var myContainer = $(".container")
myContainer.append(newDiv)

newDiv.append(newH4)
newDiv.append(newTextarea)
newDiv.append(newButton)