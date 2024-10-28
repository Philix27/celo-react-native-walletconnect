import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  Text,
  View,
  Button,
} from "react-native";
import { router } from "expo-router";
import { AppAssets, AppPages, AppUtils } from "@/utils";

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image src={AppAssets.svg.logo} alt="Logo Image" />
        <Text style={styles.logoText}>Paymois Logo0l</Text>
      </View>
      <Button
        title="Login"
        onPress={() => {
          router.push("/indexx");
        }}
      />
      <Button
        title="Dashboard"
        onPress={() => {
          router.push(AppPages.dashboard.index);
        }}
      />

      <Button
        title="Payment Successful"
        onPress={() => {
          router.push(AppPages.dashboard.paymentSuccess);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppUtils.color.card,
    flex: 1,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  logoContainer: {
    marginTop: 200,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    gap: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
});
