import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import ENV from 'amber-alert/config/environment';

export default EmberUploader.FileField.extend({
  configureWatson: Ember.inject.service(),
  signingUrl: '',
  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: `${ENV.APP.NodeRed.URL}/report`
    });

    if (!Ember.isEmpty(files)) {
      // Send a sign request then upload to S3
      // this second argument is optional and can to be sent as extra data with the upload
      uploader.upload(files[0]);
    }
  }
});
