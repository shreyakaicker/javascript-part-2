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
        
        for(var x=0; i < height; i++) {
            var tile = new Tile()
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

var tile1 = new Tile("sand")
var tile2 = new Tile("grass")
var tile3 = new Tile("water")

var map1 = new Map(5,10)
console.log(tile1,tile2,tile3)
console.log(map1)
