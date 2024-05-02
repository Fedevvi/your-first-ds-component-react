import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  render: () => (
    <Title className="font-medium" as="h1">
      H1
    </Title>
  ),
};
