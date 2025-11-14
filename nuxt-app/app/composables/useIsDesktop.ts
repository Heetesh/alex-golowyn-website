import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
export function useIsDesktop(): ComputedRef<boolean> {
	const isDesktop = useBreakpoints(breakpointsTailwind).greaterOrEqual("lg");

	return isDesktop;
}
