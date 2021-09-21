import { Switch, Route, Redirect } from "react-router-dom";
import { routers } from "./routers";

const AppSwitch = () => {
  return (
    <Switch>
      {routers.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        ></Route>
      ))}
      <Redirect to='/' />
    </Switch>
  );
};

export default AppSwitch;
