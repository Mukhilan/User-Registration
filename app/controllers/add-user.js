import Ember from "ember";

export default Ember.Controller.extend({

  isNameEmpty: false,

  actions:{
    saveUserDetails: function() {
      var user = this.get('content'),
        self = this;
      if (this.validateUserDetails()) {
        user.set('isActive',true);
        user.save().then(function () {
          self.transitionToRoute('user', user.get('id')).then(function () {
            Bootstrap.NM.push("user successfully added","success");
          });
        });
      }
    },

    cancelUserDetails: function() {
      this.get('content').rollback();
      this.transitionToRoute('users');
    }
  },

  validateUserDetails: function() {
    if(this.get('content.name') === undefined || this.get('content.name').length === 0){
      this.set('isNameEmpty',true);
      return false;
    } else {
      return true;
    }
  }
});
