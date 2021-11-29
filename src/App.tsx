import * as React from "react";
import { Page, Rectangle, Text, View, Component } from "react-figma";
import Button from "./Button";

export const App = () => {
  return (
    <Page isCurrent name="Page X">
      <Text characters="Hello, danika!" />
      <Rectangle
        style={{ width: 200, height: 100, backgroundColor: "#0ddd25" }}
      />
      <Rectangle
        style={{ width: 200, height: 100, backgroundColor: "#a6dd00" }}
      />
      <Rectangle
        style={{
          width: 200,
          height: 100,
          backgroundColor: "#a6dd00",
        }}
      >
        <Text characters="Hello, danika!" />
      </Rectangle>
      <View>
        <Button text="hey hey" />
      </View>
      <Component name="Comp">
        <Rectangle
          style={{
            backgroundColor: "#a6dd00",
            width: 100,
            height: 100,
            // padding: `${Number(tokens.global["space-m"].value)}px ${Number(
            //   tokens.global["space-l"].value
            // )}px`,
            // borderRadius: 8,
            // boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
          }}
        >
          <Text>Hello world!</Text>
        </Rectangle>
      </Component>
    </Page>
  );
};
