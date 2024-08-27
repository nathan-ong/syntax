import { type ComponentProps, forwardRef } from "react";
import Icon from "../../../syntax-core/src/Icon/Icon";
const ExternalInstagram = forwardRef<
  SVGSVGElement,
  Omit<ComponentProps<typeof Icon>, "path">
>(({ color, size }, ref) => {
  const path =
    "M12.006 2c-.736 0-1.297 0-1.746.003-1.208.006-1.6.021-2.378.056-1.063.047-1.794.218-2.427.464-.66.258-1.22.598-1.774 1.157a4.9 4.9 0 0 0-1.157 1.77 7 7 0 0 0-.12.335c-.181.56-.306 1.21-.345 2.091-.02.43-.032.741-.041 1.136C2.004 9.6 2 10.375 2 12.002c0 .54 0 .987.002 1.364.004 1.516.02 1.904.057 2.758.047 1.063.219 1.793.465 2.426.258.66.598 1.22 1.157 1.774a4.9 4.9 0 0 0 1.77 1.153c.637.246 1.364.418 2.427.465 1.068.046 1.407.058 4.124.058s3.056-.012 4.123-.058a9 9 0 0 0 1.117-.111 6.4 6.4 0 0 0 1.31-.354 4.9 4.9 0 0 0 1.771-1.153 4.9 4.9 0 0 0 1.153-1.77c.247-.637.418-1.364.465-2.426.013-.283.023-.515.03-.754.023-.66.029-1.374.029-3.368 0-1.124-.002-1.84-.008-2.37a44 44 0 0 0-.05-1.752 9 9 0 0 0-.153-1.346 6.3 6.3 0 0 0-.313-1.08 4.7 4.7 0 0 0-1.145-1.778 4.94 4.94 0 0 0-1.77-1.153c-.638-.246-1.365-.418-2.428-.464-.381-.018-.67-.032-1.006-.041a49 49 0 0 0-1.042-.017c-.498-.004-1.15-.005-2.08-.005Zm0 1.801c2.673 0 2.99.012 4.041.059.977.043 1.505.207 1.857.344.465.18.801.398 1.149.746.351.351.566.684.746 1.148.137.352.301.883.344 1.856.047 1.055.06 1.372.06 4.04 0 2.673-.013 2.989-.06 4.04-.043.977-.207 1.504-.344 1.856-.18.465-.398.801-.746 1.149a3.1 3.1 0 0 1-1.15.746c-.351.137-.883.3-1.856.344-1.055.047-1.372.058-4.041.058-2.674 0-2.99-.011-4.042-.058a7 7 0 0 1-1.258-.159 4 4 0 0 1-.598-.185 3.1 3.1 0 0 1-1.15-.746 3.1 3.1 0 0 1-.746-1.149c-.137-.352-.3-.883-.344-1.856-.019-.425-.032-.73-.04-1.118-.014-.575-.018-1.33-.018-2.922 0-2.672.011-2.989.058-4.04.043-.976.207-1.504.344-1.856a3.4 3.4 0 0 1 .272-.557 3 3 0 0 1 .25-.346 4 4 0 0 1 .225-.245 3.1 3.1 0 0 1 1.149-.747c.195-.075.446-.16.796-.227a7 7 0 0 1 1.06-.116c1.052-.047 1.368-.059 4.042-.059m0 3.063a5.14 5.14 0 0 0-5.14 5.138 5.14 5.14 0 0 0 10.28 0 5.14 5.14 0 0 0-5.14-5.138m0 8.47a3.333 3.333 0 1 1-.001-6.666 3.333 3.333 0 0 1 0 6.667Zm5.343-7.473a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4";
  return <Icon ref={ref} path={path} color={color} size={size} />;
});
ExternalInstagram.displayName = "ExternalInstagram";
export default ExternalInstagram;