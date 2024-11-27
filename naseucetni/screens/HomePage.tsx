import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';

export default function HomePage() {
  return (
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main navigation</Text>
      <View>
        <Button
          title="Doklady přijaté"
          accessibilityLabel="increment"
          color="#060663"
          onPress={() => console.log('Doklady přijaté pressed')}
        />
        </View>
        <View>
        <Button
          title="Doklady vydané"
          accessibilityLabel="increment"
          color="#060663"
          onPress={() => console.log('Doklady vydané pressed')}
        />
        </View>
        <View>
        <Button
          title="Účtenky"
          accessibilityLabel="increment"
          color="#060663"
          onPress={() => console.log('Účtenky pressed')}
        />
        </View>
        <View>
        <Button
          title="Ostatní dokumenty"
          accessibilityLabel="increment"
          color="#060663"
          onPress={() => console.log('Ostatní doklady pressed')}
        />
        </View>
    </View>
  );
}