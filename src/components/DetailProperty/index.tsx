import { Feather } from '@expo/vector-icons'
import React, {useState} from 'react'
import { View, Text } from 'react-native'

function index() {
    const [details, setDetails] = useState<string[]>(
        ["Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti"
    ,"İçindekiler","Besin Değerleri","Kullanım","Ek Bilgiler"]
    )

    const TextComponent = ({detail,index}:{detail:string, index:number}) => {
        return(
            <View style={{
                paddingVertical: 12,
                borderBottomWidth: index === details.length -1 ? 0 : 1.5,
                borderBottomColor: 'lightgray',
                flexDirection: 'row',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
                <Text style={{
                    color: index=== 0 ? "black" :'#687482', 
                    fontSize: index === 0 ? 10.5 : 13,
                    fontWeight: index=== 0 ? '400' : '700'}}>{detail}</Text>
                        {index != 0 && <Feather name="chevron-down" size={24} color="#9F9F9F" />}
            </View>
        )
    }
  return (
    <View style={{
        backgroundColor:'white',
        paddingHorizontal: 16,
        paddingVertical: 8
        }}>
        {details.map((item, index) => (
            <TextComponent key={index} index={index} detail={item}/>
            
        ))}

    </View>
  )
}

export default index
