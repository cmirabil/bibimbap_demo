import React from "react";
import { ReactComponent as ICOSVG } from './SNAP_ico.svg';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function Autentication({ signOut }) {
  return (
    <View className="Autentication">
      <Card>
        <Image src={ICOSVG} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(Autentication);