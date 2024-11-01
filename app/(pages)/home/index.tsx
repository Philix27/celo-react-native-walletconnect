import { router } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { AuthWrapper } from "../comps";
import { AppPages, AppStyles } from "@/utils";
import { AppTextInput } from "@/components";

export default function IndexPage() {
  return (
    <AuthWrapper
      title="Welcome!"
      desc="Fill in your details to sign into your paymais account"
      btnTitle="Sign In"
      onPress={() => router.push(AppPages.dashboard.index)}
      bottomText={
        <Text style={AppStyles.bottomText}>
          Don’t have a Paymais account?
          <Pressable onPress={() => router.push(AppPages.auth.signup)}>
            <Text style={AppStyles.bottomTextLink}>Sign up</Text>
          </Pressable>
        </Text>
      }
    >
      <View style={styles.form}>
        <AppTextInput label="Mobile number" numeric />
        <AppTextInput label="Password" password />
      </View>
      <View style={styles.forgotPassword}>
        <Pressable onPress={() => router.push(AppPages.auth.resetPassword)}>
          <Text style={AppStyles.bottomTextLink}>Forgot Your Password?</Text>
        </Pressable>
      </View>
    </AuthWrapper>
  );
}

const styles = StyleSheet.create({
  form: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  forgotPassword: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});
