//BUDGET CONTROLLER
var budgetController = (function() {
    
   //some code
        
    
    
})();

//UI CONTROLLER
var UIController = (function() {
    
    var DOMstring = {
        inpuyType: '.add__type',
        inputDescription: '.add__description',
        inputValues: '.add__value',
        inputBtn: '.add__btn'
        
    };
    //some code
    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstring.inpuyType).value, //will be either inc or exp
                description: document.querySelector(DOMstring.inputDescription).value,
                value: document.querySelector(DOMstring.inputValues).value
            };
        },
        getDOMstrings: function() {
            return DOMstring;
        }
        
    };
    
})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UIctrl) {
    
   
    
    var setupEventListeners = function() {
         
        var DOM = UIctrl.getDOMstrings();
     document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which ===13)
            {
                ctrlAddItem();
            }
    }); 
        
    };
 
    
    var ctrlAddItem = function() { 
        
         //get the field input data
        var input = UIctrl.getinput();
        console.log(input);
        
        //add the item into the budget controller
        
        //add the item to the UI
        
        //Calculate the budget
        
        //display the budget on the UI
        
        console.log('Its work');
    }
   
  return {
      init: function() {
          console.log('application has started');
          setupEventListeners();
      }
  };    


})(budgetController, UIController);

controller.init();