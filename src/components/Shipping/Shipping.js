import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <form  className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
     
      <input defaultValue={user.displayName} {...register("name")} placeholder="Your Name" />
     
      <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Your E-mail"/>
     
                {errors.email && <span className="error">This field is required</span>}
      <input defaultValue="" {...register("address")} placeholder="Your Address" />
      <input defaultValue="" {...register("city")} placeholder="Your City" />
      <input defaultValue="" {...register("phone")} placeholder="Your Phone Number" />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;