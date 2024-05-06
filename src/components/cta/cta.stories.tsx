import type { Meta, StoryObj } from "@storybook/react";
import { Cta } from "./cta";

const meta: Meta<typeof Cta> = {
  component: Cta,
};

export default meta;
type Story = StoryObj<typeof Cta>;

export const Template: Story = {
  render: (args) => <Cta {...args}>Call to action</Cta>,
};
