import Ember from "ember";

export default Ember.Route.extend({

  model: function() {
  return this.store.find('user').catch(function () {
    Bootstrap.NM.push("Sorry something went wrong","danger");
    });
  },

  setupController: function(controller,model) {
    controller.set('content', model);
  }
});
