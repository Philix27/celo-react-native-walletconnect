import { AppTextInput } from "@/components";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { AuthWrapper } from "../comps";
import { AppPages, AppStyles } from "@/utils";

export default function OtpPage() {
  return (
    <AuthWrapper
      title={"Create Password"}
      desc={
        "Please ensure you use the mobile number that is attached to your BVN"
      }
      btnTitle={"Continue"}
      underBtn={
        <Text style={AppStyles.bottomText}>
          Already have a Paymais account?
          <Text
            style={AppStyles.bottomTextLink}
            onPress={() => {
              router.push(AppPages.auth.login);
            }}
          >
            Sign in
          </Text>
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
        router.push(AppPages.auth.signupBvn);
      }}
    >
      <AppTextInput placeholder="Password" password />
      <AppTextInput placeholder="Retype password" password />
    </AuthWrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
});
