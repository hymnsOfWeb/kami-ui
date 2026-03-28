import { colorKeys } from "@common/color-keys";
import { Button, type ButtonProps } from "@kami-ui/react-components";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ButtonHTMLAttributes, FC } from "react";

const meta = {
  component: Button,
  tags: ["autodocs"],
  title: "Components/Button",
  args: {
    $color: "primary",
    $variant: "filled",
    $size: "md",
    $borderRadius: "md",
    children: "Hello!",
    type: "button",
    disabled: false,
    className: "kami-ui-btn",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
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
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
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
      description: "The border radius of the button.",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    $color: {
      control: { type: "select" },
      options: [
        ...Object.keys(colorKeys.base),
        ...Object.keys(colorKeys.extra),
        ...Object.keys(colorKeys.states),
      ],
    },
    $size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the button.",
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
} satisfies Meta<
  FC<
    ButtonProps & {
      children: string;
      type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
      disabled?: boolean;
      className?: string;
    }
  >
>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    $variant: "filled",
    children: "Filled!",
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    $variant: "outlined",
    children: "Outlined!",
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    $variant: "text",
    children: "Text!",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled!",
  },
};

export const WithCustomColor: Story = {
  args: {
    $color: "success",
    children: "Success Color!",
  },
};

export const small: Story = {
  args: {
    $size: "sm",
    children: "Small Button!",
  },
};

export const large: Story = {
  args: {
    $size: "lg",
    children: "Large Button!",
  },
};
