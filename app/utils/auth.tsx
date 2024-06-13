import { SignupFormSchema, FormState } from '../utils/formvalidation'
import bcrypt from 'bcrypt'


export async function signup(state: FormState, formData) {
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    })
   
    // If any form fields are invalid, return early
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }
    const { name, email, password } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)
    // Call the provider or db to create a user...
  }