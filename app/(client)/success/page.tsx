"use client";

import useStore from "@/store";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Home, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";

const SuccessPageContent = () => {
  const { resetCart } = useStore();
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");

  useEffect(() => {
    if (orderNumber) {
      resetCart();
    }
  }, [orderNumber, resetCart]);

  return (
    <div className="py-5 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mx-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl flex flex-col items-center gap-4 shadow-2xl p-8 max-w-xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-lg"
        >
          <Check className="text-white w-10 h-10" />
        </motion.div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Order Confirmed!
        </h1>
        <p className="text-gray-700">
          Thank you for your purchase. We&#39;re processing your order and will
          ship it soon. A confirmation email with your order details will be
          sent to your inbox shortly.
        </p>
        <p className="text-gray-700">
          Order Number:{" "}
          <span className="text-black font-semibold tracking-wide">
            {orderNumber}
          </span>
        </p>
        <div className="w-full bg-gray-50 border rounded-sm p-4">
          <h2 className="font-semibold text-gray-900 mb-2">What&#39;s Next?</h2>
          <p className="text-gray-600 text-sm">
            Check your email for order confirmation
          </p>
          <p className="text-gray-600 text-sm">
            We&#39;ll notify you when your order ships
          </p>
          <p className="text-gray-600 text-sm">
            Track your order status anytime
          </p>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
          >
            <Home className="w-5 h-5 mr-2" />
            Home
          </Link>
          <Link
            href="/orders"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-shop_light_orange text-black rounded-lg hover:bg-shop_light_orange transition-all duration-300 shadow-md"
          >
            <Package className="w-5 h-5 mr-2" />
            Orders
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-3 font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Shop
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
};

export default SuccessPage;
