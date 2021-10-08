import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import { Alert } from "../users/Alert";

export const Home = () => {
  return (
    <Fragment>
      <Alert />

      <Search />
      <Users />
    </Fragment>
  );
};
