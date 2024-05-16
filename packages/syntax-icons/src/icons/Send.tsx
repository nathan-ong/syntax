import { type ComponentProps, forwardRef } from "react";
import Icon from "../../../syntax-core/src/Icon/Icon";
const Send = forwardRef<
  SVGSVGElement,
  Omit<ComponentProps<typeof Icon>, "path">
>(({ color, size }, ref) => (
  <Icon
    ref={ref}
    path="M20 2 2 9v3l6 2.5L13.5 9l1.5 1.5L9.5 16l2.5 6h3l7-18z"
    color={color}
    size={size}
  />
));
Send.displayName = "Send";
export default Send;
