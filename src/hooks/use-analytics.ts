import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const useAnalytics = () => {
  useEffect(() => {
    // Initialize Google Analytics 4 using Vite env variables
    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      ReactGA.send('page_view');
    }
  }, []);

  const trackEvent = (eventName: string, parameters?: any) => {
    ReactGA.event(eventName, parameters);
  };

  const trackPageView = (path: string) => {
    ReactGA.send({ hitType: 'pageview', page: path });
  };

  return { trackEvent, trackPageView };
};
