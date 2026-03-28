import type { DecoratorFunction } from "storybook/internal/csf";
import CommonDecorator from "./common-decorator";

const StoryDecorator: DecoratorFunction = (Story) => {
  return (
    <CommonDecorator>
      <Story />
    </CommonDecorator>
  );
};

export default StoryDecorator;
