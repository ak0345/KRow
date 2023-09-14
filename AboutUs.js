import React from 'react';
import { Text, View, Image, ScrollView} from 'react-native';
import { commonStyles } from'./App.js' ; 

// This page is about history of kclbc, current committee members and why this app is developed


//////////////////////////////////////////******////////////////////////////////////////////////////////////
/////////////////////////////// Define your team history content ///////////////////////////////////////////
//////////////////////////////////////////******////////////////////////////////////////////////////////////

const TeamHistory = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>History of the Team</Text>
    <Text style={styles.sectionContent}>
    <Text style={styles.memberRole}></Text>
    <Text style={styles.memberNumber}></Text>

    Welcome to King's College London Boat Club incorporating Guys and St Thomas' Hospitals.
The aim of the club is to involve people of all standards, all genders and all heights in rowing, and we aim to cater for those who want to row socially and competitively alike. Our fleet of Filippis, Empachers, Sims, Janouseks and Aylings: 4’s and 8’s is housed at the celebrated Tideway Scullers School providing a prestigious backdrop from which to train. We provide coaching for the Senior and Novice squads both on and off the water. For the brave, we have an ergo suite on campus as well as running gym and circuits sessions each week.
The club is involved in international competitions such as Henley Royal Regatta and the Head of the River race, as well as competing at BUCS and taking a mini-tour to Cambridge at the start of the year which serves as a chance for the squad to bond and start to compete.
Closer to home we have the United Hospitals competitions involving all the London medical schools. We compete throughout the year and are very competitive in all the competitions, having won the Victor Ludorum at the Allom Cup and securing headships in 7 of the 8 classes at the UH bumps (probably one of the greatest events in world rowing).
There are also opportunities for beginners and social rowers to compete in all the UH events, the novice sprints in December and the Cambridge winter head, as well as chances to go pot hunting at the various tideway events throughout the year.
Off the water, on Wednesday nights, we join the other sports clubs and head to Guys Bar. We also host other socials throughout the year such as curry nights, the Christmas dinner, fancy dress, Cocktail night and of course our annual AGM.
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
      <Text style={styles.memberRole}>Senior Women's Captain</Text>
      <Text style={styles.memberNumber}> +44 7568 311479 </Text>
    </View>
   
    <View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Andriz.jpg')}
        style={styles.memberImage}
      />
      <Text style={styles.memberName}>Andre Grady</Text>
      <Text style={styles.memberRole}>Senior Men's Captain</Text>
      <Text style={styles.memberNumber}> +44 7895 391565 </Text>
    </View>

  <View style={styles.memberContainer}>
  <Image
    source={require('./committeeMembers/Committee_ABS.jpg')} 
    style={styles.memberImage}
  />
  <Text style={styles.memberName}>Abhishek Rao Chibili</Text>
  <Text style={styles.memberRole}>Treasurer</Text>
  <Text style={styles.memberNumber}> +44 7446 831004 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Ali.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Muhammad Ali Khan</Text>
    <Text style={styles.memberRole}>Social Secretary</Text>
    <Text style={styles.memberNumber}> +44 7495 538228 </Text>
</View>
  

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Ata.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Ata Senpolat</Text>
    <Text style={styles.memberRole}>Secretary</Text>
    <Text style={styles.memberNumber}> +44 7555 289146 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Barbs.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Barbara Henry</Text>
    <Text style={styles.memberRole}>Kit Secretary</Text>
    <Text style={styles.memberNumber}> +31 6 22973495 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Charlie.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Charlie Richards</Text>
    <Text style={styles.memberRole}>Club Captain</Text>
    <Text style={styles.memberNumber}> +44 7718 837679 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Connor.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Connor Leslie</Text>
    <Text style={styles.memberRole}>Fundraising & Alumni Officer</Text>
    <Text style={styles.memberNumber}> +44 7734 074903 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Fay.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Fay Bennnett</Text>
    <Text style={styles.memberRole}> Fresher Women's Captain</Text>
    <Text style={styles.memberNumber}> +44 7548 329512 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Flavie.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Flavie Derville</Text>
    <Text style={styles.memberRole}>Senior Women's Vice Captain</Text>
    <Text style={styles.memberNumber}> +44 7563 245495 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Hannah.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Hannah Foster</Text>
    <Text style={styles.memberRole}>Heaalth & Welfare Officer</Text>
    <Text style={styles.memberNumber}> +44 7713 116178 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Henry.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Henry Tyrer</Text>
    <Text style={styles.memberRole}>Boatswain</Text>
    <Text style={styles.memberNumber}> +44 7564 186948 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_JSchlong.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>James Ong</Text>
    <Text style={styles.memberRole}>Fresher Men's Captain</Text>
    <Text style={styles.memberNumber}> +60 16-553 4265 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Kadi.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Kadi Brunton-Douglas</Text>
    <Text style={styles.memberRole}>Coxes Captain</Text>
    <Text style={styles.memberNumber}> +44 7483 236017 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Kress.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Emily Kress</Text>
    <Text style={styles.memberRole}>Fresher Women's Vice Captain</Text>
    <Text style={styles.memberNumber}> +44 7554 898853 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Lewis.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Lewis Power</Text>
    <Text style={styles.memberRole}>Fresher Men's Vice Captain</Text>
    <Text style={styles.memberNumber}> +44 7513 719245 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Morgan.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Morgan Bailey</Text>
    <Text style={styles.memberRole}>GKT Liaison Officer</Text>
    <Text style={styles.memberNumber}> +44 7377 545460 </Text>
</View>

<View style={styles.memberContainer}>
      <Image
        source={require('./committeeMembers/Committee_Pariz.jpg')} 
        style={styles.memberImage}
      />
    <Text style={styles.memberName}>Paris Benjamin</Text>
    <Text style={styles.memberRole}>Senior Men's Vice Captain</Text>
    <Text style={styles.memberNumber}> +44 7825 654411 </Text>
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

    We are five computer science students who started this club as freshmen and learned how to row from scratch. Among the many things that the development team shares is a desire to improve our society and strengthen our connection here.

We observed the complications that arose when each committee member attempted to manage their responsibilities using spreadsheets. Drawing from that experience in our own year, we resolved to address this issue by creating an app to assist our community.

    </Text>
  </View>
);
//////////////////////////////////////////******////////////////////////////////////////////////////////////
///////////////////// Combine all sections in the About Us screen //////////////////////////////////////////
//////////////////////////////////////////******////////////////////////////////////////////////////////////

const AboutUsScreen = () => (
  <ScrollView style={commonStyles.container}>
    <Text style={commonStyles.title}>About Us</Text>
    <TeamHistory />
    <CommitteeMembers />
    <AppExplanation />
  </ScrollView>
);

export default AboutUsScreen;
