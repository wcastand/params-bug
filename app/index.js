import { Link, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Home(){
  const params = useLocalSearchParams()

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>{params?.note ?? ''}</Text>
      <Link href={{pathname:'/', params:{note:'++test++'}}}>link with + as params</Link>    
      <Link href={{pathname:'/', params:{note:'%2B%2Btest%2B%2B'}}}>link with + as params encoded</Link>
    </View>
  )
}