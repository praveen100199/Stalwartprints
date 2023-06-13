// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    siteBaseUrl: "",
    apiBaseUrl: "<apiURL>",
    // ssoUrl: "https://acs-sso-accelerator.azurewebsites.net/account/login/1016?returnUrl=http://172.16.0.91:9010/sso-callback",
    // ssoLogout: "https://acs-sso-accelerator.azurewebsites.net/account/logout/1016?returnUrl=http://172.16.0.91:9010/ ",
    // serverUrl :"http://172.16.0.92:8085/api/",
    externalGatewayUrl:"https://127.0.0.1:5000/api/"

    // ssoUrl: "https://acs-sso-accelerator.azurewebsites.net/account/login/1016?returnUrl=http://localhost:4200/sso-callback",
    // ssoLogout: "https://acs-sso-accelerator.azurewebsites.net/account/logout/1016?returnUrl=http://localhost:4200/ ",
    // serverUrl :"http://localhost:49343/api/",
    // externalGatewayUrl:"http://localhost:49353/api/"
};

/*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
