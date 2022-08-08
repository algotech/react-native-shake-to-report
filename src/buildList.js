import React from "react";
import { Linking } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import getDeviceInfo from "./getDeviceInfo";

export const buildList = (items, setVisible, mail, reportIcon, dismissIcon) => {
  const handleReport = () => {
    const info = getDeviceInfo();
    if (mail === undefined) {
      alert("You didn't provide an email address as prop")
    } else {
      Linking.openURL(`mailto:${mail}?subject=Report Issue&body=${info}`);
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
