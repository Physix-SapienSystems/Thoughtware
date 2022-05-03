import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {vh, vw} from 'react-native-css-vh-vw';
import Draggable from 'react-native-draggable';


const App = () => {
  const [loading, setloading] = useState(false);
  const [text, settext] = useState('');



  useEffect(() => {
  }, []);

  return (
    <ScrollView style={{backgroundColor:"white",height:vh(100)}}>
      <TouchableOpacity onPress={() => {
            Linking.openURL(`http://physix.world`);
          }} style={{marginVertical: vh(2)}}>
        <Image
          style={{
            width: vw(100),
            height: vh(10),
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'center',
          }}
          source={require("./assets/triangle.png")}
        />
      </TouchableOpacity>
      <View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>0</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={{fontWeight: 'bold', color: 'black',fontSize:25}}>-</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'black',
              margin: 8,
              padding: 3,
            }}>
            <View style={{zIndex: 5}}>
              <Draggable
                x={vh(5)}
                y={vh(2)}
                minX={0}
                minY={0}
                maxX={vh(30)}
                maxY={vh(30)}
                isCircle={true}>
                <Image
                  style={{
                    width: vh(6),
                    height: vh(6),
                    justifyContent: 'center',
                    alignItems: 'center',
                    aspectRatio: 1,
                    borderRadius: 500,
                    borderWidth: 2,
                    borderColor: 'black',
                    resizeMode: 'contain',
                  }}
                  source={require('./assets/girl.png')}
                />
              </Draggable>
            </View>
            <View style={{zIndex: 5}}>
              <Draggable
                renderSize={35}
                x={vh(20)}
                y={vh(16)}
                minX={0}
                minY={0}
                maxX={vh(30)}
                maxY={vh(30)}
                isCircle={true}>
                <Image
                  style={{
                    width: vh(6),
                    height: vh(6),
                    justifyContent: 'center',
                    alignItems: 'center',
                    aspectRatio: 1,
                    borderRadius: 500,
                    borderWidth: 2,
                    borderColor: 'white',
                    resizeMode: 'contain',
                  }}
                  source={require('./assets/man.png')}
                />
              </Draggable>
            </View>
            <Image
              style={{
                width: vh(30),
                height: vh(30),
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 0,
              }}
              source={require('./assets/back.jpg')}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold', color: 'black',fontSize:20}}>+</Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>1</Text>
        </View>
      </View>
      <View
        style={{
          borderTopColor: 'black',
          borderTopWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
          padding: vh(2),
          paddingHorizontal: vw(5),
        }}>
        <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
          <View style={{}}>
            <Image
              style={{
                width: vh(6),
                height: vh(6),
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: 1,
                borderRadius: 500,
              }}
              source={require('./assets/girl.png')}
            />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Text style={{fontWeight: '400', color: 'black'}}>LeTrump</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{}}>
            <Image
              style={{
                width: vh(6),
                height: vh(6),
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: 1,
                borderRadius: 500,
              }}
              source={require('./assets/man.png')}
            />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Text style={{fontWeight: '400', color: 'black'}}>Jong Mills</Text>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: vw(10)}}>
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            paddingVertical: 10,
            paddingHorizontal: 5,
            color:"black",
          }}
          placeholderTextColor="black"
          value={text}
          onChangeText={val => {
            settext(val);
          }}
          numberOfLines={4}
          multiline={true}
        />
      </View>
      <View style={{alignItems: 'center', padding: 3, marginTop: 5}}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'black',
            paddingVertical: 10,
            backgroundColor: '#DCDCDC',
            width: vw(40),
            alignItems: 'center',
          }}
          onPress={() => {
            Linking.openURL(`http://supramagic.com`);
          }}>
          {loading ? (
            <ActivityIndicator size={20} color="black" />
          ) : (
            <Text style={{fontWeight: '500', color: 'black'}}>supramagic.com</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default App;
