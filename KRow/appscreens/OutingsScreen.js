import React from 'react';
import { Text, View, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import { auth, db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

function OutingsScreen({route, navigation}) {
    const { styleSizing, styleTheme } = route.params;

    const [dateStart, setDateStart] = React.useState(moment().startOf('week'));
    const [dateStartTitle, setDateStartTitle] = React.useState(dateStart.format('DD MMM'));

    const [dateEnd, setDateEnd] = React.useState(moment().endOf('week'));
    const [dateEndTitle, setDateEndTitle] = React.useState(dateEnd.format('DD MMM'));

    const outingDocRef = doc(db, 'profile', auth.currentUser.uid);
    const [outingsDoc, setOutingsDoc] = React.useState([]);

    let dateList = [];

    const setOutingDateValues = () => {
      let tempDate = dateStart.clone();
      for (let i = 0; i < 7; i++) {
        dateList[i] = tempDate.add(1, 'days').format('ddd DD MMMM YYYY');
      }
      setDates(dateList);
    }

    React.useEffect(() => {

      setOutingDateValues();

      const unsubscribe = onSnapshot(outingDocRef, (snapshot) => {
        if (snapshot.exists()) {
          const outings = snapshot.data().outings;
          let tempList = [];
          for (let i = 0; i < outings.count; i++) {
            tempList[i] = outings[`outing ${i + 1}`];
            const tempDate = moment(tempList[i].datetime.toDate());
            tempList[i].time = tempDate.format('h:mm a');
            tempList[i].datetime = tempDate.format('ddd DD MMMM YYYY');
          }
          setOutingsDoc(tempList);
        }
      });
  
      return () => {
        unsubscribe();
      };
    }, []);

    const [dates, setDates] = React.useState(dateList);
    const [reRenderDates, setReRenderDates] = React.useState(false);
    
    const RenderOutings = ({item, date}) => {

      const [show, setShow] = React.useState(false);

      if (item.datetime == date) {

        return(
          <View> 
             <TouchableOpacity style={{backgroundColor: 'black', marginVertical: 5, }} 
             onPress = {() => {
              setShow(!show)
             }} >
              <Text style = {[styleSizing.titles, styleTheme.titles, {textAlign: 'left', margin: 8}]} >
            Outing at {item.time} (Click for Details)
            </Text>
            </TouchableOpacity>
            { show ? <Text style = {[styleSizing.titles, styleTheme.titles, {textAlign: 'left', margin: 8}]} >
        Crew: {item.crew} {"\n"} Seat: {item.seat} {"\n"} Cox: {item.cox} 
            </Text> : null }
          </View>
      )
      }
    }

    const renderDates = ({item}) => {
      const date = item;

      return(
        <View>
          <Text style = {[styleSizing.titles, styleTheme.titles, 
            {textAlign: 'left', fontSize: 20, marginVertical: 5}]}>
            {date}</Text>

          <FlatList data = {outingsDoc}
          renderItem={({item}) => <RenderOutings item={item} date ={date}/>}
          />
        </View>
      )
    }

    return (
      <View style = {[styleSizing.container, styleTheme.container,]}>
        <View style = {{flex: 2,backgroundColor: "black",alignItems:'center', justifyContent: 'center',
        }}>
          <View
          style={{flex: 2, padding: 10, flexDirection: 'row',
          alignItems:'center', justifyContent: 'center', width:"100%", }}>
            <TouchableOpacity style={{flex:1}} onPress={ () => {
              setDateStart(dateStart.subtract(7, 'days'));
              setDateStartTitle(dateStart.format('DD MMM'));

              setDateEnd(dateEnd.subtract(7, 'days'));
              setDateEndTitle(dateEnd.format('DD MMM'));

              setOutingDateValues();
              setReRenderDates(!reRenderDates);
              } }>
              <Ionicons name='chevron-back-outline' color={'white'} size={32}/>
            </TouchableOpacity>

            <Text style = {[styleSizing.titles, styleTheme.titles,
            {fontSize: 25, textAlign:"center", flex:10}]}>
              {dateStartTitle} - {dateEndTitle}
            </Text>
            
            <TouchableOpacity style={{flex:1}} onPress={ () => {
              setDateStart(dateStart.add(7, 'days'));
              setDateStartTitle(dateStart.format('DD MMM'));
              
              setDateEnd(dateEnd.add(7, 'days'));
              setDateEndTitle(dateEnd.format('DD MMM'));

              setOutingDateValues();
              setReRenderDates(!reRenderDates);
              } }>
              <Ionicons name='chevron-forward-outline' color={'white'} size={32}/>
            </TouchableOpacity>

            </View>

            <View style = {{flex: 1}}>
              <TouchableOpacity onPress = {() => {
                setDateStart(moment().startOf('week'));
                setDateStartTitle(dateStart.format('DD MMM'));

                setDateEnd(moment().endOf('week'));
                setDateEndTitle(dateEnd.format('DD MMM'));

                setOutingDateValues();
                setReRenderDates(!reRenderDates);
              }}>
                <Text style = {[styleSizing.titles, styleTheme.titles]}>Current Date</Text>
              </TouchableOpacity>
            </View>

          </View>

          <View style={{flex: 15, padding: 20, width: '100%'}}>
            <FlatList data = {dates} renderItem={renderDates} extraData={reRenderDates}/>
          </View>

      </View>
    );
}

export default OutingsScreen;

