/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4hNWYZCbNUG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground flex items-center p-4 shadow">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <div className="font-medium">John Doe</div>
            <div className="text-xs text-primary-foreground/80">Online</div>
          </div>
        </div>
      </header>
      <ScrollArea className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-3 max-w-[75%]">
            <p>Hey there! How's it going?</p>
            <div className="text-xs text-muted-foreground mt-1">2:34 PM</div>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-primary rounded-lg p-3 max-w-[75%] text-primary-foreground">
            <p>Pretty good, thanks for asking!</p>
            <div className="text-xs text-primary-foreground/80 mt-1">2:35 PM</div>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-3 max-w-[75%]">
            <p>That's great to hear! Did you catch the game last night?</p>
            <div className="text-xs text-muted-foreground mt-1">2:36 PM</div>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-primary rounded-lg p-3 max-w-[75%] text-primary-foreground">
            <p>No, I missed it. Was it a good one?</p>
            <div className="text-xs text-primary-foreground/80 mt-1">2:37 PM</div>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </ScrollArea>
      <div className="bg-muted flex items-center p-4 gap-2">
        <Input
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 text-sm bg-transparent rounded-lg focus-visible:ring-0 ring-0 focus-visible:ring-offset-0"
        />
        <Button variant="ghost" size="icon" className="rounded-full">
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  )
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}