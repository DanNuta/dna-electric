import React, { PropsWithChildren, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import * as Style from "./VCeOferim.model";
import { CeOferimModel } from "../../models/ceOferim.model";
import { LinkCOmponent } from "../VLink/VLink";
import { rootColor } from "../styles/Theme";

type Props = {
  item: CeOferimModel;
  onClick: () => void;
  state: boolean;
};

export const VCeOferimView: React.FC<PropsWithChildren<Props>> = (props) => {
  const [scrollState, setScrollState] = useState(0);

  const handlerWindows = () => {
    const position = window.pageYOffset;
    setScrollState(position);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    props.state
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [props.state]);

  useEffect(() => {
    window.addEventListener("scroll", handlerWindows);
  }, []);

  return (
    <Style.CardDiv onClick={props.onClick}>
      <h1>{props.item.title}</h1>

      {props.state && <p>{props.item.descrition}</p>}

      <Style.Model>
        {props.state &&
          ReactDOM.createPortal(
            <Style.CeOferim scroll={scrollState}>
              <Style.CeOferimInfo>
                <h1>{props.item.title}</h1>
                <p>{props.item.descrition}</p>

                <LinkCOmponent
                  onClick={() => {
                    document.body.style.overflow = "scroll";
                  }}
                  bg={rootColor.primary}
                  link="/contacte">
                  Contacteaza-ne
                </LinkCOmponent>
              </Style.CeOferimInfo>
            </Style.CeOferim>,
            document.getElementById("root") as HTMLDivElement
          )}
      </Style.Model>
    </Style.CardDiv>
  );
};
