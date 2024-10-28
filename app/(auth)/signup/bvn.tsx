import { AppTextInput } from "@/components";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { AuthWrapper } from "../comps";
import { AppPages, AppStyles } from "@/utils";

export default function OtpPage() {
  return (
    <AuthWrapper
      title={"Enter BVN"}
      desc={"Please enter your BVN below as this will enable us"}
      btnTitle={"Finish"}
      underBtn={<View></View>}
      bottomText={
        <Text style={AppStyles.bottomText}>
          By clicking on continue, you accept our
          <Text style={AppStyles.bottomTextLink}>Terms of Service</Text> and
          <Text style={AppStyles.bottomTextLink}>TPrivacy Policy</Text>
        </Text>
      }
      onPress={() => {
        router.push(AppPages.auth.signupBvnSuccess);
      }}
    >
      <AppTextInput placeholder="Enter BVN" />
    </AuthWrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
});
