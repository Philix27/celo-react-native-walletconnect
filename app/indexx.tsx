import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useLayoutEffect, useState } from "react";
import { router } from "expo-router";
import ModalComponent from "@/components/Modal";
import { AppAssets } from "@/utils";

export default function SplashWelcome() {
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePress = () => {
    setIsVisible(false);
    router.push("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ModalComponent
        title="Welcome!"
        desc="We drive to optimize cluster contribution digitally in order to assist civil servants with a seamless way of savings and instant loan access."
        isVisible={isVisible}
        alignSelf="flex-end"
        button={{ buttonText: "Let's Get Started", handlePress: handlePress }}
      />
      <ImageBackground source={AppAssets.imgs.homeBg} style={styles.img} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000066",
    flex: 1,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  img: {
    flex: 1,
    width: "100%",
  },
});
