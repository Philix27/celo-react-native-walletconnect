import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  Text,
  View,
  Button,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import { AppAssets, AppPages, AppUtils } from "@/utils";

import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";

const projectId = "YOUR_PROJECT_ID";

const providerMetadata = {
  name: "YOUR_PROJECT_NAME",
  description: "YOUR_PROJECT_DESCRIPTION",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

export default function index() {
  // Add in the useWalletConnectModal hook + props
  const { open, isConnected, address, provider } = useWalletConnectModal();

  // Function to handle the
  const handleButtonPress = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>WalletConnect Modal RN Tutorial</Text>
      <Text>{isConnected ? address : "No Connected"}</Text>
      <Pressable onPress={handleButtonPress} style={styles.pressableMargin}>
        <Text>{isConnected ? "Disconnect" : "Connect"}</Text>
      </Pressable>

      <View style={styles.logoContainer}>
        <Image src={AppAssets.svg.logo} alt="Logo Image" />
        <Text style={styles.logoText}>Paymois Logo0l</Text>
      </View>

      {/* <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      /> */}
      {/* <Button
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
      /> */}

      {/* <Button
        title="Payment Successful"
        onPress={() => {
          router.push(AppPages.dashboard.paymentSuccess);
        }}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppUtils.color.card,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  pressableMargin: {
    marginTop: 16,
  },
});
