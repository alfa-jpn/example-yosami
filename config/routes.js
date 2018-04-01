const TrackRouter = require('track-router');

TrackRouter.configure(() => {
  get('hello', {to: 'hello', as: 'hello'});
});
