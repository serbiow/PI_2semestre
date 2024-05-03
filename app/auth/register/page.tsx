import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <main className="w-full bg-[#010E21] 
      h-screen flex  left-auto">
      <div className=" p-12 bg-[#E7C7A1] shadow-lg rounded-2xl flex justify-center h-fit mt-28  items-center ml-auto mr-auto">
        <RegisterForm />
      </div>
    </main>
  )
}