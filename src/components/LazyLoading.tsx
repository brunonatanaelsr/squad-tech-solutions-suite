import React from 'react';
import { Skeleton } from './ui/skeleton';

interface LazyLoadingProps {
  height?: string;
  className?: string;
}

export const LazyLoading: React.FC<LazyLoadingProps> = ({ 
  height = "h-32", 
  className = "" 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <Skeleton className={`w-full ${height} bg-gray-200`} />
    </div>
  );
};

export default LazyLoading;
