import getDeviceInfo from "../src/getDeviceInfo";

describe("getting the device information", () => {
  it('should return an object', () => {
    const device = getDeviceInfo();

    expect(typeof device).toBe('object');
  })
})
