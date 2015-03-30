import Ember from "ember";

export default Ember.ObjectController.extend({
  needs: "user",

  defaultImage:"http://tpstatic.com/img/profile/default_user.jpg",

  isNameEmpty: function(){
    var model = this.get('model');
    return (model.get('name').length) === 0;
  }.property('model.name'),

  actions:{
    done: function(){
      if(!this.get('isNameEmpty')){
        var user = this.get('model'),
            userController = this.get("controllers.user");
        userController.set('isEditing',false);
        if(user.get("isDirty")){
          user.save();
          Bootstrap.NM.push("profile successfully updated","success");
        }
      }
    }
  }
});

