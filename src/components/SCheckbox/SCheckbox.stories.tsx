import type { Meta, StoryObj } from "@storybook/react";
import { SCheckbox } from "./SCheckbox";

const meta: Meta<typeof SCheckbox> = {
  title: "Components/SCheckbox",
  component: SCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ["default", "rounded"],
    },
    checked: {
      control: "boolean",
    },
    indeterminate: {
      control: "boolean",
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default checkbox",
    size: "medium",
    variant: "default",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked checkbox",
    checked: true,
    size: "medium",
    variant: "default",
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Indeterminate checkbox",
    indeterminate: true,
    size: "medium",
    variant: "default",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Accept terms and conditions",
    helperText: "Please read and accept our terms of service",
    required: true,
    size: "medium",
    variant: "default",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Agreement required",
    error: true,
    helperText: "You must accept the terms to continue",
    size: "medium",
    variant: "default",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    disabled: true,
    size: "medium",
    variant: "default",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <SCheckbox label="Small checkbox" size="small" />
      <SCheckbox label="Medium checkbox" size="medium" />
      <SCheckbox label="Large checkbox" size="large" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <SCheckbox
        label="Default variant (square)"
        variant="default"
        checked={true}
      />
      <SCheckbox
        label="Rounded variant (circular)"
        variant="rounded"
        checked={true}
      />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    size: "medium",
    variant: "default",
  },
};
