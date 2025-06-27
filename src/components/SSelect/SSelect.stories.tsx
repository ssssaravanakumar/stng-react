import type { Meta, StoryObj } from "@storybook/react";
import { SSelect } from "./SSelect";

const meta: Meta<typeof SSelect> = {
  title: "Components/SSelect",
  component: SSelect,
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
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    multiple: {
      control: "boolean",
    },
    onChange: { action: "changed" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry", disabled: true },
];

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: "Select a fruit...",
    size: "medium",
    variant: "default",
  },
};

export const WithLabel: Story = {
  args: {
    options: countryOptions,
    label: "Country",
    placeholder: "Select your country...",
    size: "medium",
    variant: "default",
  },
};

export const WithHelperText: Story = {
  args: {
    options: sampleOptions,
    label: "Favorite Fruit",
    helperText: "Choose your preferred fruit from the list",
    placeholder: "Select a fruit...",
    size: "medium",
    variant: "default",
  },
};

export const ErrorState: Story = {
  args: {
    options: countryOptions,
    label: "Country",
    error: true,
    helperText: "Please select a country",
    placeholder: "Select your country...",
    size: "medium",
    variant: "default",
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    label: "Disabled Select",
    disabled: true,
    placeholder: "This select is disabled",
    size: "medium",
    variant: "default",
  },
};

export const Required: Story = {
  args: {
    options: countryOptions,
    label: "Country",
    required: true,
    placeholder: "Select your country...",
    size: "medium",
    variant: "default",
  },
};

export const Multiple: Story = {
  args: {
    options: sampleOptions,
    label: "Multiple Fruits",
    multiple: true,
    helperText: "Hold Ctrl/Cmd to select multiple options",
    size: "medium",
    variant: "default",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <SSelect
        options={sampleOptions}
        label="Default Variant"
        placeholder="Default select"
        variant="default"
      />
      <SSelect
        options={sampleOptions}
        label="Outlined Variant"
        placeholder="Outlined select"
        variant="outlined"
      />
      <SSelect
        options={sampleOptions}
        label="Filled Variant"
        placeholder="Filled select"
        variant="filled"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <SSelect
        options={sampleOptions}
        label="Small Size"
        placeholder="Small select"
        size="small"
      />
      <SSelect
        options={sampleOptions}
        label="Medium Size"
        placeholder="Medium select"
        size="medium"
      />
      <SSelect
        options={sampleOptions}
        label="Large Size"
        placeholder="Large select"
        size="large"
      />
    </div>
  ),
};
