import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { HeartIcon, SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";


export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 z-10 w-full bg-background border-t">
      <div className="flex justify-around items-center h-14">
        <Link
          href="/profile"
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors data-[active=true]:text-primary"
          prefetch={false}
        >
          <UserIcon className="w-6 h-6" />
          <span className="text-xs font-medium">Profile</span>
        </Link>
        <Link
          href="/"
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors data-[active=true]:text-primary"
          prefetch={false}
        >
          <SearchIcon className="w-6 h-6" />
          <span className="text-xs font-medium">Discover</span>
        </Link>
        <Link
          href="/likes"
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors data-[active=true]:text-primary"
          prefetch={false}
        >
          <HeartIcon className="w-6 h-6" />
          <span className="text-xs font-medium">Likes</span>
        </Link>
        <Link
          href="/chat"
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors data-[active=true]:text-primary"
          prefetch={false}
        >
          <ChatBubbleIcon className="w-6 h-6" />
          <span className="text-xs font-medium">Chat</span>
        </Link>
      </div>
    </nav>
  );
}