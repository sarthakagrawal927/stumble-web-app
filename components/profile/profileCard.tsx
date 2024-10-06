import { UserSwipeCard } from "@/types";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/f82c1KS8Ylk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function ProfileCard({ profile }: { profile: UserSwipeCard }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-primary rounded-t-xl overflow-hidden">
        <div className="relative h-[300px] sm:h-[400px]">
          <img src={profile.photos[0]} alt="Profile Picture" fill className="object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary to-transparent p-4 text-primary-foreground">
            <h1 className="text-2xl font-bold">{profile.name}, {profile.age}</h1>
            <p className="text-sm">
              {profile.conversation_starter}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-background p-6 rounded-b-xl">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold">Interests</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="bg-muted px-3 py-1 rounded-full text-sm">Travel</div>
              <div className="bg-muted px-3 py-1 rounded-full text-sm">Food</div>
              <div className="bg-muted px-3 py-1 rounded-full text-sm">Photography</div>
              <div className="bg-muted px-3 py-1 rounded-full text-sm">Hiking</div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Photos</h2>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <img
                src="/placeholder.svg"
                width={100}
                height={100}
                alt="Photo 1"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width={100}
                height={100}
                alt="Photo 2"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width={100}
                height={100}
                alt="Photo 3"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">About Me</h2>
            <p className="mt-2 text-muted-foreground">
              I'm a software engineer who loves exploring new places and trying different cuisines. In my free time, you
              can find me hiking, taking photos, or planning my next adventure. I'm passionate about technology and
              always eager to learn new things. I'm also a big fan of outdoor activities and enjoy staying active.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}