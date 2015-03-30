import Ember from "ember";

export default Ember.ObjectController.extend(Ember.Validations.Mixin, {
  needs: "user",

  defaultImage:"http://tpstatic.com/img/profile/default_user.jpg",

  actions:{
    done: function(){
      var user = this.get('model'),
          userController = this.get("controllers.user");
      if(user.get("isDirty")){
        this.validate().then(function(){
          user.save().then(function(){
            userController.set('isEditing',false);
            Bootstrap.NM.push("profile successfully updated","success");
          }).catch(function(){
            Bootstrap.NM.push("Something happend wrong. try reloading","danger");
          });
        }).catch(function(response){
          var actualError;
          Ember.keys(response).forEach(function(error){
            if(response.get(error)){
              if(response.get(error).length != 0){
                actualError = response.get(error).objectAt(0);
              }else {
                actualError = response.get(error);
              }
            }
          });
          Bootstrap.NM.push(actualError,"danger");
        });
      } else{
        userController.set('isEditing',false);
      }
    }
  },

  validations: {
    'name': {
      presence: {
        checkEmptySpaces: true,
        message: "Please enter name"
      },

      length: {
        maximum: 20,
        messages: {
          tooLong: "Name should not be more than 20 characters"
        }
      },

      format: {
        'with': /^[A-Za-z0-9_:,;().\s&amp;!]*$/,
        message: "Name should not contain special characters"
      }
    },

    'age': {
      format: {
        'with': /^[0-9]{1,2}$/,
        allowBlank: true,
        message: "Enter a valid age"
      }
    },

    'phoneNo': {
      format: {
        'with': /^\d{10}$/,
        allowBlank: true,
        message: "Enter a valid phone No"
      }
    },

    'githubURL': {
      format: {
        'with': /^(https?:\/\/)?(www\.)?(github.com\/)([a-zA-Z0-9_]{1,15})$/,
        allowBlank: true,
        message: "Enter a valid github Url"
      }
    }
  }
});

