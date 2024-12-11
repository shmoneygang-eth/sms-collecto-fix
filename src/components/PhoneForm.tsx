import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

export const PhoneForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const phone = formData.get('phone') as string;
    
    // Format phone number
    const formattedPhone = phone.replace(/\D/g, '');
    
    if(formattedPhone.length !== 10) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    try {
      const response = await fetch('https://api.postscript.io/subscribe/form', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSubmitted(true);
      toast.success('VIP Status Acquired! Check your Texts for the Password.');
    } catch (error) {
      console.error('Error:', error);
      toast.error('There was an error submitting your phone number. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <p className="text-green-600">VIP Status Acquired! Check your Texts for the Password.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="shop_id" value="294745" />
      <input type="hidden" name="keyword_id" value="348285" />
      
      <div>
        <Input
          type="tel"
          name="phone"
          pattern="[0-9]{10}"
          placeholder="Phone Number (10 digits)"
          required
          autoFocus
          className="w-full"
        />
      </div>
      
      <Button type="submit" className="w-full bg-[#00F3FE] text-black hover:bg-[#00F3FE]/90">
        Submit
      </Button>
    </form>
  );
};