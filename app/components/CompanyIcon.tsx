import React, { useState, useRef, useEffect } from "react";
import { RiBuildingLine } from "react-icons/ri";

interface CompanyIconProps {
  companyName: string;
  size?: number;
  className?: string;
}

const CompanyIcon: React.FC<CompanyIconProps> = ({
  companyName,
  size = 20,
  className = "flex-shrink-0",
}) => {
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  //resets image on company name change
  useEffect(() => {
    setImageError(false);
    setLoading(true);
  }, [companyName]);

  //Check if image is already in cache
  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      if (img.complete) {
        if (img.naturalWidth > 0) {
          // Image loaded successfully
          setLoading(false);
          setImageError(false);
        } else {
          // Image failed to load
          setImageError(true);
          setLoading(false);
        }
      }
    }
  }, [companyName]);

  // Timeout to prevent infinite loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        setLoading(false);
        setImageError(true);
      }
    }, 5000);
    return () => clearTimeout(timeout);
  }, [loading, companyName]);

  if (!companyName || imageError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded ${className}`}
        style={{ width: size, height: size }}
      >
        <RiBuildingLine
          size={Math.floor(size * 0.6)}
          className="text-gray-500"
        />
      </div>
    );
  }

  // Clean company name for URL
  const cleanCompanyName = companyName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '') // Remove special characters and spaces
    .trim();
  
  const logoUrl = `https://logo.clearbit.com/${cleanCompanyName}.com`;
  
  console.log(`CompanyIcon for "${companyName}" -> URL: ${logoUrl}`);

  const handleImageError = () => {
    console.log(`Failed to load logo for: ${companyName} - URL: ${logoUrl}`);
    setImageError(true);
    setLoading(false);
  };

  const handleImageLoad = () => {
    console.log(`Successfully loaded logo for: ${companyName}`);
    setLoading(false);
  };

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        ref={imgRef}
        src={logoUrl}
        alt={`${companyName} logo`}
        width={size}
        height={size}
        className="rounded object-contain"
        onError={handleImageError}
        onLoad={handleImageLoad}
        style={{ display: loading ? "none" : "block" }}
      />
    </div>
  );
};

export default CompanyIcon;