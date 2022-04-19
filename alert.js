const AlertEmitter = require("events")

class Alerter extends AlertEmitter {
    Alertee(args){
            console.log("welcome:", args)
        this.emit("alert me :", {name: "chrysspoetry", time: " lunch time"})
        
    };

    

}



module.exports = Alerter;