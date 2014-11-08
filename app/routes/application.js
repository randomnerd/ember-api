import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
 
export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    error: function (error, transition) {
      console.log(error);
      return this.transitionTo('index');
    }
  }
});
