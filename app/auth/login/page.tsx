import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main>
      <section className="bg-[#010E21] min-h-screen flex items-center justify-center">
        <div className="bg-[#E7C7A1] flex rounded-2xl shadow-lg  p-10">
          <div className="px-8 pt-3 py-8">
            <h2 className="font-bold text-2xl ">Login</h2>
            <p className="pt-0 py-5">Se já é um cliente, realize o Login</p>

            {/* Formulario */}
            <LoginForm />

            <div className=" py-4 text-xs flex justify-between">
        <p className="pt-3 py-3">Não possui conta ainda?</p>
        <a href="/auth/register/"><button className=" rounded-xl pt-3 p-5 py-3 justify-center bg-[#010E21] text-[#E7C7A1] hover:bg-[#445a7e] transition-all">Registre-se</button></a>
      </div>


          </div>
        </div>
      </section>
    </main >
  )
}