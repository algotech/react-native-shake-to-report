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
  reportIssue,
) => {
  const handleReport = () => {
    const info = getDeviceInfo();

    if (typeof reportIssue === 'function') {
      reportIssue?.(info);
    }

    if (typeof email === 'string') {
      Linking.openURL(`mailto:${email}?subject=Report Issue&body=${JSON.stringify(info)}`);
    }

    if (typeof email === "undefined" && typeof reportIssue === 'undefined') {
      throw 'Please provide an email or a function.'
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
