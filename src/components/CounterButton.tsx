import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Animated } from "react-native";

type CounterButtonProps = {
  title: string;
  step?: number;
};

export default function CounterButton({ title, step = 1 }: CounterButtonProps) {
  const [count, setCount] = useState(0);
  const scale = new Animated.Value(1);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 0.95, duration: 100, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();

    setCount(count + step);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.likes}>Likes: {count}</Text>

      <Animated.View style={{ transform: [{ scale }] }}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8f9fa",
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 16,
    borderRadius: 16,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  likes: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: "#333",
    textAlign: "center",
  },

  button: {
    backgroundColor: "#555555",
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
