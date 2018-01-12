// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD2qvx-lwL_VuiphcdtFm_cpgCOVv8uW2c',
    authDomain: 'vanilla-tinder.firebaseapp.com',
    databaseURL: 'https://vanilla-tinder.firebaseio.com',
    projectId: 'vanilla-tinder',
    storageBucket: 'vanilla-tinder.appspot.com',
    messagingSenderId: '980467088935'
  }
};
