function StringBuffer(){ 
	this.data = [];
 
	this.append = function(){ 
	   this.data.push(arguments[0]); 
	   return this; 
	};

	this.deleteLastChar = function(){
	    this.data.pop();
	    return this;
	};

	this.toString = function(){ 
	   return this.data.join(""); 
	};
}