import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./text";

const meta: Meta<typeof Text> = {
  component: Text,
  argTypes: {
    size: {
      options: ["xs", "sm"],
      control: { type: "select" },
    },
    weight: {
      options: ["light", "regular"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Template: Story = {
  render: (args) => <Text {...args}>Text sample</Text>,
};
