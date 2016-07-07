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
     
      },

    getAsciiOutput: function() {

    }

};
