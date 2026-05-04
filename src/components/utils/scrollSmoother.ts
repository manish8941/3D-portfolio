import type { ScrollSmoother } from "gsap-trial/ScrollSmoother";

export let smoother: ScrollSmoother | null = null;

export const setSmoother = (instance: ScrollSmoother | null) => {
  smoother = instance;
};
