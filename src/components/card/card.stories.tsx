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
  render: () => (
    <Card className="">
      <div className="flex w-full justify-end">
        <Badge variant="error" className="mb-1">
          A rischio sospensione
        </Badge>
      </div>
      <CardHeader className="border-b">
        <div className="pb-1">
          <div className="flex items-center gap-3">
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
        <div className="flex gap-2 py-3 pr-4">
          <Alert />
          <Text size="xs" weight="regular">
            Dobbiamo chiederti di compilare un modulo. Entra per scaricarlo.
          </Text>
        </div>
        <Text size="xs" weight="light" className="pb-1">
          Per questa fornitura pagherai
        </Text>
        <Text size="xs" weight="regular" className="line-through leading-none ">
          65,46 €
        </Text>

        <div className="flex items-top gap-1">
          <Title as="h1" className="leading-none mt-[-5px]">
            57
          </Title>
          <div>
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
