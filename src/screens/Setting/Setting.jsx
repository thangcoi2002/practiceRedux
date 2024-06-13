import { useEffect } from "react";
import { Button, StyleSheet, Switch, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import getCourse from "../../actions/getCourse";
import axios from "axios";

function Setting() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.appReducer.darkMode);
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const course = useSelector((state) => state.courseReducer.course);

console.log(course);
  return (
    <View style={styles.container}>
      <Switch
        value={darkMode}
        onValueChange={() =>
          dispatch({
            type: "CHANGE_APP_MODE",
            payload: { darkMode: !darkMode },
          })
        }
      />

      <Button
        title="GET COURSE"
        onPress={() => dispatch({ type: "GET_COURSES" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default Setting;
