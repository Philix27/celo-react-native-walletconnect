import { AppTextInput } from "@/components";
import { router } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { AuthWrapper } from "../comps";
import { AppPages, AppStyles } from "@/utils";

export default function ResetPasswordPage() {
  return (
    <AuthWrapper
      title={"Reset Your Password"}
      desc={
        "Please enter your mobile number. We will send an OTP to recover your account"
      }
      bottomText={
        <Text style={AppStyles.bottomText}>
          By clicking on continue, you accept our
          <Text style={AppStyles.bottomTextLink}>Terms of Service</Text> and
          <Text style={AppStyles.bottomTextLink}>TPrivacy Policy</Text>
        </Text>
      }
      btnTitle={"Verify Now"}
      onPress={() => {
        router.push(AppPages.auth.resetPasswordOtp);
      }}
    >
      <AppTextInput label="Mobile number" />
    </AuthWrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
});
