import { PhoneForm } from "@/components/PhoneForm";
import { PasswordEntry } from "@/components/PasswordEntry";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Store is closed rn man...</h1>
          <p className="text-gray-600 mb-8">
            Enter your phone number to get VIP access when we open.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <PhoneForm />
        </div>

        <div className="text-center mt-4">
          <PasswordEntry />
        </div>
      </div>
    </div>
  );
};

export default Index;