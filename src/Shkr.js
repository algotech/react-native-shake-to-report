import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import RNShake from "react-native-shake";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { shkrStyles } from "./styles";
import { buildOptionsList } from "./buildOptionsList";

function Shkr({
  items,
  email,
  reportIssue,
  reportIcon,
  dismissIcon,
  containerStyle,
  listItemStyle,
}) {
  const [visible, setVisible] = useState(false);
  const options = buildOptionsList(
    items,
    setVisible,
    email,
    reportIcon,
    dismissIcon,
    reportIssue,
  );

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setVisible(true);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <>
      {visible &&
        <View style={[shkrStyles.container, containerStyle]}>
          <ScrollView>
            {options.map((item) => {
              return (
                <TouchableOpacity
                  onPress={item.action}
                  style={[shkrStyles.tile, listItemStyle]}
                >
                  {item.icon}
                  <Text style={shkrStyles.title}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      }
    </>
  );
}

Shkr.propTypes = {
  items: PropTypes.array,
  email: PropTypes.string,
  reportFunction: PropTypes.func,
  reportIcon: PropTypes.element,
  dismissIcon: PropTypes.element,
  containerStyle: PropTypes.object,
  listItemStyle: PropTypes.object,
};

export default Shkr;
