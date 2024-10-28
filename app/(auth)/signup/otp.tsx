import { AppOtp } from "@/components";
import { router } from "expo-router";
import { Text } from "react-native";
import { AuthWrapper } from "../comps";
import { AppPages, AppStyles } from "@/utils";

export default function OtpPage() {
  return (
    <AuthWrapper
      title={"Enter OTP"}
      desc={"Enter the 4 digit code that was sent to your mobile number"}
      btnTitle={"Verify Now"}
      underBtn={
        <Text style={AppStyles.bottomText}>
          Didn’t receive the OTP?
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
      onPress={() => {
        router.push(AppPages.auth.signupPassword);
      }}
    >
      <AppOtp />
    </AuthWrapper>
  );
}
