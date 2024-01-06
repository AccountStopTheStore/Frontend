import NavigationItems from "@/src/components/Common/NavigationItems";
import { Outlet } from "react-router-dom";

export const NavigateItemsLayout = () => {
  return (
    <>
      <Outlet />
      <NavigationItems />
    </>
  );
};
