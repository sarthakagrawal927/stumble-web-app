/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RFogh5i9Csw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import ProfileCard from "@/components/profile/profileCard"
import { baseServerSideFetch } from "@/lib/api-ssr";
import { UserSwipeCard } from "@/types";

export default async function Component() {
  const { data } = await baseServerSideFetch<any>(`/api/v1/activity/find`);
  console.log({ data });
  const stumbles = data?.stumbles as UserSwipeCard[];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 overflow-auto">
      {(stumbles || []).map((profile) => (
        <ProfileCard profile={profile} key={profile.id} />
      ))}
    </section>
  )
}