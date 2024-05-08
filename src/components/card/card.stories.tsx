import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";
import { Alert, GasOutline } from "../../../public/icons";
import { Badge } from "../badge/badge";
import { Cta } from "../cta";
import { Text } from "../text";
import { Title } from "../title";

const meta: Meta<typeof Card> = {};

export default meta;
type Story = StoryObj<typeof Text>;

export const Template: Story = {
  render: () => (
    <Card.Root>
      <div className="flex w-full justify-end">
        <Badge variant="error" className="mb-base">
          A rischio sospensione
        </Badge>
      </div>
      <Card.Header>
        <div className="flex items-center gap-xxs">
          <GasOutline className="fill-black h-xs w-xs" />
          <Text size="sm" weight="medium">
            Gas
          </Text>
        </div>
        <Text size="xs" weight="light">
          Pizza Risorgimento 3, Amandola (FM)
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
        <Text size="xs" weight="regular" className="line-through leading-none">
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
  ),
};
