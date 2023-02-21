import tw, { styled } from "twin.macro";

export const Text = styled.span<{
  size?: "small" | "medium" | "large" | "jumbo";
  uppercase?: boolean;
}>`
  ${tw`text-default`}
  ${({ uppercase = false }) => uppercase && tw`uppercase`}
  ${({ size = "small" }) => {
    switch (size) {
      case "medium":
        return tw`text-2xl`;
      case "large":
        return tw`text-3xl`;
      case "jumbo":
        return tw`text-4xl`;
      case "small":
      default:
        return tw`text-base`;
    }
  }}
`;

export default Text;
