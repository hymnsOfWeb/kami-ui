import { useTheme } from "@kami-ui/next-theme";
import { HomeWrapper } from "@modules/home/styles";
import { HomeProps } from "@modules/home/types";

const Home = ({ className }: HomeProps) => {
  const { updateTheme } = useTheme();
  return (
    <HomeWrapper className={className}>
      <h1>Hello Home</h1>
      <button type="button" onClick={() => updateTheme("dark")}>
        Dark
      </button>
      <button type="button" onClick={() => updateTheme("light")}>
        Light
      </button>
    </HomeWrapper>
  );
};

export default Home;
