import Markdown from "markdown-to-jsx";

import features from "./features.md";
import { StyledFeaturePage } from "./StyledFeatures";

export default function FeaturePage(): JSX.Element {
  return (
    <StyledFeaturePage>
      <Markdown>{features}</Markdown>
    </StyledFeaturePage>
  );
}
