import React from "react";

import * as Style from "./NotFound.model";

export const NotFount: React.FC = () => {
  return (
    <Style.ContainerElement>
      <Style.H1 lg="400px" sm="140px">
        4 <Style.Span>0</Style.Span> 4
      </Style.H1>

      <Style.H1 lg="55px" sm="21px">
        Ups...Don’t Cry!
      </Style.H1>

      <Style.H1 lg="40px" sm="15px">
        It’s just a 404 Error!
      </Style.H1>

      <p>Use the navigation above to go to the home page</p>
    </Style.ContainerElement>
  );
};
