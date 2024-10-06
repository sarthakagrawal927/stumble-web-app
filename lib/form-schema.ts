import * as z from 'zod';

export const profileSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Product Name must be at least 3 characters' }),
  category: z
    .string()
    .min(3, { message: 'Product Name must be at least 3 characters' }),
  price: z
    .string()
    .min(1, { message: 'Product Name must be at least 3 characters' }),
  rich_text: z.string().min(1, { message: 'Please add rich_text' }),
  // contactno: z.coerce.number(),
  // country: z.string().min(1, { message: 'Please select a category' }),
  // description: z.string().min(1, { message: 'Please select a category' }),
  // jobs array is for the dynamic fields
  // jobs: z.array(
  //   z.object({
  //     jobcountry: z.string().min(1, { message: 'Please select a category' }),
  //     jobcity: z.string().min(1, { message: 'Please select a category' }),
  //     jobtitle: z
  //       .string()
  //       .min(3, { message: 'Product Name must be at least 3 characters' }),
  //     employer: z
  //       .string()
  //       .min(3, { message: 'Product Name must be at least 3 characters' }),
  //     startdate: z
  //       .string()
  //       .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
  //         message: 'Start date should be in the format YYYY-MM-DD'
  //       }),
  //     enddate: z.string().refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
  //       message: 'End date should be in the format YYYY-MM-DD'
  //     })
  //   })
  // )
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
