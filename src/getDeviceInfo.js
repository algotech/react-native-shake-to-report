import React from "react";
import DeviceInfo from "react-native-device-info";

const getDeviceInfo = () => {
  const device = {};
  device.uniqueId = DeviceInfo.getUniqueId();
  device.deviceId = DeviceInfo.getDeviceId();
  device.deviceType = DeviceInfo.getDeviceType();
  device.model = DeviceInfo.getModel();
  device.brand = DeviceInfo.getBrand();
  device.systemName = DeviceInfo.getSystemName();
  device.systemVersion = DeviceInfo.getSystemVersion();
  device.isTablet = DeviceInfo.isTablet();
  device.appName = DeviceInfo.getApplicationName();

  return device;
}

export default getDeviceInfo;
