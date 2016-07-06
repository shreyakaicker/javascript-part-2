  //## Address book
  
  
  function Person(firstName,lastName) {
      
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
    
  }
  
  function Email(address,type) {
      this.address = address;
      
       if (type === "work") {this.type =  "work" ;} 
          else if (type === "home") {this.type = "home" ;}
          else  {this.type = "other" ;}
          
         
          
  }
  
  Person.prototype = {
      addEmail: function(address,type) {
        
        this.emails.push(new Email(address, type))
        
        }
      }
      
      var shreya = new Person ("Shreya","Kaicker")
      var ziad = new Person("Ziad","Saab")
     
      console.log(shreya,ziad);
      shreya.addEmail("shreyakaicker@gmail.com","work")
      console.log(shreya);
     

