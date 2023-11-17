import * as React from 'react';

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import IconMoon, { iconNames } from 'yipyip-icomoon';

export default function App() {
  const iconList = iconNames();
  return (
    <View style={styles.container}>
      <ScrollView>
        {iconList.map((x: string, i: number) => (
          <View style={styles.row} key={i}>
            <IconMoon name={x as any} size={84} color="green" />
            <Text style={styles.text}>{x}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: { flexDirection: 'row' },
  text: { marginHorizontal: 10 },
});
