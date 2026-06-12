import { TabActions } from "@react-navigation/native";
import { Stack ,Tabs } from "expo-router";
import {User,House} from 'lucide-react-native'
export default function _layout() {
  return (
    <Tabs  screenOptions={{headerShown:false}}>
      <Tabs.Screen name="index" 
        options={{
        title:'index',
        tabBarActiveTintColor:'#C94B66',
        tabBarIcon:({color,size})=>(
          <House color='#C94B66' size={size}/>
        )
        
      }}/>
      
      <Tabs.Screen name="profile" 
      options={{
        title:'profile',
        tabBarActiveTintColor:'#C94B66',
        tabBarIcon:({color,size})=>(
          < User color='#C94B66' size={size}/>
        )
        
      }}/>

      <Tabs.Screen name="section" 
      options={{
        href:null,
        tabBarStyle: { display: 'none' },
      }}/>
      
    </Tabs>
  );
}


 
