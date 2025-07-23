import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl text-dark-200 font-bold">
        Welcome to my app!
      </Text>
      <Link
        className="text-2xl text-dark-200 m-4 px-4 py-2 border rounded-lg"
        href="/onboarding"
      >
        Onboarding
      </Link>
      <Link className="text-2xl text-dark-200 m-4 px-4 py-2 border rounded-lg" href="/movie/avengers">Avengers Movie</Link>
    </View>
  );
}
