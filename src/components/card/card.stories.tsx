import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardButton, CardContent, CardHeader } from "./card";
import { Badge } from "../badge/badge";
import { Text } from "../text/text";
import { GasOutline } from "../../../public/icons/gasOutline";
import { Alert } from "../../../public/icons/alert";
import { Title } from "../title";

const meta: Meta<typeof Card> = {
  //   component: Card,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Template: Story = {
  render: (args) => (
    <Card className="">
      <Badge variant="error" className="">
        A rischio sospensione
      </Badge>
      <CardHeader className="border-b">
        <div className="pb-1">
          <div className="flex items-center py-1 gap-3">
            <GasOutline />
            <Text size="sm" weight="medium">
              Gas
            </Text>
          </div>
          <Text size="xs" weight="light">
            Pizza Risorgimento 3, Amandola (FM)
          </Text>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 py-3">
          <Alert />
          <Text size="xs" weight="regular">
            Dobbiamo chiederti di compilare un modulo. Entra per scaricarlo.
          </Text>
        </div>
        <Text size="xs" weight="light">
          Per questa fornitura pagherai
        </Text>
        <Text
          size="xs"
          weight="regular"
          className="line-through leading-none pt-1"
        >
          65,46 €
        </Text>

        <div className="flex items-top gap-1">
          <Title as="h1" className="leading-none">
            57
          </Title>
          <div className="pt-1">
            <Title as="h4" className="leading-none">
              , 99 €
            </Title>
            <Text size="xs" weight="light" className="leading-none">
              al mese,
            </Text>
            <Text size="xs" weight="light" className="leading-none">
              per 12 mesi.
            </Text>
          </div>
        </div>
      </CardContent>
      <CardButton />
    </Card>
  ),
};
