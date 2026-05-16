import { useForm } from "react-hook-form";
function AdminLogin(){
    const { register, handleSubmit, formState: {errors},reset } = useForm();
    return(
        <main className="bg-blue-500">
            <form className="flex flex-col w-[50%] border" style={{gap:'1rem'}}>
                <div className="flex">
                     <label className='flex-1'htmlFor="admin-login-email">Email</label>
                     <input 
                         className="flex-6"
                         type="email"  id="admin-login-email"
                       {...register('email', {required: 'Email should not be empty'})}
                     />
                </div>

                <div className="flex">
                    <label className='flex-1' htmlFor="admin-login-password">Password</label>
                    <input
                    className="flex-6"
                     type="password"
                     id="admin-login-password"
                    />
                </div>
               <div className="border text-center">
                <button type="submit">Login</button>
               </div>
            </form>
        </main>
    )
}

export default AdminLogin;