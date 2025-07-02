import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const useWebVitals = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: Metric) => {
      console.log(metric.name + ':', metric);
      
      // Send to Google Analytics if available
      if (window.gtag) {
        window.gtag('event', metric.name, {
          value: metric.value,
          metric_id: metric.id,
          metric_delta: metric.delta,
        });
      }
    };

    // Measure Core Web Vitals (FID was replaced by INP)
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics); // Interaction to Next Paint (replaces FID)
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);
};
