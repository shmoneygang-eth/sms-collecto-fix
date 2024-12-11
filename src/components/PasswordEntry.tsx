import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const PasswordEntry = () => {
  const [isVisible, setIsVisible] = useState(false);

  if (!isVisible) {
    return (
      <button 
        onClick={() => setIsVisible(true)}
        className="text-black cursor-pointer hover:underline"
      >
        Click Here to Enter Password
      </button>
    );
  }

  return (
    <form action="/.wf_auth" method="post" className="space-y-4">
      <Input
        type="password"
        name="password"
        placeholder="password"
        required
        autoFocus
        maxLength={256}
        className="w-full"
      />
      <Button type="submit" className="w-full">
        Enter
      </Button>
    </form>
  );
};