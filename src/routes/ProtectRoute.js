import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component }) => {
  const history = useHistory();
  const { token } = useSelector((state) => state.user);
  const isLogin = !!token;
  if (!isLogin) {
    history.push("/");
  }
  return <Component />;
};
export default ProtectedRoute;
