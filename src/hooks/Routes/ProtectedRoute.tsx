import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../recoil/useLogin";

export const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  console.log("isLogin: ", isLogin);
  const currentLocation = useLocation();
  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ redirectedFrom: currentLocation }} />
  );
};
