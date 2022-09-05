import { buildOptionsList } from "../src/buildOptionsList";
import Icon from "react-native-vector-icons/AntDesign";

describe("getting the list of options", () => {

  it("should return default length", () => {
    const options = buildOptionsList();

    expect(options.length).toBe(2);
  });

  it("should return correct length", () => {
    const handleAction = () => {
      console.log("warning");
    };

    const items = [{
      icon: <Icon name="warning" size={24} />,
      title: "Report a problem",
      action: handleAction,
    }];

    const options = buildOptionsList(items);

    expect(options.length).toBe(3);
  });

  it("should return a list", () => {
    const options = buildOptionsList();

    expect(typeof options).toBe("array");
  });
});

