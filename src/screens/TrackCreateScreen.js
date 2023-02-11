import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, View } from 'react-native';


const Map =() =>{
  let points = [];
  
  for( let i = 0; i < 20; i++){
    points.push({
      latitude: 12.978 + i * 0.001,
      longitude: 77.64 + i * 0.001
    })
  }
  return(
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       initialRegion={{
        latitude: 12.978,
        longitude: 77.64,
        latitudeDelta: 0.01,
        longitudeDelta:0.01,
       }}
     >
      <Polyline coordinates={points} />
     </MapView>
   </View>
)}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

 export default Map