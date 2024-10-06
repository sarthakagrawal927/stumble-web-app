/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UDFEJSVAFdg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4 p-6">
          <Link href="#" className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50" prefetch={false}>
            <Avatar className="border w-12 h-12 relative">
              <AvatarImage src="/placeholder-user.jpg" alt="Image" />
              <AvatarFallback>JD</AvatarFallback>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-500" />
            </Avatar>
            <div className="flex-1 grid gap-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">2h</p>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                Hey, how's it going? I wanted to follow up on that project we discussed.
              </p>
            </div>
            <CheckIcon className="w-4 h-4 text-blue-500" />
          </Link>
          <Link href="#" className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50" prefetch={false}>
            <Avatar className="border w-12 h-12 relative">
              <AvatarImage src="/placeholder-user.jpg" alt="Image" />
              <AvatarFallback>JD</AvatarFallback>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-500" />
            </Avatar>
            <div className="flex-1 grid gap-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">Jane Smith</p>
                <p className="text-xs text-muted-foreground">1d</p>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                Did you see the new design mockups I sent over? Let me know what you think.
              </p>
            </div>
            <CheckIcon className="w-4 h-4 text-blue-500" />
          </Link>
          <Link href="#" className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50" prefetch={false}>
            <Avatar className="border w-12 h-12 relative">
              <AvatarImage src="/placeholder-user.jpg" alt="Image" />
              <AvatarFallback>JD</AvatarFallback>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-500" />
            </Avatar>
            <div className="flex-1 grid gap-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">Michael Johnson</p>
                <p className="text-xs text-muted-foreground">3d</p>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                Sounds good, let's schedule a call to discuss the next steps.
              </p>
            </div>
            <CheckIcon className="w-4 h-4 text-blue-500" />
          </Link>
          <Link href="#" className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50" prefetch={false}>
            <Avatar className="border w-12 h-12 relative">
              <AvatarImage src="/placeholder-user.jpg" alt="Image" />
              <AvatarFallback>JD</AvatarFallback>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-500" />
            </Avatar>
            <div className="flex-1 grid gap-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">Emily Davis</p>
                <p className="text-xs text-muted-foreground">1w</p>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                I'm excited to start working on the new project. Let me know if you need anything from me.
              </p>
            </div>
            <CheckIcon className="w-4 h-4 text-blue-500" />
          </Link>
          <Link href="#" className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50" prefetch={false}>
            <Avatar className="border w-12 h-12 relative">
              <AvatarImage src="/placeholder-user.jpg" alt="Image" />
              <AvatarFallback>JD</AvatarFallback>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-500" />
            </Avatar>
            <div className="flex-1 grid gap-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">David Lee</p>
                <p className="text-xs text-muted-foreground">2w</p>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                Just wanted to check in and see how the project is going. Let me know if you have any updates.
              </p>
            </div>
            <CheckIcon className="w-4 h-4 text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}