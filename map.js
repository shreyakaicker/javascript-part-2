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