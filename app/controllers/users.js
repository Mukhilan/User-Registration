import Ember from "ember";

export default Ember.ArrayController.extend({
  needs: "user-login",

  isNoUsersToDisplay: function(){
    return !this.get('content.length');
  }.property('content.length'),

  actions: {
    addUser: function() {
      this.transitionToRoute('addUser');
    },

    activateUser: function(user) {
      var activateMsg = "user " + user.get("name") + " activated";
      user.set('isActive',true);
      this.transitionToRoute('user',user.get('id'));
      Bootstrap.NM.push(activateMsg,"success");
    }
  }
});
