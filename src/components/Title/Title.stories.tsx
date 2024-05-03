import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  component: Title,
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4"],
      control: { type: "select" },
    },
  },
  args: {
    as: "h1",
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  render: (args) => <Title {...args}>Heading</Title>,
};
