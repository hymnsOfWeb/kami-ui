import { colorKeys } from "@common";
import { Button, type ButtonProps } from "@kami-ui/react-components";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ButtonHTMLAttributes, FC } from "react";

const meta = {
  component: Button,
  tags: ["autodocs"],
  title: "Components/Button",
  args: {
    children: "Hello!",
    type: "button",
    $variant: "filled",
    $borderRadius: "md",
    $color: "primary",
  },
  argTypes: {
    $variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "text"],
      description: "The variant of the button.",
      table: {
        defaultValue: { summary: "filled" },
      },
    },
    $borderRadius: {
      control: { type: "select" },
      options: ["full", "lg", "md", "sm", "none"],
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
      description: "The HTML button type.",
      table: {
        defaultValue: { summary: "button" },
      },
    },
    children: {
      control: { type: "text" },
      description: "The content of the button.",
    },
    $color: {
      control: { type: "select" },
      options: [
        ...Object.keys(colorKeys.base),
        ...Object.keys(colorKeys.extra),
        ...Object.keys(colorKeys.states),
      ],
    },
  },
} satisfies Meta<
  FC<
    ButtonProps & {
      children: string;
      type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    }
  >
>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    $variant: "filled",
  },
};
