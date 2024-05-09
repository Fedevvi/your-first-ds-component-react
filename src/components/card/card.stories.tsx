import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";
import { Alert, ElectricityOutline, GasOutline } from "../../../public/icons";
import { Badge } from "../badge/badge";
import { Cta } from "../cta";
import { Text } from "../text";
import { Title } from "../title";

type CardType = typeof Card.Root &
  typeof Card.Header &
  typeof Card.Content &
  typeof Card.Footer;

const meta: Meta<CardType> = {
  argTypes: {
    supply: {
      options: ["gas", "electricity"],
      control: { type: "select" },
    },
  },
  args: {
    supply: "gas",
  },
};

export default meta;
type Story = StoryObj<CardType>;

export const Template: Story = {
  render: (args) => {
    const isGasSupply = args.supply === "gas";
    const supplyText = isGasSupply ? "Gas" : "Luce";
    const supplyIcon = isGasSupply ? (
      <GasOutline className="fill-black h-xs w-xs" />
    ) : (
      <ElectricityOutline className="fill-black h-xs w-xs" />
    );

    return (
      <Card.Root {...args}>
        <div className="flex w-full justify-end">
          <Badge variant="error" className="mb-base">
            A rischio sospensione
          </Badge>
        </div>
        <Card.Header>
          <div className="flex items-center gap-xxs">
            {supplyIcon}
            <Text size="sm" weight="medium">
              {supplyText}
            </Text>
          </div>
          <Text size="xs" weight="light">
            Piazza Risorgimento 3, Amandola (FM)
          </Text>
        </Card.Header>
        <Card.Content>
          <div className="flex gap-2xs py-xxs pr-xs">
            <Alert className="fill-black h-xs w-xs" />
            <Text size="xs" weight="regular">
              Dobbiamo chiederti di compilare un modulo. Entra per scaricarlo.
            </Text>
          </div>
          <Text size="xs" weight="light" className="pb-base">
            Per questa fornitura pagherai
          </Text>
          <Text size="xs" weight="medium" className="line-through leading-none">
            65,46 €
          </Text>
          <div className="flex items-top gap-base  mb-[-4px]">
            <Title as="h1" className="leading-none mt-[-5px]">
              57
            </Title>
            <div>
              <Title as="h4" className="leading-none">
                ,99 €
              </Title>
              <Text size="xs" weight="light" className="leading-none">
                al mese,
              </Text>
              <Text size="xs" weight="light" className="leading-none">
                per 12 mesi.
              </Text>
            </div>
          </div>
        </Card.Content>
        <Card.Footer>
          <Cta className="pt-xs">Monitora e gestisci</Cta>
        </Card.Footer>
      </Card.Root>
    );
  },
};
