import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


export default function Auth0ProviderWithHistory({ children }) {
  let navigate = useNavigate();

  const redirect = (appState) => {
    navigate(appState.returnTo || window.location.pathname);
  }

  return (
    <Auth0Provider
      domain="dev-0lp107rg0xu0bpgh.us.auth0.com"
      clientId="8dt7GnQ5rqgolyfnxFHpD7ygnDupeBGn"
      redirectUri={window.location.origin}
      onRedirectCallback={redirect}
      >
      {children}  
    </Auth0Provider>
  )
}
