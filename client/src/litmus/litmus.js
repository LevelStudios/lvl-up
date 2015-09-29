export class Litmus{

    constructor(){
        this.isEditing    = false;
        this.firstname  = "John Jacob";
        this.lastname   = "JingleHiemerSchmidt";
        this.jobtitle   = "Developer of Things";
    }

    setActiveEdit(){
        this.isEditing = !this.isEditing;
    }
}
