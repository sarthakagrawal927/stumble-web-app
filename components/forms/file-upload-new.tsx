/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TLUpc1lmURc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Upload Your Photos</CardTitle>
        <CardDescription>Share your favorite moments by uploading your own photos.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="file-upload">Select a file</Label>
          <Input id="file-upload" type="file" accept="image/*" />
        </div>
        <div className="grid gap-2">
          <img
            src="/placeholder.svg"
            alt="Preview"
            className="aspect-[4/3] w-full rounded-md object-cover"
            width="400"
            height="300"
          />
          <Button type="submit">Upload</Button>
        </div>
      </CardContent>
    </Card>
  )
}