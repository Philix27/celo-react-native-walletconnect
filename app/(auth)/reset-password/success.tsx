import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { AuthWrapper } from "../comps";
import { AppPages, AppStyles } from "@/utils";

export default function ResetPasswordSuccessPage() {
  return (
    <AuthWrapper
      title={"Password  Changed"}
      desc={
        "Your password has been updated, please sign in to continue to your account"
      }
      bottomText={
        <Text style={AppStyles.bottomText}>
          By clicking on continue, you accept our
          <Text style={AppStyles.bottomTextLink}>Terms of Service</Text> and
          <Text style={AppStyles.bottomTextLink}>Privacy Policy</Text>
        </Text>
      }
      btnTitle={"Sign in"}
      onPress={() => {
        router.push(AppPages.auth.login);
      }}
    >
      <View></View>
      {/* <AppTextInput placeholder="Enter BVN" /> */}
    </AuthWrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
});
