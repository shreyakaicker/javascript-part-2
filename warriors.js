//## Warriors!


function Warriors(name,gender) {
    
    this.name = name;
    this.gender = gender
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor(Math.random()*100);
   
}

Warriors.prototype = {

    fight: function() {

        console.log(this.name + " rushes in the arena with their " + this.weapon);

    },

    faceoff: function(opponent) {
         if( this.power > opponent.power) {
             console.log("after an epic fight, " + this.name + " won !!");
         }
        else {
        console.log("after an epic fight, " + opponent.name + " won !!");
        }

    }

};

var dave = new Warriors("David","M");

var gol = new Warriors("Goliath","F");

console.log(dave, gol);

dave.fight();

dave.faceoff(gol);
 


