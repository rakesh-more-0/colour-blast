
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="relative inline-block animate-float">
            <div className="absolute -inset-4 bg-holi-gradient opacity-25 blur-xl rounded-full"></div>
            <h1 className="text-9xl font-display font-bold relative">404</h1>
          </div>
          
          <h2 className="text-3xl font-display font-bold mt-6 mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved to another URL.
          </p>
          
          <Link to="/" className="holi-btn-gradient inline-flex items-center px-8 py-3">
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
