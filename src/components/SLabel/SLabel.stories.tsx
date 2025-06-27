import type { Meta, StoryObj } from "@storybook/react";
import { SLabel } from "./SLabel";

const meta: Meta<typeof SLabel> = {
  title: "Components/SLabel",
  component: SLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
    required: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Label",
    size: "medium",
    weight: "medium",
  },
};

export const Required: Story = {
  args: {
    children: "Required Field",
    required: true,
    size: "medium",
    weight: "medium",
  },
};

export const ErrorState: Story = {
  args: {
    children: "Error Label",
    error: true,
    size: "medium",
    weight: "medium",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Label",
    disabled: true,
    size: "medium",
    weight: "medium",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <SLabel size="small">Small Label</SLabel>
      <SLabel size="medium">Medium Label</SLabel>
      <SLabel size="large">Large Label</SLabel>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-4">
      <SLabel weight="normal">Normal Weight</SLabel>
      <SLabel weight="medium">Medium Weight</SLabel>
      <SLabel weight="semibold">Semibold Weight</SLabel>
      <SLabel weight="bold">Bold Weight</SLabel>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <SLabel>Normal State</SLabel>
      <SLabel required>Required Field</SLabel>
      <SLabel error>Error State</SLabel>
      <SLabel disabled>Disabled State</SLabel>
    </div>
  ),
};

export const WithHtmlFor: Story = {
  render: () => (
    <div className="space-y-4">
      <SLabel htmlFor="email-input">Email Address</SLabel>
      <input
        id="email-input"
        type="email"
        placeholder="Enter your email"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
      />
    </div>
  ),
};
