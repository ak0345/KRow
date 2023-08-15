import React from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

// This page is about history of kclbc, current committee members and developers of the app


//////////////////////////////////////////******////////////////////////////////////////////////////////////
/////////////////////////////// Define your team history content ///////////////////////////////////////////
//////////////////////////////////////////******////////////////////////////////////////////////////////////

const TeamHistory = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>History of the Team</Text>
    <Text style={styles.sectionContent}>

    Welcome to King's College London Boat Club incorporating Guys and St Thomas' Hospitals.
The aim of the club is to involve people of all standards, all genders and all heights in rowing, and we aim to cater for those who want to row socially and competitively alike. Our fleet of Filippis, Empachers, Sims, Janouseks and Aylings: 4’s and 8’s is housed at the celebrated Tideway Scullers School providing a prestigious backdrop from which to train. We provide coaching for the Senior and Novice squads both on and off the water. For the brave, we have an ergo suite on campus as well as running gym and circuits sessions each week.
The club is involved in international competitions such as Henley Royal Regatta and the Head of the River race, as well as competing at BUCS and taking a mini-tour to Cambridge at the start of the year which serves as a chance for the squad to bond and start to compete.
Closer to home we have the United Hospitals competitions involving all the London medical schools. We compete throughout the year and are very competitive in all the competitions, having won the Victor Ludorum at the Allom Cup and securing headships in 7 of the 8 classes at the UH bumps (probably one of the greatest events in world rowing).
There are also opportunities for beginners and social rowers to compete in all the UH events, the novice sprints in December and the Cambridge winter head, as well as chances to go pot hunting at the various tideway events throughout the year.
Off the water, on Wednesday nights, we join the other sports clubs and head to Guys Bar. We also host other socials throughout the year such as curry nights, the Christmas dinner, fancy dress, Cocktail night and of course our annual AGM.
Considering the history of KCLBC in Henley, 
Overall Kings is a friendly and dynamic club. We welcome members of any ability to come along and are always happy to hear from people who want to get involved. For further information visit our website, ask questions on the message board or email us. We look forward to hearing from you and seeing you on the water.

    </Text>
  </View>
);
///////////////////////////////////////*******///////////////////////////////////////////////
/////////////////////    Define your current committee members and pictures   //////////////
//////////////////////////////////////********//////////////////////////////////////////////
const CommitteeMembers = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Current Committee Members</Text>
    <View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Jaz.jpg')} 
        style={styles.memberImage}
      />
      <Text style={styles.memberName}>Jasmine Moore</Text>
    </View>
   
    <View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Andriz.jpg')}
        style={styles.memberImage}
      />
      <Text style={styles.memberName}>Andre Grady</Text>
    </View>

  <View style={styles.memberContainer}>
  <Image
    source={require('./committeeMembers/Committee_ABS.jpg')} 
    style={styles.memberImage}
  />
  <Text style={styles.memberName}>Abhishek Rao Chibili</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Ali.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Muhammad Ali Khan</Text>
</View>
  

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Ata.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Ata Senpolat</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Charlie.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Charlie Richards</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Connor.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Connor Leslie</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Fay.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Fay Bennnett</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Flavie.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Flavie Derville</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Hannah.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Hannah Foster</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Henry.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Henry Tyrer</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_JSchlong.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>James Ong</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Kadi.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Kadi Brunton-Douglas</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Kress.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Emily Kress</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Lewis.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Lewis Power</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Morgan.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Morgan Bailey</Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Pariz.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Paris Benjamin</Text>
</View>
  </View>
);



//////////////////////////////////////////******////////////////////////////////////////////////////////////
//////////////////////// Define the explanation of the app /////////////////////////////////////////////////
//////////////////////////////////////////******////////////////////////////////////////////////////////////

const AppExplanation = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>App Explanation</Text>
    <Text style={styles.sectionContent}>

      Welcome to our app! We are a passionate team dedicated to creating amazing experiences for our fellow members.
      We are 5 computer science students and we all started this club as a fresher and learnt how to row from scratch. One of many things this development team has in common is the way we want to improve our society as well as our connection to here. 

      We saw how complicated it gets when every committee member tries to use a spreadsheet to manage their side of the story. With that experienced in our year, we decided to solve this problem by building an app to help our community. 

    </Text>
  </View>
);
//////////////////////////////////////////******////////////////////////////////////////////////////////////
///////////////////// Combine all sections in the About Us screen //////////////////////////////////////////
//////////////////////////////////////////******////////////////////////////////////////////////////////////

const AboutUsScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>About Us</Text>
    <TeamHistory />
    <CommitteeMembers />
    <AppExplanation />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  memberName: {
    fontSize: 16,
  },
});

export default AboutUsScreen;
