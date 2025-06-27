import type { Meta, StoryObj } from "@storybook/react";
import { SInput } from "./SInput";

const meta: Meta<typeof SInput> = {
  title: "Components/SInput",
  component: SInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "url", "tel"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ["default", "outlined", "filled"],
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    onChange: { action: "changed" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    size: "medium",
    variant: "default",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    size: "medium",
    variant: "default",
  },
};

export const Required: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    required: true,
    size: "medium",
    variant: "default",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    helperText: "Password must be at least 8 characters long",
    size: "medium",
    variant: "default",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    type: "email",
    error: true,
    helperText: "Please enter a valid email address",
    size: "medium",
    variant: "default",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
    size: "medium",
    variant: "default",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <SInput
        label="Default Variant"
        placeholder="Default input"
        variant="default"
      />
      <SInput
        label="Outlined Variant"
        placeholder="Outlined input"
        variant="outlined"
      />
      <SInput
        label="Filled Variant"
        placeholder="Filled input"
        variant="filled"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <SInput label="Small Size" placeholder="Small input" size="small" />
      <SInput label="Medium Size" placeholder="Medium input" size="medium" />
      <SInput label="Large Size" placeholder="Large input" size="large" />
    </div>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <SInput label="Text Input" placeholder="Enter text" type="text" />
      <SInput label="Email Input" placeholder="Enter email" type="email" />
      <SInput
        label="Password Input"
        placeholder="Enter password"
        type="password"
      />
      <SInput label="Number Input" placeholder="Enter number" type="number" />
      <SInput label="URL Input" placeholder="Enter URL" type="url" />
      <SInput label="Phone Input" placeholder="Enter phone number" type="tel" />
    </div>
  ),
};
