import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

/** This page --> Reach Developers
 * Located on --> Top left button or text pressed
 * 
 * Menu tab includes additional features users can do such as:
 * - Forms
 * - Crews & Data
 * - Socials and More
 * - Reach Developers
 * - About Us
*/



const MenuBarSelected = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menubarselected}>
      <View style={styles.menubarselectedChild} />
      <Text style={styles.kclbcApp}>KCLBC APP</Text>
      <Image
        style={styles.menubarselectedItem}
        contentFit="cover"
        source={require("../assets/rectangle-103.png")}
      />
      <View style={[styles.menubarselectedInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={styles.menubarselectedChild1} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
      </View>
      <Image
        style={styles.rowingBoatIconSetIsolated}
        contentFit="cover"
        source={require("../assets/rowingboaticonsetisolatedolympicclassesvector27469003-3.png")}
      />
      <Image
        style={styles.unknown1Icon}
        contentFit="cover"
        source={require("../assets/unknown-2.png")}
      />
      <Image
        style={styles.rowingBoatIconSetIsolated1}
        contentFit="cover"
        source={require("../assets/rowingboaticonsetisolatedolympicclassesvector27469003-2.png")}
      />
      <Text style={[styles.forms, styles.formsTypo]}>FORMS</Text>
      <Pressable
        style={[styles.socialsAndMoreContainer, styles.reachDevelopersPosition]}
        onPress={() => navigation.navigate("SocialFeed2")}
      >
        <Text style={styles.socialsAndMoreTypo}>SOCIALS AND MORE</Text>
      </Pressable>
      <Text style={[styles.crewData, styles.formsTypo]}>{`CREW & DATA`}</Text>
      <Text style={[styles.aboutUs, styles.formsTypo]}>ABOUT US</Text>
      <Text style={[styles.reachDevelopers, styles.socialsAndMoreTypo]}>
        REACH DEVELOPERS
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    height: 100,
    borderRadius: Border.br_71xl,
    width: 393,
    position: "absolute",
  },
  groupLayout: {
    height: 11,
    width: 257,
    left: 0,
    position: "absolute",
  },
  formsTypo: {
    height: 31,
    width: 190,
    fontFamily: FontFamily.interBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
    left: 23,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  reachDevelopersPosition: {
    left: 23,
    position: "absolute",
  },
  socialsAndMoreTypo: {
    fontSize: FontSize.size_lg,
    height: 31,
    width: 190,
    fontFamily: FontFamily.interBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
    textAlign: "left",
    color: Color.white,
  },
  menubarselectedChild: {
    height: 56,
    width: 393,
    backgroundColor: Color.gray,
    left: 0,
    top: 0,
    position: "absolute",
  },
  kclbcApp: {
    top: 16,
    left: 266,
    fontFamily: FontFamily.interRegular,
    width: 116,
    height: 29,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.white,
    position: "absolute",
  },
  menubarselectedItem: {
    top: 326,
    height: 108,
    borderRadius: Border.br_71xl,
    width: 393,
    left: 0,
    position: "absolute",
  },
  menubarselectedInner: {
    top: 460,
    left: -2,
    backgroundColor: Color.white,
  },
  rectangleView: {
    marginTop: 171,
    marginLeft: -197,
    top: "50%",
    left: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: Color.yellow,
  },
  menubarselectedChild1: {
    borderRadius: 22,
    width: 222,
    height: 855,
    backgroundColor: Color.gray,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 45,
    backgroundColor: Color.yellow,
  },
  groupItem: {
    top: 22,
    backgroundColor: Color.gainsboro,
  },
  groupInner: {
    backgroundColor: Color.crimson,
    top: 0,
    height: 11,
  },
  rectangleParent: {
    width: 257,
    height: 56,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rowingBoatIconSetIsolated: {
    top: 277,
    left: 170,
    borderRadius: Border.br_92xl,
    width: 280,
    height: 222,
    position: "absolute",
  },
  unknown1Icon: {
    top: 463,
    left: 262,
    width: 96,
    height: 94,
    position: "absolute",
  },
  rowingBoatIconSetIsolated1: {
    top: 542,
    left: 186,
    borderRadius: Border.br_89xl,
    width: 228,
    height: 216,
    position: "absolute",
  },
  forms: {
    top: 85,
    color: Color.gainsboro,
  },
  socialsAndMoreContainer: {
    top: 175,
  },
  crewData: {
    top: 130,
    color: Color.white,
    width: 190,
    fontFamily: FontFamily.interBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
  },
  aboutUs: {
    top: 265,
    color: Color.white,
    width: 190,
    fontFamily: FontFamily.interBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
  },
  reachDevelopers: {
    top: 220,
    left: 23,
    position: "absolute",
  },
  menubarselected: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default MenuBarSelected;