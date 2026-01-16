import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="text-center">
        <h1>404 Not Found</h1>
        <p>Could not find requested resource</p>
        <Link href="/">
          <Button variant="link">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
