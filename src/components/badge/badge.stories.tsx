import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Error: Story = {
  render: () => <Badge variant="error">Label</Badge>,
};

export const Success: Story = {
  render: () => <Badge variant="success">Label</Badge>,
};

export const Black: Story = {
  render: () => <Badge variant="black">Label</Badge>,
};

export const White: Story = {
  render: () => <Badge variant="white">Label</Badge>,
};
