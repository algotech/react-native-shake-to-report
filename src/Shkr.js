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
import { buildList } from "./buildList";

function Shkr({
  listOfItems,
  mailToReceiveInfo,
  specialIconForReport,
  specialIconForDismiss,
  customContainerStyle,
  customListItemStyle,
}) {
  const [visible, setVisible] = useState(false);
  const options = buildList(
    listOfItems,
    setVisible,
    mailToReceiveInfo,
    specialIconForReport,
    specialIconForDismiss,
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
      {!visible &&
        <View style={[shkrStyles.container, customContainerStyle]}>
          <ScrollView>
            {options.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={item.action}
                  style={[shkrStyles.tile, customListItemStyle]}
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
  listOfItems: PropTypes.array,
};

export default Shkr;
