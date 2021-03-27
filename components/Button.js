import React from "react";
import { TouchableOpacity,View, StyleSheet, Text, Dimensions } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;



const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 30,
    textAlign:'center'

  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#839deb",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
    elevation:10
  },
  buttonView: {
    flex: 1,
  
  },
  
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#b9c6ed"
  },
  buttonAccent: {
    backgroundColor: "#4b8de3"
  }
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const buttonView=[styles.buttonView]
  const textStyles = [styles.text];
  const gradientAcent=["#6a7180","#07193d"] 
  const gradientSecondary=["#c2ddff","#7499e8"]
  const gradientNumber=["#90b2f5","#4b8de3"]


  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
    
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    
    // textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
   
  }

  return (
    // <TouchableOpacity onPress={onPress}style={styles.button}>
    <TouchableOpacity style={text==="."?{marginLeft:125, width:"25%"}:buttonView} onPress={onPress}>
    <LinearGradient style={buttonStyles}
    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
    colors={theme==="accent" ?gradientAcent: theme==="secondary" ?gradientSecondary:gradientNumber}>
    {/* <TouchableOpacity onPress={onPress}> */}
      <Text style={textStyles}>{text}</Text>
    {/* </TouchableOpacity> */}
    </LinearGradient>
    </TouchableOpacity>
  );
};
