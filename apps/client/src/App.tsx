import { Text } from "ui";
import tw, { styled } from "twin.macro";

const Container = styled.main`
  ${tw`w-screen h-screen flex items-center justify-center`}
`;

function App() {
  return (
    <Container>
      <Text uppercase size="large" css={tw`text-red`}>
        I am a Vite App
      </Text>
    </Container>
  );
}

export default App;
