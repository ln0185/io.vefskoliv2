import { signup } from '../utils/auth'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
 
export function SignupForm() {
  const [state, action] = useActionState(signup, undefined)
  return (
    <form action={action}>
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" placeholder="Name" />
    </div>
    {state?.errors?.name && <p>{state.errors.name}</p>}

    <div>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" placeholder="Email" />
    </div>
    {state?.errors?.email && <p>{state.errors.email}</p>}

    <div>
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" />
    </div>
    {state?.errors?.password && (
      <div>
        <p>Password must:</p>
        <ul>
          {state.errors.password.map((error:string) => (
            <li key={error}>- {error}</li>
          ))}
        </ul>
      </div>
    )}
    <SignupButton />
  </form>
  )
}

//useFormStatus needs to be called in a chid component of the form
export function SignupButton() {
    const { pending } = useFormStatus()
   
    return (
      <button aria-disabled={pending} type="submit">
        {pending ? 'Submitting...' : 'Sign up'}
      </button>
    )
  }