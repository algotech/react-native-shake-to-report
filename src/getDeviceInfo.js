import React from "react";
import DeviceInfo from 'react-native-device-info';

function GetDeviceInfo(props) {
  let deviceJSON = {}
  deviceJSON.uniqueId = DeviceInfo.getUniqueId();
  deviceJSON.deviceId = DeviceInfo.getDeviceId();
  deviceJSON.deviceType = DeviceInfo.getDeviceType();
  deviceJSON.model = DeviceInfo.getModel();
  deviceJSON.brand = DeviceInfo.getBrand();
  deviceJSON.systemName = DeviceInfo.getSystemName();
  deviceJSON.systemVersion = DeviceInfo.getSystemVersion();
  deviceJSON.isTablet = DeviceInfo.isTablet();
  deviceJSON.appName = DeviceInfo.getApplicationName();

  return JSON.stringify(deviceJSON);
}

export default GetDeviceInfo;
