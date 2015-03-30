import Ember from "ember";

export default Ember.Controller.extend({
  isAdminLogin: false,

  actions:{
    validateLoginDetails: function(){
      var name = this.get('name'),
          password = this.get('password'),
          usersList = this.get('content'),
          isValidUser = false,
          self = this;

      usersList.forEach(function(user){
        if(!isValidUser){
          if(user.get('name') === name && user.get('password') === password) {
            isValidUser = true;
            if(user.get('isAdmin')){
              self.set('isAdminLogin',true);
            }
          }
        }
      });

      if(isValidUser){
        this.transitionToRoute('users');
      } else {
        Bootstrap.NM.push("Enter a valid user name or password","info");
      }
    }
  }
});
