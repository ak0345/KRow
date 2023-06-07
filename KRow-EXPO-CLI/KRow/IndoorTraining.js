import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

/** This page --> AR2 Training Document
 * Located on --> Main Menu -> Indoor Training
 * 
 * This document will be editted by captains - Full authorisation
 * Rowers can edit - Which training they want to join only
 * 
*/

const IndoorCurrent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.indoorcurrent}>
      <View style={[styles.indoorcurrentChild, styles.groupIconPosition]} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout2]} />
        <View style={[styles.groupItem, styles.groupLayout2]} />
        <View style={styles.groupInner} />
      </View>
      <Text style={[styles.indoor, styles.plan10kTypo]}>INDOOR</Text>
      <Image
        style={styles.passpaortpic1Icon}
        contentFit="cover"
        source={require("../assets/passpaortpic-1.png")}
      />
      <Image
        style={[styles.bellIcon1, styles.bellIcon1Layout]}
        contentFit="cover"
        source={require("../assets/bell-icon-1.png")}
      />
      <View style={styles.indoorcurrentItem} />
      <View style={styles.indoorcurrentInner} />
      <Pressable
        style={[styles.leaderboard, styles.ergsPosition]}
        onPress={() => navigation.navigate("IndoorLeader")}
      >
        <Text style={[styles.leaderboard1, styles.ergsTypo]}>Leaderboard</Text>
      </Pressable>
      <Text style={styles.plansLinks}>{`Plans
   &
Links`}</Text>
      <Text style={[styles.ergs, styles.ergsTypo]}>ERGS</Text>
      <View style={styles.rectangleView} />
      <Text style={[styles.ar2SignUps, styles.cumTypo]}>AR2 SIGN-UPS</Text>
      <View
        style={[styles.indoorcurrentChild1, styles.indoorcurrentChildLayout5]}
      />
      <Text style={[styles.plan3x2kR262830, styles.plan10kPosition]}>
        PLAN: 3x2K r26-28-30
      </Text>
      <View
        style={[styles.indoorcurrentChild2, styles.indoorcurrentChildLayout5]}
      />
      <View
        style={[styles.indoorcurrentChild3, styles.indoorcurrentChildLayout5]}
      />
      <Text style={[styles.tuesday18April, styles.aprilTypo]}>
        TUESDAY 18 April
      </Text>
      <Text style={[styles.plan10kUt2, styles.plan10kPosition]}>
        PLAN: 10K UT2
      </Text>
      <Text style={[styles.friday21April, styles.aprilTypo]}>
        FRIDAY 21 April
      </Text>
      <Text style={[styles.plan10kUt21, styles.plan10kPosition]}>
        PLAN: 10K UT2 -For people who are not otw
      </Text>
      <Text style={[styles.saturday22April, styles.aprilTypo]}>
        SATURDAY 22 April
      </Text>
      <View
        style={[styles.indoorcurrentChild4, styles.indoorcurrentChildLayout4]}
      />
      <Text style={[styles.pm, styles.pmTypo]}>6PM</Text>
      <View
        style={[styles.indoorcurrentChild5, styles.indoorcurrentChildLayout4]}
      />
      <View
        style={[styles.indoorcurrentChild6, styles.indoorcurrentChildLayout4]}
      />
      <Text style={[styles.andreParisCosby, styles.andreTypo]}>{`-Andre
-Paris
-Cosby
-So`}</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("IndoorFirstSelected")}
      />
      <Text style={[styles.emptySlots, styles.cumTypo]}>{`2 Empty Slots
-
-`}</Text>
      <View
        style={[styles.indoorcurrentChild7, styles.indoorcurrentChildLayout3]}
      />
      <Text style={[styles.emptySlots1, styles.emptyTypo1]}>{`4 Empty Slots
-
-
-
-`}</Text>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupChild1, styles.groupLayout1]} />
        <Text style={[styles.emptySlots2, styles.cumTypo]}>{`6 Empty Slots
-
-
-
-
-
-`}</Text>
      </View>
      <Text style={[styles.pm1, styles.pmTypo]}>7PM</Text>
      <Text style={[styles.pm2, styles.pmTypo]}>8PM</Text>
      <Text style={[styles.cumHarv, styles.cumTypo]}>{`-Cum
-Harv`}</Text>
      <View
        style={[styles.indoorcurrentChild8, styles.indoorcurrentChildLayout2]}
      />
      <Text style={[styles.pm3, styles.pm3Typo]}>6PM</Text>
      <View
        style={[styles.indoorcurrentChild9, styles.indoorcurrentChildLayout2]}
      />
      <View
        style={[styles.indoorcurrentChild10, styles.rectangleContainerPosition]}
      />
      <Text style={[styles.andreParisCosby1, styles.andreTypo]}>{`-Andre
-Paris
-Cosby
-So`}</Text>
      <View
        style={[styles.indoorcurrentChild11, styles.rectanglePressableLayout]}
      />
      <Text style={[styles.emptySlots3, styles.cumTypo]}>{`2 Empty Slots
-
-`}</Text>
      <View
        style={[styles.indoorcurrentChild12, styles.indoorcurrentChildLayout3]}
      />
      <Text style={[styles.emptySlots4, styles.emptyTypo1]}>{`4 Empty Slots
-
-
-
-`}</Text>
      <View
        style={[styles.rectangleContainer, styles.rectangleContainerPosition]}
      >
        <View style={[styles.groupChild1, styles.groupLayout1]} />
        <Text style={[styles.emptySlots2, styles.cumTypo]}>{`6 Empty Slots
-
-
-
-
-
-`}</Text>
      </View>
      <Text style={[styles.pm4, styles.pm3Typo]}>7PM</Text>
      <Text style={[styles.pm5, styles.pm3Typo]}>8PM</Text>
      <Text style={[styles.cumHarv1, styles.cumTypo]}>{`-Cum
-Harv`}</Text>
      <View
        style={[styles.indoorcurrentChild13, styles.indoorcurrentChildLayout1]}
      />
      <Text style={[styles.am, styles.amTypo]}>9AM</Text>
      <View
        style={[styles.indoorcurrentChild14, styles.indoorcurrentChildLayout1]}
      />
      <View
        style={[styles.indoorcurrentChild15, styles.indoorcurrentChildLayout1]}
      />
      <Text style={[styles.jamesRaresAbs, styles.andreTypo]}>{`-James
-Rares
-Abs
-Connor
-Kinsey
-Harrison`}</Text>
      <View
        style={[styles.indoorcurrentChild16, styles.indoorcurrentChildLayout]}
      />
      <Text style={[styles.emptySlots6, styles.emptyTypo]}>{`4 Empty Slots
-
-
-
-`}</Text>
      <View
        style={[styles.indoorcurrentChild17, styles.indoorcurrentChildLayout]}
      />
      <Text style={[styles.emptySlots7, styles.emptyTypo]}>{`4 Empty Slots
-
-
-
-`}</Text>
      <Text style={[styles.am1, styles.amTypo]}>10AM</Text>
      <Text style={[styles.am2, styles.amTypo]}>11AM</Text>
      <Text style={[styles.aliAbaan, styles.aliAbaanTypo]}>{`-Ali
-Abaan`}</Text>
      <Text style={[styles.eliottLewis, styles.aliAbaanTypo]}>{`-Eliott
-Lewis`}</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-19.png")}
      />
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild3, styles.groupLayout]} />
        <Text style={[styles.today, styles.aprilTypo]}>TODAY</Text>
      </View>
      <View style={[styles.indoorcurrentChild18, styles.bellIcon1Layout]} />
      <Text style={[styles.submit, styles.cumTypo]}>SUBMIT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  groupLayout2: {
    height: 4,
    width: 22,
    left: 0,
    position: "absolute",
  },
  plan10kTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  bellIcon1Layout: {
    height: 48,
    position: "absolute",
  },
  ergsPosition: {
    top: 117,
    position: "absolute",
  },
  ergsTypo: {
    height: 16,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  cumTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  indoorcurrentChildLayout5: {
    height: 245,
    width: 362,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    position: "absolute",
  },
  plan10kPosition: {
    left: 44,
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
  },
  aprilTypo: {
    fontFamily: FontFamily.interExtraboldItalic,
    fontWeight: "800",
    fontStyle: "italic",
    textAlign: "left",
    position: "absolute",
  },
  indoorcurrentChildLayout4: {
    height: 197,
    width: 120,
    borderRadius: Border.br_10xl,
    top: 332,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  pmTypo: {
    color: Color.crimson,
    top: 339,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  andreTypo: {
    height: 140,
    width: 106,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectanglePressableLayout: {
    width: 123,
    borderRadius: Border.br_12xl,
    height: 85,
    backgroundColor: Color.yellow,
    position: "absolute",
  },
  indoorcurrentChildLayout3: {
    height: 128,
    width: 121,
    borderRadius: Border.br_12xl,
    backgroundColor: Color.yellow,
    position: "absolute",
  },
  emptyTypo1: {
    height: 91,
    width: 108,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupLayout1: {
    height: 175,
    width: 121,
  },
  indoorcurrentChildLayout2: {
    top: 605,
    height: 197,
    width: 120,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.gainsboro,
  },
  pm3Typo: {
    top: 612,
    color: Color.crimson,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleContainerPosition: {
    left: 254,
    position: "absolute",
  },
  indoorcurrentChildLayout1: {
    top: 878,
    height: 197,
    width: 120,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  amTypo: {
    top: 885,
    color: Color.crimson,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  indoorcurrentChildLayout: {
    top: 947,
    height: 128,
    width: 121,
    borderRadius: Border.br_12xl,
    backgroundColor: Color.yellow,
    position: "absolute",
  },
  emptyTypo: {
    top: 961,
    height: 91,
    width: 108,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  aliAbaanTypo: {
    top: 913,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupLayout: {
    height: 58,
    width: 90,
    position: "absolute",
  },
  indoorcurrentChild: {
    backgroundColor: Color.gray,
    height: 56,
    top: 0,
  },
  groupChild: {
    backgroundColor: Color.yellow,
    height: 4,
    top: 19,
  },
  groupItem: {
    top: 9,
    backgroundColor: Color.gainsboro,
  },
  groupInner: {
    backgroundColor: Color.crimson,
    height: 4,
    width: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 14,
    left: 20,
    height: 23,
    width: 22,
    position: "absolute",
  },
  indoor: {
    top: 18,
    left: 47,
    color: Color.white,
    fontSize: FontSize.size_base,
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
    width: 37,
    left: 255,
  },
  indoorcurrentItem: {
    top: 87,
    left: 24,
    width: 346,
    height: 76,
    backgroundColor: Color.white,
    borderRadius: Border.br_201xl,
    position: "absolute",
  },
  indoorcurrentInner: {
    top: 80,
    width: 133,
    height: 93,
    left: 8,
    borderRadius: Border.br_201xl,
    backgroundColor: Color.crimson,
    position: "absolute",
  },
  leaderboard1: {
    width: 101,
  },
  leaderboard: {
    left: 168,
  },
  plansLinks: {
    top: 100,
    left: 296,
    width: 42,
    height: 52,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  ergs: {
    left: 53,
    width: 44,
    top: 117,
    position: "absolute",
  },
  rectangleView: {
    top: 186,
    left: 17,
    borderRadius: Border.br_181xl,
    width: 351,
    height: 85,
    backgroundColor: Color.yellow,
    position: "absolute",
  },
  ar2SignUps: {
    top: 212,
    left: 78,
    fontSize: FontSize.size_13xl,
    width: 228,
    height: 33,
  },
  indoorcurrentChild1: {
    top: 284,
    left: 14,
  },
  plan3x2kR262830: {
    top: 311,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  indoorcurrentChild2: {
    top: 557,
    left: 14,
  },
  indoorcurrentChild3: {
    top: 830,
    left: 18,
  },
  tuesday18April: {
    top: 292,
    left: 44,
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
  },
  plan10kUt2: {
    top: 584,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  friday21April: {
    top: 565,
    left: 44,
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
  },
  plan10kUt21: {
    top: 857,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  saturday22April: {
    top: 838,
    left: 44,
    color: Color.darkslateblue,
    fontSize: FontSize.size_base,
  },
  indoorcurrentChild4: {
    left: 15,
  },
  pm: {
    left: 57,
  },
  indoorcurrentChild5: {
    left: 135,
  },
  indoorcurrentChild6: {
    left: 255,
  },
  andreParisCosby: {
    top: 365,
    left: 19,
  },
  rectanglePressable: {
    top: 444,
    left: 14,
  },
  emptySlots: {
    top: 458,
    left: 22,
    fontSize: FontSize.size_base,
  },
  indoorcurrentChild7: {
    top: 401,
    left: 134,
  },
  emptySlots1: {
    top: 415,
    left: 142,
  },
  groupChild1: {
    borderRadius: Border.br_12xl,
    height: 175,
    backgroundColor: Color.yellow,
    left: 0,
    top: 0,
    position: "absolute",
  },
  emptySlots2: {
    width: 107,
    height: 124,
    left: 8,
    fontSize: FontSize.size_base,
    top: 19,
    color: Color.black,
  },
  rectangleGroup: {
    top: 354,
    left: 255,
    position: "absolute",
  },
  pm1: {
    left: 177,
  },
  pm2: {
    left: 298,
  },
  cumHarv: {
    top: 367,
    left: 150,
    fontSize: FontSize.size_base,
  },
  indoorcurrentChild8: {
    left: 14,
    position: "absolute",
  },
  pm3: {
    left: 56,
  },
  indoorcurrentChild9: {
    left: 134,
    position: "absolute",
  },
  indoorcurrentChild10: {
    top: 605,
    height: 197,
    width: 120,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.gainsboro,
  },
  andreParisCosby1: {
    top: 638,
    left: 18,
  },
  indoorcurrentChild11: {
    top: 717,
    left: 13,
  },
  emptySlots3: {
    top: 731,
    left: 21,
    fontSize: FontSize.size_base,
  },
  indoorcurrentChild12: {
    top: 674,
    left: 133,
  },
  emptySlots4: {
    top: 688,
    left: 141,
  },
  rectangleContainer: {
    top: 627,
    height: 175,
    width: 121,
  },
  pm4: {
    left: 176,
  },
  pm5: {
    left: 297,
  },
  cumHarv1: {
    top: 640,
    left: 149,
    fontSize: FontSize.size_base,
  },
  indoorcurrentChild13: {
    left: 19,
  },
  am: {
    left: 61,
  },
  indoorcurrentChild14: {
    left: 139,
  },
  indoorcurrentChild15: {
    left: 259,
  },
  jamesRaresAbs: {
    top: 911,
    left: 23,
  },
  indoorcurrentChild16: {
    left: 138,
  },
  emptySlots6: {
    left: 146,
  },
  indoorcurrentChild17: {
    left: 259,
  },
  emptySlots7: {
    left: 267,
  },
  am1: {
    left: 181,
  },
  am2: {
    left: 302,
  },
  aliAbaan: {
    left: 154,
  },
  eliottLewis: {
    left: 273,
  },
  groupIcon: {
    top: 1110,
    height: 35,
  },
  groupChild3: {
    left: 0,
    top: 0,
    backgroundColor: Color.darkslateblue,
  },
  today: {
    top: 10,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    left: 0,
  },
  groupView: {
    top: 1103,
    left: 150,
  },
  indoorcurrentChild18: {
    top: 1166,
    borderRadius: Border.br_28xl,
    width: 125,
    left: 134,
    backgroundColor: Color.gainsboro,
  },
  submit: {
    top: 1181,
    left: 166,
    fontSize: FontSize.size_base,
  },
  indoorcurrent: {
    flex: 1,
    width: "100%",
    height: 1250,
    backgroundColor: Color.darkslateblue,
  },
});

export default IndoorCurrent;