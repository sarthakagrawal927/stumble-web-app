'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import FileUpload from '../file-upload';
import ImageUpload from './file-upload-new';

const FormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  gender: z.string().nonempty("Gender is required"),
  dob: z.string().nonempty("Date of Birth is required"),
  pronouns: z.string().nonempty("Pronouns are required"),
  description: z.string().nonempty("Description is required"),
  photo: z.instanceof(File).optional()
});

export const IMG_MAX_LIMIT = 3;

export default function OnboardingForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema)
  });
  const { register, handleSubmit, control, formState: { errors } } = form;

  return (
    <Form {...form}>
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input {...register("name")} />
        </FormControl>
        <FormMessage />
      </FormItem>

      <FormItem>
        <FormLabel>Gender</FormLabel>
        <FormControl>
          <Select {...register("gender")}>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>

      <FormItem>
        <FormLabel>Date of Birth</FormLabel>
        <FormControl>
          <Input type="date" {...register("dob")} />
        </FormControl>
        <FormMessage />
      </FormItem>

      <FormItem>
        <FormLabel>Pronouns</FormLabel>
        <FormControl>
          <Input {...register("pronouns")} />
        </FormControl>
        <FormMessage />
      </FormItem>

      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <Input {...register("description")} />
        </FormControl>
        <FormMessage />
      </FormItem>
      <ImageUpload />
      <Button type="submit">Submit</Button>

    </Form>
  );
}