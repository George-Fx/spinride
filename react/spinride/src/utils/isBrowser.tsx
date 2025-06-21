export function isBrowser(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    /android|iphone|ipad|ipod|opera mini|iemobile|blackberry|webos/.test(
      userAgent,
    );
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true;
  return !isMobile && !isStandalone;
}
