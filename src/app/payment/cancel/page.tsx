import { XCircle } from "lucide-react";
import PaymentLayout from "@/components/PaymentLayout";

export default function PaymentCancelPage() {
  return (
    <PaymentLayout
      title="Payment Cancelled"
      description="Your payment was not processed"
      icon={<XCircle className="h-6 w-6 text-red-600" />}
    >
      <div className="mt-8">
        <div className="text-sm text-gray-600">
          <p>
            Your payment was cancelled. If you experienced any issues or have
            questions, please don&apos;t hesitate to contact our support team.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900">
            What you can do next:
          </h3>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
            <li>Review your cart and try again</li>
            <li>Check your payment method</li>
            {/* <li>Contact our support if you need assistance</li> */}
          </ul>
        </div>
      </div>
    </PaymentLayout>
  );
}
