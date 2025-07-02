
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LazyLoading from "./components/LazyLoading";
import ErrorBoundary from "./components/ErrorBoundary";
import { useAnalytics } from "./hooks/use-analytics";
import { useWebVitals } from "./hooks/use-web-vitals";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Blog articles
const AutomationArticle = lazy(() => import("./pages/blog/AutomationArticle"));
const SecurityArticle = lazy(() => import("./pages/blog/SecurityArticle"));
const DigitalTransformationArticle = lazy(() => import("./pages/blog/DigitalTransformationArticle"));
const RentalArticle = lazy(() => import("./pages/blog/RentalArticle"));
const ERPArticle = lazy(() => import("./pages/blog/ERPArticle"));
const CloudArticle = lazy(() => import("./pages/blog/CloudArticle"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const AppContent = () => {
  useAnalytics();
  useWebVitals();

  return (
    <Suspense fallback={<LazyLoading height="h-screen" />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/solucoes" element={<SolutionsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/1" element={<AutomationArticle />} />
        <Route path="/blog/2" element={<SecurityArticle />} />
        <Route path="/blog/3" element={<DigitalTransformationArticle />} />
        <Route path="/blog/4" element={<RentalArticle />} />
        <Route path="/blog/5" element={<ERPArticle />} />
        <Route path="/blog/6" element={<CloudArticle />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
