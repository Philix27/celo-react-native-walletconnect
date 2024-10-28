import { AppTextInput, Text, View } from "@/components";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import { AuthWrapper } from "../comps";
import { AppPages, AppStyles } from "@/utils";

export default function BvnSuccess() {
  return (
    <AuthWrapper
      title={"BVN Validated Successfully"}
      desc={
        "Your password has been validated successfully, please click the button below to continue to your account"
      }
      bottomText={
        <Text style={AppStyles.bottomText}>
          By clicking on continue, you accept our
          <Text style={AppStyles.bottomTextLink}>Terms of Service</Text> and
          <Text style={AppStyles.bottomTextLink}>Privacy Policy</Text>
        </Text>
      }
      btnTitle={"Dashboard"}
      onPress={() => {
        router.push(AppPages.dashboard.index);
      }}
      isSuccess
    >
      <View></View>
    </AuthWrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
});
