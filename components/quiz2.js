import { StyleSheet, Text, View, TextInput, Button, Image, Pressable, Alert} from 'react-native';
function Ali({ width, height, backgroundColor, color }) {
    return (
      <TouchableOpacity
        style={{ width: width, height: height, backgroundColor: backgroundColor }}
      >
        <Text style={{ color: color }}>Button</Text>
      </TouchableOpacity>
    );
  }

  export default function quiz2() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Yasir width={80} height={40} backgroundColor={"green"} color={"white"} />
      </View>
    );
  }