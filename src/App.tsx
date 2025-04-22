
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Page Components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import BrandsPage from "./pages/BrandsPage";
import BrandDetailPage from "./pages/BrandDetailPage";
import AuthPage from "./pages/AuthPage";
import OrdersPage from "./pages/OrdersPage";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Context Providers
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

// RequireAuth component for protected routes
const RequireAuth = ({ children }: { children: JSX.Element }) => {
  // We will implement this logic in the page components directly
  return children;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:id" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={
                    <RequireAuth>
                      <CheckoutPage />
                    </RequireAuth>
                  } />
                  <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                  <Route path="/brands" element={<BrandsPage />} />
                  <Route path="/brands/:slug" element={<BrandDetailPage />} />
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/orders" element={
                    <RequireAuth>
                      <OrdersPage />
                    </RequireAuth>
                  } />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
