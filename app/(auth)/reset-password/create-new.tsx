import { AppTextInput } from "@/components";
import { router } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { AuthWrapper } from "../comps";
import { AppPages, AppStyles } from "@/utils";

export default function ResetPasswordPage() {
  return (
    <AuthWrapper
      title={"Create New Password"}
      desc={
        "Set a new password for your account so that you can login and recover your account."
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
        router.push(AppPages.auth.resetPasswordSuccess);
      }}
    >
      <AppTextInput password label="Password" />
      <AppTextInput password label="Retype Password" />
    </AuthWrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
});
