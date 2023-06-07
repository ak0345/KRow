import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

/** This page --> Cox Feedback 
 * Located in --> Menu -> Forms
 * 
 * Users will be able to write text and send it to committee members (coxes form for coxes captain)
*/

const CoxFeedback = () => {
  return (
    <View style={styles.coxfeedbackmain}>
      <Image
        style={[styles.coxfeedbackmainChild, styles.coxfeedbackmainPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={[styles.welfareForm, styles.welfareFormTransform]}>{`Welfare 
Form`}</Text>
      <View style={[styles.vectorParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-101.png")}
        />
        <Text style={[styles.coxFeedback, styles.formsTypo]}>COX Feedback</Text>
      </View>
      <Text style={styles.boatDamage}>Boat Damage</Text>
      <Text
        style={[styles.howWasYour, styles.formsTypo]}
      >{`How was your outing? Give your cox a feedback so they can improve themselves  `}</Text>
      <View style={styles.coxfeedbackmainItem} />
      <Text style={[styles.tellUsWhat, styles.tellUsWhatTypo]}>
        Tell us what have you experienced.. (Please specify day, cox and time of
        your outing)
      </Text>
      <View
        style={[styles.coxfeedbackmainInner, styles.coxfeedbackmainPosition]}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupLayout]} />
      </View>
      <Text style={[styles.forms, styles.formsTypo]}>FORMS</Text>
      <Image
        style={styles.bellIcon2}
        contentFit="cover"
        source={require("../assets/bell-icon-2.png")}
      />
      <Image
        style={styles.passpaortpic2Icon}
        contentFit="cover"
        source={require("../assets/passpaortpic-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  coxfeedbackmainPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  welfareFormTransform: {
    transform: [
      {
        rotate: "0.3deg",
      },
    ],
    fontSize: FontSize.size_xl,
  },
  groupChildLayout: {
    height: 120,
    width: 154,
    position: "absolute",
  },
  formsTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  tellUsWhatTypo: {
    height: 42,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupLayout: {
    height: 4,
    width: 22,
    left: 0,
    position: "absolute",
  },
  coxfeedbackmainChild: {
    top: 82,
    height: 100,
    borderRadius: Border.br_71xl,
  },
  welfareForm: {
    top: 108,
    left: 26,
    width: 74,
    height: 42,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    color: Color.darkslateblue,
    transform: [
      {
        rotate: "0.3deg",
      },
    ],
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_71xl,
    left: 0,
    width: 154,
  },
  coxFeedback: {
    top: 35,
    left: 36,
    width: 101,
    height: 50,
    transform: [
      {
        rotate: "0.3deg",
      },
    ],
    fontSize: FontSize.size_xl,
  },
  vectorParent: {
    top: 72,
    left: 124,
  },
  boatDamage: {
    top: 109,
    left: 295,
    width: 80,
    height: 46,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.darkslateblue,
    position: "absolute",
  },
  howWasYour: {
    top: 245,
    left: 52,
    fontSize: FontSize.size_5xl,
    width: 289,
    height: 93,
  },
  coxfeedbackmainItem: {
    top: 426,
    left: 33,
    backgroundColor: Color.white,
    width: 328,
    height: 263,
    position: "absolute",
  },
  tellUsWhat: {
    top: 451,
    left: 49,
    fontSize: FontSize.size_smi,
    color: Color.black,
    width: 295,
  },
  coxfeedbackmainInner: {
    backgroundColor: Color.gray,
    height: 56,
    top: 0,
  },
  groupItem: {
    top: 19,
    backgroundColor: Color.yellow,
  },
  groupInner: {
    top: 9,
    backgroundColor: Color.gainsboro,
  },
  rectangleView: {
    backgroundColor: Color.crimson,
    top: 0,
  },
  rectangleParent: {
    top: 14,
    left: 20,
    height: 23,
    width: 22,
    position: "absolute",
  },
  forms: {
    top: 18,
    left: 47,
    fontSize: FontSize.size_base,
  },
  bellIcon2: {
    top: 5,
    left: 255,
    width: 37,
    height: 48,
    position: "absolute",
  },
  passpaortpic2Icon: {
    top: 1,
    left: 318,
    borderRadius: Border.br_6xl_5,
    width: 51,
    height: 55,
    position: "absolute",
  },
  coxfeedbackmain: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default CoxFeedback;