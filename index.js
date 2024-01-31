import "isomorphic-fetch";
import { Client } from "@microsoft/microsoft-graph-client";
// TODO: install and import msal

import "@azure/msal-node";
// TODO: how do I use msal?

// Sample response from user reg activity
const resp = {
    "@odata.context": "https://graph.microsoft.com/beta/$metadata#reports/authenticationMethods/userRegistrationDetails",
    "value": [
      {
        "id": "86462606-fde0-4fc4-9e0c-a20eb73e54c6",
        "userPrincipalName": "AlexW@Contoso.com",
        "userDisplayName": "Alex Wilber",
        "isAdmin": false,
        "isSsprRegistered": false,
        "isSsprEnabled": false,
        "isSsprCapable": false,
        "isMfaRegistered": true,
        "isMfaCapable": true,
        "isPasswordlessCapable": false,
        "lastUpdatedDateTime": "2023-03-13T19:15:41.6195833Z",
        "methodsRegistered": [
          "microsoftAuthenticatorPush",
          "softwareOneTimePasscode"
        ],
        "defaultMfaMethod": "microsoftAuthenticatorPush",
        "isSystemPreferredAuthenticationMethodEnabled": true,
        "systemPreferredAuthenticationMethods": [                
          "push"
        ],
        "userPreferredMethodForSecondaryAuthentication": "push",       
        "userType": "member"
      }
    ]
  }

const usersMfa = Array(resp.value.length);
for(let i = 0; i < resp.value.length; i++){
    usersMfa[i] = resp.value[0].isMfaRegistered;
}

// write to stdout
console.log(usersMfa)
