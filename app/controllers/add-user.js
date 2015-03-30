import Ember from "ember";

export default Ember.ObjectController.extend(Ember.Validations.Mixin ,{
  actions:{
    saveUserDetails: function() {
      var user = this.get('content'),
          self = this;
      this.validate().then(function(){
        user.set('isActive',true);
        user.save().then(function () {
          self.transitionToRoute('user', user.get('id')).then(function () {
            Bootstrap.NM.push("user successfully added","success");
          });
        });
      }).catch(function(response){
        var errorContent = response.get('content'),
            actualError;
        Ember.keys(errorContent).forEach(function(error){
          if(errorContent.get(error)){
            if(errorContent.get(error).length != 0){
              actualError = errorContent.get(error).objectAt(0);
            }else {
              actualError = errorContent.get(error);
            }
          }
        });
        Bootstrap.NM.push(actualError,"danger");
      });
    },

    cancelUserDetails: function() {
      this.get('content').rollback();
      this.transitionToRoute('users');
    }
  },

  validations: {
    'content.name': {
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

    'content.password': {
      presence: {
        checkEmptySpaces: true,
        message: "Please enter password"
      },

      length: {
        maximum: 20,
        messages: {
          tooLong: "Name should not be more than 20 characters"
        }
      }
    },

    'content.age': {
      format: {
        'with': /^[0-9]{1,2}$/,
        allowBlank: true,
        message: "Enter a valid age"
      }
    },

    'content.phoneNo': {
      format: {
        'with': /^\d{10}$/,
        allowBlank: true,
        message: "Enter a valid phone No"
      }
    },

    'content.githubURL': {
      format: {
        'with': /^(https?:\/\/)?(www\.)?(github.com\/)([a-zA-Z0-9_]{1,15})$/,
        allowBlank: true,
        message: "Enter a valid github Url"
      }
    }
  }
});
