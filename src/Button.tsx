import * as React from "react";
import * as tokens from "./tokens.json";
import { Page, Rectangle, Text, View, Component } from "react-figma";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <Rectangle
      style={{
        backgroundColor: "#ababab",
        width: 100,
        height: 100,
        // padding: `${Number(tokens.global["space-m"].value)}px ${Number(
        //   tokens.global["space-l"].value
        // )}px`,
        borderRadius: 8,
        boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
      }}
    >
      hey hey hey
    </Rectangle>
  );
};

export default Button;
