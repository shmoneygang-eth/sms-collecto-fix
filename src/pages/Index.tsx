import { PhoneForm } from "@/components/PhoneForm";
import { PasswordEntry } from "@/components/PasswordEntry";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <img 
            src="/lovable-uploads/dbaa00ec-ed8e-4ec2-a738-6d376e844c3c.png" 
            alt="Brand Logo" 
            className="mx-auto mb-6 w-32 h-auto"
          />
          <h1 className="text-3xl font-bold mb-2">Get VIP Early Access</h1>
          <p className="text-gray-600 mb-4">
            Enter your Phone Number to get the Site Password
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg">
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