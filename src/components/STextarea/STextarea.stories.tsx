import type { Meta, StoryObj } from "@storybook/react";
import { STextarea } from "./STextarea";

const meta: Meta<typeof STextarea> = {
  title: "Components/STextarea",
  component: STextarea,
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
      options: ["default", "outlined", "filled"],
    },
    resize: {
      control: "select",
      options: ["none", "vertical", "horizontal", "both"],
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
    placeholder: "Enter your message...",
    size: "medium",
    variant: "default",
    rows: 4,
  },
};

export const WithLabel: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here...",
    size: "medium",
    variant: "default",
    rows: 4,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Description",
    placeholder: "Describe your project...",
    helperText: "Provide a detailed description (max 500 characters)",
    size: "medium",
    variant: "default",
    rows: 6,
  },
};

export const ErrorState: Story = {
  args: {
    label: "Comments",
    placeholder: "Enter comments...",
    error: true,
    helperText: "This field is required",
    size: "medium",
    variant: "default",
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Textarea",
    placeholder: "This textarea is disabled",
    disabled: true,
    size: "medium",
    variant: "default",
    rows: 4,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <STextarea
        label="Default Variant"
        placeholder="Default textarea"
        variant="default"
        rows={3}
      />
      <STextarea
        label="Outlined Variant"
        placeholder="Outlined textarea"
        variant="outlined"
        rows={3}
      />
      <STextarea
        label="Filled Variant"
        placeholder="Filled textarea"
        variant="filled"
        rows={3}
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <STextarea
        label="Small Size"
        placeholder="Small textarea"
        size="small"
        rows={3}
      />
      <STextarea
        label="Medium Size"
        placeholder="Medium textarea"
        size="medium"
        rows={3}
      />
      <STextarea
        label="Large Size"
        placeholder="Large textarea"
        size="large"
        rows={3}
      />
    </div>
  ),
};

export const ResizeOptions: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <STextarea
        label="No Resize"
        placeholder="Cannot be resized"
        resize="none"
        rows={3}
      />
      <STextarea
        label="Vertical Resize"
        placeholder="Can be resized vertically"
        resize="vertical"
        rows={3}
      />
      <STextarea
        label="Horizontal Resize"
        placeholder="Can be resized horizontally"
        resize="horizontal"
        rows={3}
      />
      <STextarea
        label="Both Directions"
        placeholder="Can be resized in both directions"
        resize="both"
        rows={3}
      />
    </div>
  ),
};
