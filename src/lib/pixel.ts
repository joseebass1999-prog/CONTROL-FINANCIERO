// Utility to interact with Meta Pixel safely

interface CustomWindow extends Window {
  fbq?: (...args: any[]) => void;
  _fbq?: any;
}

const getFBQ = (): ((...args: any[]) => void) | null => {
  if (typeof window !== "undefined") {
    const customWindow = window as unknown as CustomWindow;
    if (typeof customWindow.fbq === "function") {
      return customWindow.fbq;
    }
  }
  return null;
};

/**
 * Track PageView event
 */
export function trackPageView(): void {
  const fbq = getFBQ();
  if (fbq) {
    fbq("track", "PageView");
  } else {
    console.warn("Meta Pixel (fbq) pageview: fbq is not initialized.");
  }
}

/**
 * Track ViewContent event
 */
export function trackViewContent(): void {
  const fbq = getFBQ();
  if (fbq) {
    fbq("track", "ViewContent");
  } else {
    // Retry once in case initialization is happening asynchronously
    setTimeout(() => {
      const retryFbq = getFBQ();
      if (retryFbq) {
        retryFbq("track", "ViewContent");
      } else {
        console.warn("Meta Pixel (fbq) viewContent: fbq is not initialized after retry.");
      }
    }, 1000);
  }
}

/**
 * Track InitiateCheckout event immediately before redirecting/opening the Hotmart checkout URL.
 */
export function trackInitiateCheckout(): void {
  const fbq = getFBQ();
  if (fbq) {
    fbq("track", "InitiateCheckout");
  } else {
    console.warn("Meta Pixel (fbq) initiateCheckout: fbq is not initialized.");
  }
}
