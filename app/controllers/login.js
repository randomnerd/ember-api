import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import EmberValidations from 'ember-validations';
 
export default Ember.Controller.extend(LoginControllerMixin,
                                       EmberValidations.Mixin,
{
  authenticator: 'simple-auth-authenticator:oauth2-password-grant',
  validations: {
    identification: { presence: true },
    password: { presence: true }
  }
});
