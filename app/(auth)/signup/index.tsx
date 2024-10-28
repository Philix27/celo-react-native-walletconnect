import { router } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { AuthWrapper } from "../comps";
import { AppPages } from "@/utils";
import { AppTextInput } from "@/components";

const index = () => {
  return (
    <AuthWrapper
      title="Create New Account"
      desc="Please ensure you use the mobile number that is attached to your BVN"
      btnTitle="Continue"
      onPress={() => router.push(AppPages.auth.signupOtp)}
      inputNote={
        <Pressable onPress={() => router.push(AppPages.auth.signup)}>
          <Text style={styles.inputNoteText}>
            Already have a Paymais account?
            <Text style={styles.footerLink}>Sign In</Text>
          </Text>
        </Pressable>
      }
      bottomText={
        <Pressable onPress={() => router.push(AppPages.auth.signup)}>
          <Text style={styles.footerText}>
            By clicking on continue, you accept our
            <Text style={styles.footerLink}>Terms of Service</Text> and
            <Text style={styles.footerLink}>Privacy Policy</Text>
          </Text>
        </Pressable>
      }
    >
      <View style={styles.form}>
        <AppTextInput placeholder="Mobile number" numeric />
        <AppTextInput placeholder="Referral code(optional)" />
      </View>
    </AuthWrapper>
  );
};

export default index;

const styles = StyleSheet.create({
  form: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  forgotPassword: {
    color: "#000066",
    fontWeight: "bold",
    textAlign: "right",
    fontSize: 16,
    marginTop: 20,
  },
  inputNoteText: {
    marginTop: 20,
    textAlign: "center",
  },
  footerText: {
    color: "#444951",
    fontWeight: 300,
    fontSize: 16,
    textAlign: "center",
  },
  footerLink: {
    color: "#000066",
    fontWeight: 400,
    fontSize: 16,
  },
});
