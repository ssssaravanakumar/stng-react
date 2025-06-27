import type { Meta, StoryObj } from "@storybook/react";
import { SRadio } from "./SRadio";
import { useState } from "react";

const meta: Meta<typeof SRadio> = {
  title: "Components/SRadio",
  component: SRadio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    checked: {
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
    value: "option1",
    label: "Default radio",
    name: "radio-group",
    size: "medium",
  },
};

export const Checked: Story = {
  args: {
    value: "option1",
    label: "Checked radio",
    name: "radio-group",
    checked: true,
    size: "medium",
  },
};

export const WithHelperText: Story = {
  args: {
    value: "option1",
    label: "Radio with helper text",
    helperText: "Additional information about this option",
    name: "radio-group",
    size: "medium",
  },
};

export const ErrorState: Story = {
  args: {
    value: "option1",
    label: "Radio with error",
    error: true,
    helperText: "This field is required",
    name: "radio-group",
    size: "medium",
  },
};

export const Disabled: Story = {
  args: {
    value: "option1",
    label: "Disabled radio",
    disabled: true,
    name: "radio-group",
    size: "medium",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <SRadio
        value="small"
        label="Small radio"
        name="size-group"
        size="small"
      />
      <SRadio
        value="medium"
        label="Medium radio"
        name="size-group"
        size="medium"
      />
      <SRadio
        value="large"
        label="Large radio"
        name="size-group"
        size="large"
      />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("option1");

    return (
      <div className="space-y-3">
        <h3 className="text-lg font-semibold mb-4">Choose your preference:</h3>
        <SRadio
          value="option1"
          label="Option 1"
          name="preference"
          checked={selectedValue === "option1"}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
        <SRadio
          value="option2"
          label="Option 2"
          name="preference"
          checked={selectedValue === "option2"}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
        <SRadio
          value="option3"
          label="Option 3"
          name="preference"
          checked={selectedValue === "option3"}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
        <SRadio
          value="option4"
          label="Option 4 (Disabled)"
          name="preference"
          disabled={true}
        />
      </div>
    );
  },
};
