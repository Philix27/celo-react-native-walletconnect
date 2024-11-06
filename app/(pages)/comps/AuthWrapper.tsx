import React, { ReactNode } from "react";
import {
  StyleSheet,
  ViewStyle,
  Image,
  StatusBar,
  SafeAreaView,
  View,
} from "react-native";
import { AppButton, } from "@/components";
import { AppAssets, AppUtils } from "@/utils";

type IProps = {
  children: ReactNode;
  style?: ViewStyle;
  title: string;
  desc: string;
  inputNote?: JSX.Element;
  onPress: VoidFunction;
  btnTitle: string;
  underBtn?: JSX.Element;
  bottomText?: JSX.Element;
  isSuccess?: boolean;
};

const logo = require("@/assets/images/core/authLogo.png");

export function AuthWrapper(props: IProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.logoContainer}>
          {props.isSuccess ? (
            <Image
              style={styles.logoImage}
              source={AppAssets.core.success}
              alt="logo"
              resizeMode="contain"
            />
          ) : (
            <Image
              style={styles.logoImage}
              source={logo}
              alt="logo"
              resizeMode="contain"
            />
          )}
        </View>
        {/* <TextComponent
          style={{ marginBottom: 20 }}
          header={props.title}
          body={props.desc}
        /> */}
        <View>
          {props.children}
          <View style={props.inputNote && { marginTop: 50 }}>
            <AppButton
              title={props.btnTitle}
              onPress={props.onPress}
              style={{ marginTop: 20, marginBottom: 10 }}
            />
            {/* <ButtonComponent
              title={props.btnTitle}
              handlePress={props.onPress}
            /> */}
            {props.inputNote && props.inputNote}
          </View>
          {props.underBtn && props.underBtn}
        </View>
        <View style={styles.footerContainer}>
          {props.bottomText && props.bottomText}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppUtils.color.bg,
    paddingTop: StatusBar.currentHeight,
  },
  viewContainer: {
    flex: 1,
    padding: 30,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logoImage: {
    height: 120,
    width: 120,
  },
  footerContainer: {
    marginTop: "auto",
  },
});
