"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const { toast } = useToast();

  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
};

export default Home;
