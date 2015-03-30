import Ember from "ember";

export default Ember.Controller.extend({
  isAdminLogin: false,

  actions:{
    validateLoginDetails: function(){
      var name = this.get('name'),
          password = this.get('password'),
          usersList = this.get('content'),
          user= usersList.findBy('name',name);

      if(user) {
        if(user.get('password') == password) {
          if(user.get('isAdmin')){
            this.set('isAdminLogin',true);
            this.transitionToRoute('users');
          } else {
            this.set('isAdminLogin',false);
            this.transitionToRoute('users');
          }
        } else {
          Bootstrap.NM.push("password mismatch","info");
        }
      } else {
        Bootstrap.NM.push("Enter a valid user name","info");
      }
    }
  }
});
