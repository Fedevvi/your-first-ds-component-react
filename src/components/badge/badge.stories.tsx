import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    variant: {
      options: ["error", "success", "black", "white"],
      control: { type: "select" },
    },
  },
  args: {
    variant: "success",
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Template: Story = {
  render: (args) => <Badge {...args}>Label</Badge>,
};
