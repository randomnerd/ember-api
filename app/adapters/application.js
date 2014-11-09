import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/v1',
  host: 'https://rails-api-c9-randomnerd.c9.io'
});
