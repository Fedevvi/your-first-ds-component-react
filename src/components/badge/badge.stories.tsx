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
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Template: Story = {
  render: (args) => <Badge {...args}>Label</Badge>,
};
