import type { Meta, StoryObj } from "@storybook/react";
import { SButton } from "./SButton";

const meta: Meta<typeof SButton> = {
  title: "Components/SButton",
  component: SButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "success"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "medium",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
    size: "medium",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    variant: "success",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    variant: "primary",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    size: "medium",
    disabled: true,
  },
};
