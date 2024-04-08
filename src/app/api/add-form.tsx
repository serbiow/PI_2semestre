"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createUsuario } from "@/app/api/actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createUsuario, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="usuario">Enter User </label>
      <input type="text" id="nome" name="nome" placeholder="nome" required />
      <input type="text" id="email" name="email" placeholder="email" required />
      <input type="text" id="senha" name="senha" placeholder="senha" required />
      <input type="text" id="telefone" name="telefone" placeholder="telefone" required />
      <input type="text" id="cpf" name="cpf" placeholder="cpf" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}