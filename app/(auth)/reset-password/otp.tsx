import { AppOtp, AppTextInput } from "@/components";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { AuthWrapper } from "../comps";
import { AppPages, AppStyles } from "@/utils";

export default function ResetPasswordOtpPage() {
  return (
    <AuthWrapper
      title={"Enter OTP"}
      desc={"Enter the 4 digit code that was sent to your mobile number"}
      underBtn={
        <Text style={AppStyles.bottomText}>
          Didn’t recieve the OTP?
          <Text style={AppStyles.bottomTextLink}>Re-send</Text>
        </Text>
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
        router.push(AppPages.auth.resetPasswordNewPassword);
      }}
    >
      <AppOtp />
    </AuthWrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
});
