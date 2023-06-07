import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-internalNav/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

/** This page --> Crews (Day view) 
 * Located in --> Main Menu
*/


const CrewsDay = () => {
  const internalNav = useNavigation();

  return (
    <View style={styles.crewsday}>
      <View style={[styles.crewsdayChild, styles.groupIconLayout]} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.innerBg]} />
      </View>
      <Text style={[styles.crews, styles.wamTypo]}>CREWS</Text>
      <Image
        style={styles.passpaortpic1Icon}
        contentFit="cover"
        source={require("../assets/passpaortpic-1.png")}
      />
      <Image
        style={styles.bellIcon1}
        contentFit="cover"
        source={require("../assets/bell-icon-1.png")}
      />
      <View style={[styles.crewsdayItem, styles.crewsdayItemBg]} />
      <View style={[styles.crewsdayInner, styles.innerBg]} />
      <Text style={[styles.day, styles.dayTypo]}>DAY</Text>
      <Pressable
        style={[styles.week, styles.dayPosition]}
        onPress={() => internalNav.navigate("CrewsWeek")}
      >
        <Text style={[styles.week1, styles.dayTypo]}>WEEK</Text>
      </Pressable>
      <Pressable
        style={[styles.month, styles.dayPosition]}
        onPress={() => internalNav.navigate("CrewsMonth1")}
      >
        <Text style={[styles.month1, styles.wamTypo]}>MONTH</Text>
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.crewsdayItemBg]}
        onPress={() => internalNav.navigate("CrewsDay3")}
      />
      <Text style={[styles.text, styles.textTypo1]}>13-14</Text>
      <Text style={[styles.text1, styles.text1Position]}>17-18</Text>
      <Text style={[styles.text2, styles.text2Position]}>18-19</Text>
      <Text style={[styles.text3, styles.text3Position]}>19-20</Text>
      <Text style={[styles.text4, styles.text4Position]}>20-21</Text>
      <Text style={[styles.text5, styles.text5Position]}>21-22</Text>
      <Text style={[styles.text6, styles.text6Position]}>14-15</Text>
      <Text style={[styles.text7, styles.text7Position]}>15-16</Text>
      <Text style={[styles.text8, styles.text8Position]}>16-17</Text>
      <View style={[styles.lineView, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild1, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild2, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild3, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild4, styles.text14Position]} />
      <View style={[styles.crewsdayChild5, styles.text16Position]} />
      <View style={[styles.crewsdayChild6, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild7, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild8, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild9, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild10, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild11, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild12, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild13, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild14, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild15, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild16, styles.crewsdayChildBorder]} />
      <View style={[styles.crewsdayChild17, styles.crewsdayChildBorder]} />
      <Text style={[styles.april20, styles.wamTypo]}>APRIL 20</Text>
      <View style={[styles.crewsdayChild18, styles.text13Position]} />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.froshMen4, styles.menTypo]}>{`Frosh Men
4+`}</Text>
      </View>
      <Text style={[styles.text9, styles.textTypo]}>7-8</Text>
      <Text style={[styles.text10, styles.textTypo]}>6-7</Text>
      <Text style={[styles.text11, styles.textTypo]}>5-6</Text>
      <Text style={[styles.text12, styles.textTypo]}>8-9</Text>
      <Text style={[styles.text13, styles.text13Position]}>9-10</Text>
      <Text style={[styles.text14, styles.text14Position]}>10-11</Text>
      <Text style={[styles.text15, styles.textTypo1]}>11-12</Text>
      <Text style={[styles.text16, styles.text16Position]}>12-13</Text>
      <View style={[styles.crewsdayChild19, styles.crewsdayChildLayout]} />
      <View style={[styles.crewsdayChild20, styles.crewsdayChildLayout]} />
      <Text style={[styles.seniorWam8, styles.wamTypo]}>{`Senior Wam
8+`}</Text>
      <Text style={[styles.seniorMen8, styles.menTypo]}>{`Senior Men 
8+`}</Text>
      <View style={[styles.crewsdayChild21, styles.crewsdayChildLayout]} />
      <Text style={[styles.froshWam8, styles.froshWam8Layout]}>{`Frosh Wam 
8+`}</Text>
      <View style={[styles.crewsdayChild22, styles.crewsdayChildLayout]} />
      <Text style={[styles.wamSingle, styles.wamTypo]}>Wam Single</Text>
      <Image
        style={[styles.groupIcon, styles.froshWam8Layout]}
        contentFit="cover"
        source={require("../assets/group-6.png")}
      />
      <Pressable
        style={[styles.rectangleContainer, styles.groupChild1Layout]}
        onPress={() => internalNav.navigate("CrewsDay3")}
      >
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        <Text style={styles.today}>TODAY</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    width: 393,
    left: 0,
  },
  groupLayout: {
    height: 4,
    width: 22,
    left: 0,
  },
  innerBg: {
    backgroundColor: Color.crimson,
    position: "absolute",
  },
  wamTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  crewsdayItemBg: {
    backgroundColor: Color.white,
    position: "absolute",
  },
  dayTypo: {
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  dayPosition: {
    top: 74,
    position: "absolute",
  },
  textTypo1: {
    height: 17,
    width: 65,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  text1Position: {
    top: 555,
    position: "absolute",
  },
  text2Position: {
    top: 583,
    position: "absolute",
  },
  text3Position: {
    top: 611,
    position: "absolute",
  },
  text4Position: {
    top: 639,
    position: "absolute",
  },
  text5Position: {
    top: 667,
    position: "absolute",
  },
  text6Position: {
    top: 471,
    position: "absolute",
  },
  text7Position: {
    top: 499,
    position: "absolute",
  },
  text8Position: {
    top: 527,
    position: "absolute",
  },
  crewsdayChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    left: 20,
  },
  text14Position: {
    top: 359,
    position: "absolute",
  },
  text16Position: {
    top: 415,
    position: "absolute",
  },
  text13Position: {
    top: 331,
    position: "absolute",
  },
  rectangleLayout: {
    height: 58,
    width: 130,
    position: "absolute",
  },
  menTypo: {
    width: 105,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  textTypo: {
    height: 24,
    width: 50,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  crewsdayChildLayout: {
    width: 130,
    position: "absolute",
  },
  froshWam8Layout: {
    height: 35,
    position: "absolute",
  },
  groupChild1Layout: {
    width: 90,
    height: 58,
    position: "absolute",
  },
  crewsdayChild: {
    backgroundColor: Color.gray,
    height: 56,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 19,
    backgroundColor: Color.yellow,
    position: "absolute",
  },
  groupItem: {
    top: 9,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  groupInner: {
    height: 4,
    width: 22,
    left: 0,
    top: 0,
  },
  rectangleParent: {
    top: 14,
    height: 23,
    width: 22,
    left: 20,
    position: "absolute",
  },
  crews: {
    top: 18,
    left: 47,
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  passpaortpic1Icon: {
    top: 1,
    left: 318,
    borderRadius: Border.br_6xl_5,
    width: 51,
    height: 55,
    position: "absolute",
  },
  bellIcon1: {
    top: 5,
    left: 255,
    width: 37,
    height: 48,
    position: "absolute",
  },
  crewsdayItem: {
    top: 64,
    left: 90,
    width: 214,
    height: 41,
    borderRadius: Border.br_181xl,
  },
  crewsdayInner: {
    top: 56,
    width: 76,
    left: 85,
    borderRadius: Border.br_181xl,
    height: 56,
  },
  day: {
    left: 105,
    width: 34,
    top: 74,
    position: "absolute",
    color: Color.white,
  },
  week1: {
    width: 48,
    color: Color.darkslateblue,
  },
  week: {
    left: 173,
  },
  month1: {
    width: 61,
    height: 13,
    color: Color.darkslateblue,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
  },
  month: {
    left: 231,
  },
  rectanglePressable: {
    top: 182,
    borderRadius: Border.br_12xl,
    width: 356,
    height: 551,
    left: 20,
    backgroundColor: Color.white,
  },
  text: {
    top: 443,
    position: "absolute",
  },
  text1: {
    height: 17,
    width: 65,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  text2: {
    height: 17,
    width: 65,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  text3: {
    height: 17,
    width: 65,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  text4: {
    height: 17,
    width: 65,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  text5: {
    height: 17,
    width: 65,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  text6: {
    height: 17,
    width: 65,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  text7: {
    height: 17,
    width: 65,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  text8: {
    height: 17,
    width: 65,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  lineView: {
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    top: 247,
    position: "absolute",
  },
  crewsdayChild1: {
    top: 219,
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    position: "absolute",
  },
  crewsdayChild2: {
    top: 275,
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    position: "absolute",
  },
  crewsdayChild3: {
    top: 303,
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    position: "absolute",
  },
  crewsdayChild4: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    left: 20,
    width: 357,
  },
  crewsdayChild5: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    left: 20,
    width: 357,
  },
  crewsdayChild6: {
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    top: 443,
    position: "absolute",
  },
  crewsdayChild7: {
    top: 387,
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    position: "absolute",
  },
  crewsdayChild8: {
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    top: 471,
    position: "absolute",
  },
  crewsdayChild9: {
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    top: 499,
    position: "absolute",
  },
  crewsdayChild10: {
    top: 4490,
    width: 343,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    position: "absolute",
  },
  crewsdayChild11: {
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    top: 527,
    position: "absolute",
  },
  crewsdayChild12: {
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    top: 583,
    position: "absolute",
  },
  crewsdayChild13: {
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    top: 611,
    position: "absolute",
  },
  crewsdayChild14: {
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    top: 555,
    position: "absolute",
  },
  crewsdayChild15: {
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    top: 639,
    position: "absolute",
  },
  crewsdayChild16: {
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    top: 667,
    position: "absolute",
  },
  crewsdayChild17: {
    top: 695,
    width: 357,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    position: "absolute",
  },
  april20: {
    top: 118,
    left: 15,
    fontSize: FontSize.size_29xl,
    width: 288,
    height: 64,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  crewsdayChild18: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#153170",
    borderStyle: "solid",
    left: 20,
    width: 357,
  },
  rectangleView: {
    backgroundColor: Color.yellow,
    left: 0,
    top: 0,
  },
  froshMen4: {
    top: 3,
    left: 14,
    height: 42,
    color: Color.darkslateblue,
  },
  rectangleGroup: {
    top: 389,
    left: 227,
  },
  text9: {
    top: 273,
  },
  text10: {
    top: 247,
  },
  text11: {
    top: 217,
  },
  text12: {
    top: 302,
  },
  text13: {
    width: 59,
    fontSize: FontSize.size_mini,
    left: 22,
    top: 331,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    height: 23,
  },
  text14: {
    height: 17,
    width: 65,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  text15: {
    top: 387,
    position: "absolute",
  },
  text16: {
    height: 17,
    width: 65,
    fontSize: FontSize.size_mini,
    left: 22,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  crewsdayChild19: {
    backgroundColor: Color.limegreen,
    top: 387,
    left: 85,
    height: 56,
  },
  crewsdayChild20: {
    backgroundColor: Color.darkorchid,
    left: 227,
    top: 443,
    height: 56,
  },
  seniorWam8: {
    top: 386,
    left: 99,
    width: 99,
    height: 57,
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  seniorMen8: {
    top: 446,
    left: 239,
    height: 50,
    color: Color.white,
  },
  crewsdayChild21: {
    backgroundColor: Color.firebrick,
    height: 45,
    top: 443,
    left: 85,
  },
  froshWam8: {
    top: 444,
    left: 92,
    width: 112,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  crewsdayChild22: {
    top: 532,
    backgroundColor: Color.lightcoral,
    height: 47,
    left: 85,
  },
  wamSingle: {
    top: 534,
    left: 94,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupIcon: {
    top: 785,
    width: 393,
    left: 0,
  },
  groupChild1: {
    left: 0,
    top: 0,
    backgroundColor: Color.darkslateblue,
  },
  today: {
    top: 10,
    fontSize: FontSize.size_5xl,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: FontFamily.interExtraboldItalic,
    textAlign: "left",
    color: Color.white,
    left: 0,
    position: "absolute",
  },
  rectangleContainer: {
    top: 778,
    left: 150,
  },
  crewsday: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.darkslateblue,
  },
});

export default CrewsDay;