import { Redirect, Route } from "react-router-dom";
import Auth from "./Auth";
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <div>
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location,
                  },
                }}
              />
            </div>
          );
        }
      }}
    />
  );
};
