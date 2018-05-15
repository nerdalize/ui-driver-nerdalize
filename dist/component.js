/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/node-driver/driver-nerdalize/component', ['exports', 'ember', 'shared/components/node-driver/driver-nerdalize/component'], function (exports, _ember, _component) {
  exports['default'] = _component['default'];
});

define('shared/components/node-driver/driver-nerdalize/component', ['exports', 'ember', 'shared/mixins/node-driver', 'shared/components/node-driver/driver-nerdalize/template'], function (exports, _ember, _uiMixinsDriver, _template) {
/* ^--- And here */

  // You can put ember object here
  var computed = Ember.computed;
  var observer = Ember.observer;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;

/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    layout: _template.default,
    driverName: 'nerdalize',
    config: alias('model.nerdalizeConfig'),
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = get(this, 'globalStore').createRecord({
        type: 'nerdalizeConfig',
        /*'apiUrl': userData['cloudstack_service_url'],
        'expunge': True,
        'httpGetOnly': False,
        'network': '',
        'publicIp': '',
        'serviceOffering': 'Kubernetes Host Instance #1',
        'sshUser': 'nerdalize',
        'timeout': '300',
        'usePortForward': False,
        'usePrivateAddress': True,
        'zone': 'nl-zh1',
        'type': 'nerdalizeConfig',*/
      });

      set(this, 'model.nerdalizeConfig', config);
    },


    /*memorySize: computed('config.cpuCount', function () {
      let config = this.get('config')
      return Math.round(10 * config.get('cpuCount') * 1.6) / 10
    }),

    diskSize: computed('config.cpuCount', function () {
      let config = this.get('config')
      return Math.round(10 * config.get('cpuCount') * 15.6) / 10
    }),

    isMasterObserver: observer('config.isMaster', function () {
      let config = this.get('config')
      if (config.get('isMaster') === true) {
        config.set('cpuCount', 2)
      }
    }),

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = get(this, 'errors')||[];
      if ( !get(this, 'model.name') ) {
        errors.push('Name is required');
      }

      // Add more specific errors

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( get(errors, 'length') )
      {
        set(this, 'errors', errors);
        return false;
      }
      else
      {
        set(this, 'errors', null);
        return true;
      }
    },*/

    // Any computed properties or custom logic can go here
  });
});
;
define("shared/components/node-driver/driver-nerdalize/template",["exports"],function(exports){

exports["default"] = Ember.HTMLBars.template({"id":"Y8fVrR26","block":"{\"symbols\":[],\"statements\":[[6,\"section\"],[9,\"class\",\"horizontal-form\"],[7],[0,\"\\n  \"],[6,\"h4\"],[7],[0,\"Please use one of the exisiting node templates\"],[8],[0,\"\\n\\n  \"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"cancel\"]],[7],[0,\"Close\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}","meta":{}});;

});
