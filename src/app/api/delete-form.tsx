"use client";

import { useFormState, useFormStatus } from "react-dom";
import { deleteUsuario } from "@/app/api/actions";

const initialState = {
  message: "",
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Delete
    </button>
  );
}

export function DeleteForm({ id, nome }: { id: number; nome: string }) {
  const [state, formAction] = useFormState(deleteUsuario, initialState);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="nome" value={nome} />
      <DeleteButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}