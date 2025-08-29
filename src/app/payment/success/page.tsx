import { CheckCircle } from "lucide-react";
import PaymentLayout from "@/components/PaymentLayout";

export default function PaymentSuccessPage() {
  return (
    <PaymentLayout
      title="Payment Successful"
      description="Thank you for your purchase!"
      icon={<CheckCircle className="h-6 w-6 text-green-600" />}
    >
      <div className="mt-8">
        <div className="text-sm text-gray-600">
          <p>
            Your order has been successfully processed. You will receive an
            email confirmation shortly.
          </p>
          {/* <p className="mt-2">Order number: #123456</p> */}
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900">
            What&apos;s next?
          </h3>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
            {/* <li>Check your email for order details</li> */}
            {/* <li>Track your shipment</li> */}
            <li>Leave a review for your purchased items</li>
          </ul>
        </div>
      </div>
    </PaymentLayout>
  );
}
