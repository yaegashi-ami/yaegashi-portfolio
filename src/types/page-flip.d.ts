declare module "page-flip" {
  export class PageFlip {
    constructor(element: HTMLElement, settings: Record<string, unknown>);
    loadFromHTML(items: NodeListOf<HTMLElement> | HTMLElement[]): void;
    flipNext(corner?: string): void;
    flipPrev(corner?: string): void;
    flip(page: number, corner?: string): void;
    turnToPage(page: number): void;
    getPageCount(): number;
    getCurrentPageIndex(): number;
    destroy(): void;
    on(event: string, callback: (e: { data: unknown }) => void): void;
  }
}
