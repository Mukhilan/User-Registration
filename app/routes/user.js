import Ember from "ember";

export default Ember.Route.extend({
  model: function(param){
    return this.store.find('user',param.user_id).catch(function(){
      Bootstrap.NM.push("Page you are looking for might deleted by the admin","danger");
    });
  }
});
