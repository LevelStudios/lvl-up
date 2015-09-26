import keypress from 'dmauro/Keypress';

export class Litmus{

    constructor(){
        var listener = new keypress.Listener()
        listener.sequence_combo("up up down down left right left right b a space", function() {
            console.log('Level It Up Compadre')
        }, true);
    }

}
