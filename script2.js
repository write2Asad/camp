// Class and Objects

class RailwayForm {
    submit() {
        alert(this.name + ": Your form is Submitted and train number is:" + this.trainnumber)
    }
    cancel() {
        alert(this.name + ": Your form is cancelled and train number is:" + this.trainnumber)
    }
    fill(givenname, trainnumber) {
        this.name = givenname
        this.trainnumber = trainnumber
    }
}

//Create a Railway form for Arslan
let arslanForm = new RailwayForm()
//Fill the form with details
arslanForm.fill('Arslan', 1234)

//Create a Railway form for Arslan
let ghufarForm = new RailwayForm()
//Fill the form with details
ghufarForm.fill('Ghufar', 789)

arslanForm.submit()
ghufarForm.submit()
arslanForm.cancel()