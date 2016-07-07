function Tile(type) {
    
    this.type = type;
    
   
}

Tile.prototype = {
    isWalkable: function() {
         if( this.type === "sand") { return true;}
         else if( this.type === "grass") { return true ; }
         else { return false ; }
    }
    
}


function randomType() {
    var randomInput = Math.random() ;
    if (randomInput < 0.33) {return 'grass';}
     else if (randomInput < 0.67) {return 'sand';}
     else  {return 'water';}
    
}

function Map(width,height) {
    
    this.width = width;
    this.height = height;
    
    var array1 = [];
    for(var i=0; i < width; i++) {
        var array2 = [];
        
        for(var x=0; x < height; x++) {
            var tile = new Tile(randomType())
            array2.push(tile)
        }
        array1.push(array2) ;
    }

   this.tiles = array1 ;
    
   
}



Map.prototype = {

    getWalkableOutput: function() {
     
     if (this.type === "sand") {return 'O';}
     else if (this.type === "grass") {return 'O';}
     else  {return 'X';}
    },
    getAsciiOutput: function() {
     if (this.type === "sand") {return '*';}
     else if (this.type === "grass") {return ':';}
     else  {return '~';}
    }

};
var newMap = new Map(4, 5);

console.log(newMap)
console.log()
