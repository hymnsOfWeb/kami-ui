import { useTheme } from '@kami-ui/next-theme';
import { HomeWrapper } from '@modules/home/styles';
import { HomeProps } from '@modules/home/types';

export default function Home({ className }: HomeProps) {
  const { updateTheme, getColor } = useTheme();
  console.log('color >>>>>>>', getColor('primary', 0));
  return (
    <HomeWrapper className={className}>
      <h1>Hello Home</h1>
      <button onClick={() => updateTheme('dark')}>Dark</button>
      <button onClick={() => updateTheme('light')}>Light</button>
    </HomeWrapper>
  );
}
