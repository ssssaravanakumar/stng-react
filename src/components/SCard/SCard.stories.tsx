import type { Meta, StoryObj } from "@storybook/react";
import { SCard } from "./SCard";
import { SButton } from "../SButton/SButton";

const meta: Meta<typeof SCard> = {
  title: "Components/SCard",
  component: SCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "elevated"],
    },
    padding: {
      control: "select",
      options: ["none", "small", "medium", "large"],
    },
    onClick: { action: "card-clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    subtitle: "This is a subtitle for the card",
    children:
      "This is the main content of the card. You can put any React components or text here.",
    variant: "default",
    padding: "medium",
  },
};

export const Outlined: Story = {
  args: {
    title: "Outlined Card",
    subtitle: "This card has an outlined border",
    children: "Content with outlined styling.",
    variant: "outlined",
    padding: "medium",
  },
};

export const Elevated: Story = {
  args: {
    title: "Elevated Card",
    subtitle: "This card has a shadow effect",
    children: "Content with elevated shadow styling.",
    variant: "elevated",
    padding: "medium",
  },
};

export const WithHeader: Story = {
  args: {
    title: "Card with Header",
    children: "This card demonstrates the header section.",
    header: (
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">Custom Header</h4>
        <span className="text-sm text-gray-500">Header Action</span>
      </div>
    ),
    variant: "default",
    padding: "medium",
  },
};

export const WithFooter: Story = {
  args: {
    title: "Card with Footer",
    children: "This card demonstrates the footer section with action buttons.",
    footer: (
      <div className="flex gap-2 justify-end">
        <SButton variant="secondary" size="small">
          Cancel
        </SButton>
        <SButton variant="primary" size="small">
          Save
        </SButton>
      </div>
    ),
    variant: "default",
    padding: "medium",
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    title: "Complete Card",
    subtitle: "Card with header and footer",
    children: "This card shows all sections: header, content, and footer.",
    header: (
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">Settings</h4>
        <span className="text-sm text-gray-500">Updated 2 hours ago</span>
      </div>
    ),
    footer: (
      <div className="flex gap-2 justify-end">
        <SButton variant="secondary" size="small">
          Reset
        </SButton>
        <SButton variant="primary" size="small">
          Apply
        </SButton>
      </div>
    ),
    variant: "elevated",
    padding: "medium",
  },
};

export const NoPadding: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <div className="bg-blue-50 p-4">
          <h3 className="font-semibold">Custom Content Block 1</h3>
          <p className="text-sm text-gray-600">
            This card has no padding, allowing for custom layouts.
          </p>
        </div>
        <div className="bg-green-50 p-4">
          <h3 className="font-semibold">Custom Content Block 2</h3>
          <p className="text-sm text-gray-600">
            Each section can have its own styling.
          </p>
        </div>
      </div>
    ),
    variant: "default",
    padding: "none",
  },
};

export const Clickable: Story = {
  args: {
    title: "Clickable Card",
    subtitle: "Click anywhere on this card",
    children: "This card has an onClick handler and shows a pointer cursor.",
    variant: "elevated",
    padding: "medium",
    onClick: () => alert("Card clicked!"),
  },
};

export const LargePadding: Story = {
  args: {
    title: "Large Padding Card",
    subtitle: "This card has generous spacing",
    children: "Perfect for important content that needs more breathing room.",
    variant: "default",
    padding: "large",
  },
};

export const SmallPadding: Story = {
  args: {
    title: "Compact Card",
    subtitle: "Minimal spacing",
    children: "Ideal for dense layouts or sidebar content.",
    variant: "outlined",
    padding: "small",
  },
};
