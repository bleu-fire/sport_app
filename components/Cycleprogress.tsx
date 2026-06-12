import { AnimatedCircularProgress } from 'react-native-circular-progress'
import {StyleSheet ,Text} from "react-native"
function Cycleprogress() {
  return (
        <AnimatedCircularProgress 
        size={200} 
        width={20}
        fill={20}
       tintColor="#E9647E"
       backgroundColor="rgb(19, 20, 20)"
    >
      {(fill:any) => (
        <Text style={styles.Text}>
          {Math.round(fill)}
        </Text>
      )}
    </AnimatedCircularProgress>
  );
}

export default Cycleprogress

const styles =  StyleSheet.create({
    Text:{ fontSize:24
        , fontWeight: 'bold'
        , color: '#E9647E' }
})