import React, { Fragment } from "react";
import Customers from "./Customers";
import Unlock from "./Unlock";
import Achievement from "./Achievement";
import Calender from "./Calender";
import CommunityUpdate from "./CommunityUpdate";

function Body() {
  return (
    <Fragment>
      <Unlock />
      <Achievement />
      <Calender />
      <Customers />
      <CommunityUpdate />
    </Fragment>
  );
}

export default Body;
