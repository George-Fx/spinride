export const isMobileDevice = (): boolean => {
  return /android|iphone|ipad|ipod|opera mini|iemobile|blackberry|webos/i.test(
    navigator.userAgent,
  );
};
