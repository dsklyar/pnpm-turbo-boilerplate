import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <>
    <Text {...args}>Default or (text-base)</Text>
    <br />
    <Text {...args} size="medium">
      Medium or (text-2xl)
    </Text>
    <br />
    <Text {...args} size="large">
      Large or (text-3xl)
    </Text>
    <br />
    <Text {...args} size="jumbo">
      Jumbo or (text-4xl)
    </Text>
  </>
);

export const Default = Template.bind({});
Default.args = {
  uppercase: true,
};
