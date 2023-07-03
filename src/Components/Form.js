import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
    const { register,
        formState: { errors },
        handleSubmit
    } = useForm()
    
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <div className="container my-5">
                <div className="border p-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>

                            
                        <div className="col-12 ">

                            <textarea className="form-control p-3 m-1 rounded-0" id="exampleFormControlTextarea1" rows="6">Enter Message</textarea>
                        </div>
                            <div className='mt-3'>
                                <input type="text" className="form-control p-3 m-1 rounded-0 w-100 " id="firstName" placeholder="Enter your name" {...register("name", { required: true })} />
                                <p className="text-danger">
                                    {errors.name?.type === "required" && "Name is required"}
                                </p>
                            </div>

                            <div>
                                <input type="email" className="form-control p-3 m-1 rounded-0 w-100" placeholder="Enter email address" {...register("email", { required:true , pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i  })} />
                                <p className="text-danger">
                                    {errors.email?.type === "required" && "Email is required"}
                                    {errors.email?.type === "pattern" && "@gmail.com is required"}
                                </p>
                            </div>

                            <div className="text-strat">
                                <button className="btn btn-primary text-light mt-3" type='submit'
                                  >submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;