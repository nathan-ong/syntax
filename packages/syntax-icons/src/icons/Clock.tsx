import { type ComponentProps, forwardRef } from "react";
import Icon from "../../../syntax-core/src/Icon/Icon";
const Clock = forwardRef<
  SVGSVGElement,
  Omit<ComponentProps<typeof Icon>, "path">
>(({ color, size }, ref) => (
  <Icon
    ref={ref}
    path="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-1 2h2v7.6h-2zm5.3 13.7L11.6 13l1.4-1.4 4.7 4.7z"
    color={color}
    size={size}
  />
));
Clock.displayName = "Clock";
export default Clock;
