import { StyleSheet, Dimensions } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

export const shkrStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: SCREEN_HEIGHT / 4,
    backgroundColor: "white",
    paddingLeft: 30,
    paddingBottom: 30,
    paddingTop: 10,
    overflowY: "scroll",
  },
  tile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    fontSize: 32,
  },
  title: {
    marginLeft: 30,
    fontSize: 18,
  },
});
