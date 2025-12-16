import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export function useIsDesktop(): ComputedRef<boolean> {
	if (import.meta.server) {
		return computed(() => false);
	}

	return useBreakpoints(breakpointsTailwind).greaterOrEqual("lg");
}
