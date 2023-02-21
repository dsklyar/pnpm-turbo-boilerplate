import { forwardRef } from "react";
import tw, { styled } from "twin.macro";

const Root = styled.input`
  ${tw`inline-block h-10 w-full px-2.5 border border-solid focus:bg-white`}
`;

export const Input = forwardRef<HTMLInputElement, Element>((props, ref) => (
  <Root {...props} ref={ref} />
));

Input.displayName = "Input";

export default Input;
