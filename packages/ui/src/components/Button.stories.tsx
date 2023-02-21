import { ComponentStory, ComponentMeta } from "@storybook/react";
import tw from "twin.macro";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Button",
};
