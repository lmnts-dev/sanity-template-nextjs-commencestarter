import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
export type CMNC_Sensor = {
  once?: boolean;
  children: any;
  partialVisibility?: any;
  offset?: any;
};

export const Sensor: React.FunctionComponent<CMNC_Sensor> = ({
  once,
  children,
  partialVisibility,
  offset,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <VisibilitySensor
      active={once ? !visible : true}
      partialVisibility={partialVisibility}
      offset={offset}
      onChange={(isVisible) => {
        if (visible && once) {
          return;
        }

        setVisible(isVisible);
      }}
    >
      {children({ isVisible: visible })}
    </VisibilitySensor>
  );
};

export default Sensor;
