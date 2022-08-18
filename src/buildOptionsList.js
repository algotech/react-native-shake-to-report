import React from "react";
import { Linking } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import getDeviceInfo from "./getDeviceInfo";

export const buildOptionsList = (
  items,
  setVisible,
  email,
  reportIcon,
  dismissIcon,
  reportFunction,
) => {
  const handleReport = () => {
    const info = getDeviceInfo();

    if (email === undefined) {
      if (reportFunction === undefined) {
        console.log(info);
      }
      reportFunction?.(info);
    } else {
      Linking.openURL(`mailto:${email}?subject=Report Issue&body=${JSON.stringify(info)}`);
    }
  };

  const handleDismiss = () => {
    setVisible(false);
  };

  let list = [{
    icon: reportIcon || <Icon name="warning" size={24} />,
    title: "Report a problem",
    action: handleReport,
  }];

  if (items !== undefined) {
    items.map(item => {
      list.push(item);
    });
  }

  list.push({
    icon: dismissIcon || <Icon name="close" size={24} />,
    title: "Dismiss",
    action: handleDismiss,
  });

  return list;
};
