/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RFogh5i9Csw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Tabs defaultValue="team" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="team">Our Team</TabsTrigger>
              <TabsTrigger value="about">About Us</TabsTrigger>
            </TabsList>
            <TabsContent value="team">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Meet the talented individuals behind our success.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <div className="group col-span-1">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="group col-span-1">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="group">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="group">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="group">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="group">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="group">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="group">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="group">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="group">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="about">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Learn more about our company and our mission.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <div className="group">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="group">
                  <Link href="#" className="block rounded-full overflow-hidden" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      width={128}
                      height={128}
                      alt="Avatar"
                      className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}