// Constructor In JS

class RailwayForm {
    constructor(givename, trainno, address) {
        console.log(givename + " " + trainno + " " + address )
        this.givename = givename
        this.trainno = trainno
        this.address = address
    }

    submit() {
        alert(this.givename + ": Your Form is submitted for train number:" + " " + this.trainno + " " + "Your Address is:" + this.address)
    }
    cancel(){
        alert(this.name + ": Your Form is cancelled for train number:" + this.trainno)
        this.trainno = 0
    }
}

let ArslanForm = new RailwayForm("Arslan", 123, "12th road, beds uni")
ArslanForm.submit()