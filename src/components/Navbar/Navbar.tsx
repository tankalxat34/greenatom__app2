import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { IEmployee } from "../../types/employerTypes";
import SvgLogoutIcon from "../../assets/svg/ui-logout.svg";
import { observer } from "mobx-react-lite";
import { mainStore } from "../../store/main.store";
import Loader from "../Loader/Loader";
import IconUser from "./../../assets/svg/ui-user-profile.svg";
import { userStore } from "../../store/user.store";
interface Navbar {
  userData: IEmployee;
  handleLogout(): void;
  userRoutes(userRole: string): any;
}

const Navbar = ({ userData, handleLogout, userRoutes }: Navbar) => {
  return (
    <>
      {userData &&
        Object.entries(userRoutes(userData.role.name)).map(
          (el: any, index: number) => (
            <Link key={index} to={el[1]}>
              <Button viewtype="text">{el[0]}</Button>
            </Link>
          )
        )}
      <Link to={"/profile"}>
        <Button viewtype={userStore.userRole === "ROLE_ADMIN" ? "v3" : "v2"}>
          <h4>
            {userData?.firstname} {userData?.surname}
          </h4>
        </Button>
      </Link>
      <Button viewtype="text">
        <img src={SvgLogoutIcon} onClick={handleLogout} />
      </Button>
    </>
  );
};

export default observer(Navbar);
