import Ember from "ember";

export default Ember.ObjectController.extend({
  isEditing: false,

  needs: "user-login",

  defaultImage:"http://tpstatic.com/img/profile/default_user.jpg",

  isUserDeactivated: function(){
    var user = this.get('model');
    return !(user.get('isActive'));
  }.property('isActive'),

  actions: {
    editUser: function () {
      var isAdminLogin = this.get('controllers.user-login.isAdminLogin');
      if (isAdminLogin) {
        this.set("isEditing", true);
      } else {
        Bootstrap.NM.push("you are not authorized to edit user profile","info");
      }
    },

    deActivateUser: function(user) {
      user.set('isActive',false);
      this.transitionToRoute('users');
      var deactivateMsg = "User "+ user.get('name') + " deactivated";
      Bootstrap.NM.push(deactivateMsg,"success");
    },

    removeUser:function(){
      var isAdminLogin = this.get("controllers.user-login.isAdminLogin");
      if(isAdminLogin) {
        Bootstrap.ModalManager.confirm(
          this,
          "Confirm Delete",
          "This Action will delete the user. Are you sure you want to continue?",
          "Confirm",
          "okAction",
          null,
          "cancel",
          "cancelAction",
          null
        );
      } else {
        Bootstrap.NM.push("you are not authorized to delete the user","info");
      }
    },

    okAction: function() {
      var user = this.get('model');
      user.deleteRecord();
      Bootstrap.NM.push("user successfully deleted","success");
    },

    cancelAction: function(){

    }
  }
});

