import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Bai4Screen = () => {
    const [pressCount,setPressCount] = useState(0);
  return (
    <View>
      <Text>You've pressed the button: {pressCount} time(s)</Text>
      <Button title={`Pressed ${pressCount} time(s)`} onPress={() => setPressCount(pressCount+1)}></Button>
    </View>
  )
}

export default Bai4Screen