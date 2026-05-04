declare module "gsap-trial/SplitText" {
  type SplitTextTarget = string | Element | Array<string | Element>;

  interface SplitTextOptions {
    type?: string;
    linesClass?: string;
  }

  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];

    constructor(target: SplitTextTarget, options?: SplitTextOptions);
    revert(): void;
  }
}

