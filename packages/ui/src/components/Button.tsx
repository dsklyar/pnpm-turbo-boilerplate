import tw, { styled } from "twin.macro";
import { ArrowIcon } from "@assets";
import { Text } from "@components";

const Container = styled.button`
  ${tw`flex flex-row items-center px-2.5 py-2.5 shadow-sm hover:shadow-md active:shadow-sm border border-solid border-stroke`}
`;

const Icon = styled(ArrowIcon)`
  ${tw`h-4 w-4 ml-1 rotate-45`}
`;

export interface IButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, ...props }: IButtonProps) => {
  return (
    <Container {...props}>
      <Text uppercase>{text}</Text>
      <Icon />
    </Container>
  );
};

export default Button;
