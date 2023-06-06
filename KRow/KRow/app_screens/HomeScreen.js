import {useEffect, useState} from 'react';
import { Text, View} from 'react-native';
import {db, auth} from '../firebase';
import {getDocs, collection} from 'firebase/firestore';

function HomeScreen({route}) {

    const { styleSizing, styleTheme } = route.params;

    const [profile, setProfileInfo] = useState([]);

    const profileCollectionRef = collection(db, 'profile');

    useEffect(() => {
      const getProfileInfo =  async () => {
        try {
          const data = await getDocs(profileCollectionRef);
          setProfileInfo(data.docs.map(doc => ({
            ...doc.data(),
            userid: doc.userid,
          })));
          console.log(profile);
        } catch (err) {
          console.log(err);
        }
      };

      getProfileInfo();
    }, []);

  return (
    <View style={[styleSizing.container, styleTheme.container]}>
      <Text style={[styleSizing.title, styleTheme.title]}>
        qwer
      </Text>
    </View>
  );
}

export default HomeScreen;

