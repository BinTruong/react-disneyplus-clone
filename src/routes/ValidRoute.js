import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const ValidRoute = ({ component: Component }) => {
  const history = useHistory();
  const { token } = useSelector((state) => state.user);
  const isLogin = !!token;
  if (isLogin) {
    history.push("/home");
  }
  return <Component />;
};
export default ValidRoute;
