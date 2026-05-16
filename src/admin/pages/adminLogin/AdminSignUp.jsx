import { useForm } from "react-hook-form";

function AdminSignUp(){

    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    return(
        <main>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="admin-signup-name">Admin name</label>
                    <input
                       type="text"
                       id="admin-signup-name"
                       {...register('name', { required:'admin name is required'})}
                    />
                </div>
                <div>
                    <label htmlFor="admin-signup-email">email</label>
                    <input
                       type="email"
                       id="admin-signup-email"
                       {...register('email',{required: 'admin email is required'})}
                    />
                </div>
                <div>
                    <label htmlFor="admin-signup-password">password</label>
                    <input
                     type="password"
                     id="admin-signup-password"
                     {...register('password',{required:"password is important"})}
                    />
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </main>
    )
}


export default AdminSignUp;