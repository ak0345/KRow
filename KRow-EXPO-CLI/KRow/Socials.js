import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

/** This page --> Socials and More
 * Located on --> Menu Bar
 * 
 * This page will be editted by the social sec only.
 * When this page editted, club wide notification will be send
 * Will be use for promoting socials and in person activities
 */



const SocialFeed = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.socialfeed}>
      <View style={styles.socialfeedChild} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupInnerBg]} />
      </View>
      <Pressable
        style={styles.social}
        onPress={() => navigation.navigate("WeclomeMenu")}
      >
        <Text style={[styles.social1, styles.socialTypo]}>SOCIAL</Text>
      </Pressable>
      <Image
        style={styles.passpaortpic1Icon}
        contentFit="cover"
        source={require("../assets/passpaortpic-11.png")}
      />
      <Image
        style={styles.bellIcon1}
        contentFit="cover"
        source={require("../assets/bell-icon-1.png")}
      />
      <View style={[styles.socialfeedItem, styles.groupInnerBg]} />
      <Text style={[styles.socialFeed, styles.socialTypo]}>SOCIAL FEED</Text>
      <Pressable
        style={[styles.socialfeedInner, styles.socialfeedLayout]}
        onPress={() => navigation.navigate("SocialFeed")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.socialfeedChild1, styles.rectangleViewLayout]} />
      <View style={[styles.socialfeedChild2, styles.socialfeedChildLayout1]} />
      <View style={[styles.socialfeedChild3, styles.socialfeedChildLayout1]} />
      <View style={[styles.socialfeedChild4, styles.socialfeedLayout]} />
      <Text style={[styles.summerDinner, styles.varistyTypo]}>
        SUMMER DINNER
      </Text>
      <Text style={[styles.kingsRun, styles.varistyTypo]}>KINGS RUN</Text>
      <Text style={[styles.alumniRegatta, styles.varistyTypo]}>
        ALUMNI REGATTA
      </Text>
      <Text style={[styles.gbThemeIs, styles.gbThemeIsTypo]}>{`GB Theme is up:
(05/04)`}</Text>
      <Text style={[styles.hourRowing, styles.varistyTypo]}>
        24 Hour Rowing
      </Text>
      <Text style={[styles.varisty, styles.varistyTypo]}>VARISTY!!</Text>
      <View style={[styles.socialfeedChild5, styles.socialfeedChildLayout]} />
      <View style={[styles.socialfeedChild6, styles.socialfeedChildLayout]} />
      <Text style={[styles.memeWeekIsContainer, styles.varistyTypo]}>
        {`MEME WEEK IS `}BACK!!
      </Text>
      <Text style={[styles.uclBoatBall, styles.varistyTypo]}>
        UCL BOAT BALL
      </Text>
      <View style={[styles.socialfeedChild7, styles.socialfeedChild7Layout]} />
      <Pressable
        style={[styles.rectanglePressable, styles.socialfeedChild7Layout]}
        onPress={() => navigation.navigate("SocialFeed1")}
      />
      <Text style={[styles.lastHeadSocial, styles.varistyTypo]}>{`LAST HEAD 
SOCIAL`}</Text>
      <Text style={[styles.drySocial, styles.gbThemeIsTypo]}>DRY Social</Text>
      <Pressable
        style={[styles.file1, styles.iconPosition1]}
        onPress={() => navigation.navigate("SocialFeed")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/file-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.unknown11Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/unknown1-1.png")}
      />
      <Image
        style={[styles.unknown71Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/unknown7-1.png")}
      />
      <Pressable
        style={styles.unknown31}
        onPress={() => navigation.navigate("SocialFeed1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/unknown3-1.png")}
        />
      </Pressable>
      <Image
        style={styles.unknown61Icon}
        contentFit="cover"
        source={require("../assets/unknown6-1.png")}
      />
      <Image
        style={[styles.unknown101Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/unknown10-1.png")}
      />
      <Image
        style={[styles.unknown81Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/unknown8-1.png")}
      />
      <Image
        style={styles.unknown51Icon}
        contentFit="cover"
        source={require("../assets/unknown5-1.png")}
      />
      <Image
        style={styles.unknown4Icon}
        contentFit="cover"
        source={require("../assets/unknown-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 4,
    width: 22,
    left: 0,
  },
  groupInnerBg: {
    backgroundColor: Color.crimson,
    position: "absolute",
  },
  socialTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interRegular,
  },
  socialfeedLayout: {
    height: 150,
    width: 175,
    backgroundColor: Color.white,
    top: 220,
    position: "absolute",
  },
  rectangleViewLayout: {
    top: 441,
    height: 150,
    width: 175,
    backgroundColor: Color.white,
    borderRadius: Border.br_64xl,
    position: "absolute",
  },
  socialfeedChildLayout1: {
    top: 659,
    height: 150,
    width: 175,
    backgroundColor: Color.white,
    borderRadius: Border.br_64xl,
    position: "absolute",
  },
  varistyTypo: {
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  gbThemeIsTypo: {
    left: 244,
    color: Color.darkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  socialfeedChildLayout: {
    top: 877,
    height: 150,
    width: 175,
    backgroundColor: Color.white,
    borderRadius: Border.br_64xl,
    position: "absolute",
  },
  socialfeedChild7Layout: {
    top: 1074,
    height: 150,
    width: 175,
    backgroundColor: Color.white,
    borderRadius: Border.br_64xl,
    position: "absolute",
  },
  iconPosition1: {
    left: 16,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  iconPosition: {
    left: 228,
    position: "absolute",
  },
  socialfeedChild: {
    backgroundColor: Color.gray,
    width: 393,
    height: 56,
    left: 0,
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
  social1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interRegular,
  },
  social: {
    left: 47,
    top: 18,
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
  socialfeedItem: {
    top: 93,
    left: 56,
    width: 281,
    height: 80,
    borderRadius: Border.br_64xl,
  },
  socialFeed: {
    top: 113,
    left: 94,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  socialfeedInner: {
    borderRadius: Border.br_56xl,
    left: 0,
  },
  rectangleView: {
    left: 0,
  },
  socialfeedChild1: {
    left: 218,
  },
  socialfeedChild2: {
    left: 0,
  },
  socialfeedChild3: {
    left: 218,
  },
  socialfeedChild4: {
    left: 218,
    borderRadius: Border.br_64xl,
  },
  summerDinner: {
    top: 250,
    left: 20,
    color: Color.darkslateblue,
  },
  kingsRun: {
    top: 231,
    left: 262,
  },
  alumniRegatta: {
    top: 468,
    left: 19,
  },
  gbThemeIs: {
    top: 459,
  },
  hourRowing: {
    top: 679,
    left: 22,
  },
  varisty: {
    top: 670,
    left: 268,
  },
  socialfeedChild5: {
    left: 0,
  },
  socialfeedChild6: {
    left: 218,
  },
  memeWeekIsContainer: {
    top: 886,
    left: 29,
  },
  uclBoatBall: {
    top: 887,
    left: 245,
  },
  socialfeedChild7: {
    left: 0,
  },
  rectanglePressable: {
    left: 218,
  },
  lastHeadSocial: {
    top: 1078,
    left: 43,
  },
  drySocial: {
    top: 1094,
  },
  icon: {
    borderRadius: Border.br_24xl,
  },
  file1: {
    top: 269,
    width: 141,
    height: 96,
  },
  unknown11Icon: {
    top: 493,
    width: 156,
    height: 94,
    borderRadius: Border.br_64xl,
  },
  unknown71Icon: {
    top: 487,
    width: 143,
    height: 104,
    borderRadius: Border.br_64xl,
  },
  icon1: {
    borderRadius: Border.br_35xl,
  },
  unknown31: {
    left: 231,
    top: 1116,
    width: 149,
    height: 108,
    position: "absolute",
  },
  unknown61Icon: {
    top: 906,
    left: 249,
    borderRadius: Border.br_6xl,
    width: 119,
    height: 120,
    position: "absolute",
  },
  unknown101Icon: {
    top: 692,
    borderRadius: Border.br_493xl,
    width: 155,
    height: 117,
  },
  unknown81Icon: {
    top: 920,
    borderRadius: Border.br_16xl,
    width: 142,
    height: 107,
  },
  unknown51Icon: {
    top: 1113,
    left: 5,
    borderRadius: Border.br_35xl_5,
    width: 163,
    height: 112,
    position: "absolute",
  },
  unknown4Icon: {
    top: 264,
    left: 220,
    borderRadius: Border.br_495xl,
    width: 176,
    height: 106,
    position: "absolute",
  },
  socialfeed: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    height: 1250,
    overflow: "hidden",
    width: "100%",
  },
});

export default SocialFeed;