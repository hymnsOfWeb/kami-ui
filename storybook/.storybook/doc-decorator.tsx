import { DocsContainer } from "@storybook/addon-docs/blocks";
import CommonDecorator from "./common-decorator";

const DocDecorator: typeof DocsContainer = ({ children, context }) => {
  return (
    <CommonDecorator>
      <DocsContainer context={context}>{children}</DocsContainer>
    </CommonDecorator>
  );
};

export default DocDecorator;
