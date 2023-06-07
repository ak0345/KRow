import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-internalNav/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

/** This page --> Home Screen
 * Main screen and after we log in we will see this page.
 * Everytime KCLBC APP Button on top left pressed, we will be navigated here 
 *
*/

const HomeScreen = () => {
  const internalNav = useNavigation();

    return (
      <View style={styles.weclomemenu}>
        <View style={styles.weclomemenuChild} />
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
        <Text style={styles.kclbcApp}>KCLBC APP</Text>
        <View style={[styles.weclomemenuItem, styles.weclomemenuLayout]} />
        <View style={[styles.weclomemenuInner, styles.weclomemenuLayout]} />
        <Text style={[styles.indoorTraining, styles.availabilityTypo]}>
          INDOOR TRAINING
        </Text>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Pressable
          style={[styles.crewsDocument, styles.availabilityPosition]}
          onPress={() => navigation.navigate("CrewsDay3")}
        >
          <Text style={styles.crewsDocument1}>CREWS DOCUMENT</Text>
        </Pressable>
        <Text style={[styles.availability, styles.availabilityPosition]}>
          AVAILABILITY
        </Text>
        <Image
          style={styles.rowingBoatIconSetIsolated}
          contentFit="cover"
          source={require("../assets/rowingboaticonsetisolatedolympicclassesvector27469003-2.png")}
        />
        <Image
          style={styles.rowingBoatIconSetIsolated1}
          contentFit="cover"
          source={require("../assets/rowingboaticonsetisolatedolympicclassesvector27469003-3.png")}
        />
        <Image
          style={styles.passpaortpic1Icon}
          contentFit="cover"
          source={require("../assets/passpaortpic-1.png")}
        />
        <Image
          style={styles.unknown2Icon}
          contentFit="cover"
          source={require("../assets/unknown-2.png")}
        />
        <Image
          style={styles.bellIcon1}
          contentFit="cover"
          source={require("../assets/bell-icon-2.png")}
        />
        <Image
          style={styles.unknown3Icon}
          contentFit="cover"
          source={require("../assets/unknown-3.png")}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    groupLayout: {
      height: 4,
      width: 22,
      left: 0,
      position: "absolute",
    },
    weclomemenuLayout: {
      height: 100,
      borderRadius: Border.br_71xl,
      width: 393,
      position: "absolute",
    },
    availabilityTypo: {
      color: Color.black,
      fontSize: FontSize.size_5xl,
      textAlign: "left",
      fontFamily: FontFamily.interRegular,
    },
    availabilityPosition: {
      left: 42,
      position: "absolute",
    },
    weclomemenuChild: {
      backgroundColor: Color.gray,
      height: 56,
      width: 393,
      left: 0,
      top: 0,
      position: "absolute",
    },
    groupChild: {
      top: 19,
      backgroundColor: Color.yellow,
    },
    groupItem: {
      top: 9,
      backgroundColor: Color.gainsboro,
    },
    groupInner: {
      backgroundColor: Color.crimson,
      top: 0,
      height: 4,
    },
    rectangleParent: {
      top: 14,
      left: 20,
      height: 23,
      width: 22,
      position: "absolute",
    },
    kclbcApp: {
      top: 18,
      left: 47,
      fontSize: FontSize.size_base,
      color: Color.white,
      textAlign: "left",
      fontFamily: FontFamily.interRegular,
      position: "absolute",
    },
    weclomemenuItem: {
      marginTop: 166,
      marginLeft: -196.5,
      top: "50%",
      left: "50%",
      borderStyle: "solid",
      borderColor: "#000",
      borderWidth: 1,
      backgroundColor: Color.yellow,
    },
    weclomemenuInner: {
      top: 459,
      backgroundColor: Color.white,
      left: 0,
      height: 100,
    },
    indoorTraining: {
      top: 494,
      left: 41,
      position: "absolute",
    },
    rectangleIcon: {
      top: 325,
      height: 108,
      borderRadius: Border.br_71xl,
      width: 393,
      left: 0,
      position: "absolute",
    },
    crewsDocument1: {
      color: Color.gray,
      width: 310,
      height: 35,
      fontSize: FontSize.size_5xl,
      textAlign: "left",
      fontFamily: FontFamily.interRegular,
    },
    crewsDocument: {
      top: 364,
    },
    availability: {
      top: 628,
      width: 222,
      height: 28,
      color: Color.black,
      fontSize: FontSize.size_5xl,
      textAlign: "left",
      fontFamily: FontFamily.interRegular,
    },
    rowingBoatIconSetIsolated: {
      top: 542,
      left: 189,
      borderRadius: Border.br_89xl,
      width: 228,
      height: 216,
      position: "absolute",
    },
    rowingBoatIconSetIsolated1: {
      top: 279,
      left: 178,
      borderRadius: Border.br_92xl,
      width: 280,
      height: 222,
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
    unknown2Icon: {
      top: 462,
      left: 264,
      width: 96,
      height: 94,
      position: "absolute",
    },
    bellIcon1: {
      top: 5,
      left: 255,
      width: 37,
      height: 48,
      position: "absolute",
    },
    unknown3Icon: {
      top: 94,
      left: 103,
      borderRadius: Border.br_64xl,
      width: 186,
      height: 166,
      position: "absolute",
    },
    weclomemenu: {
      backgroundColor: Color.darkslateblue,
      flex: 1,
      width: "100%",
      height: 852,
      overflow: "hidden",
    },
  });
  
  export default WeclomeMenu;

