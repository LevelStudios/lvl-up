import keypress from 'dmauro/Keypress';

export class Litmus{

    constructor(){
        this.isEditing     = false;
        this.firstname  = "John Jacob";
        this.lastname   = "JingleHiemerSchmidt";
        this.jobTitle   = "Developer of Things";

        var listener    = new keypress.Listener();
        var that        = this;
        listener.sequence_combo("up up down down left right left right b a space", function() {
            that.firstname  = "Detective John";
            that.lastname   =  "Kimble";
            that.jobTitle   = "Cop / Kindergarten Teacher"
        }, true);
    }

    setActiveEdit(){
        this.isEditing = !this.isEditing;
    }
}
