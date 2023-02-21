import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as TailwindStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  button,
  input,
  textarea {
    ${tw`focus:outline-none`}
  }
`;

const LibraryStyles = () => (
  <>
    <TailwindStyles />
    <CustomStyles />
  </>
);

export default LibraryStyles;
