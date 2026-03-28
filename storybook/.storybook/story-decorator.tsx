import type { Preview } from "@storybook/react-vite";
import CommonDecorator from "./common-decorator";

const StoryDecorator: Preview["decorators"] = (Story) => {
  return (
    <CommonDecorator>
      <Story />
    </CommonDecorator>
  );
};

export default StoryDecorator;
