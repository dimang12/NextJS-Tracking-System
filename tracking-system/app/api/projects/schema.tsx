import {z} from 'zod'

const schema = z.object({
  proName: z.string().min(3),
  proBrief: z.string(),
  proDescription: z.string().min(3),
  proStatus: z.boolean().optional(),
  proStartDate: z.date().optional(),
  proEndDate: z.date().optional(),
  proCreatedBy: z.number().int().positive(),
})

export default schema;