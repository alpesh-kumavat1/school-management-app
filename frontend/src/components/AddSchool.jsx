import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styles/form.css";

export default function AddSchool() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                if (key === "image") {
                    formData.append("image", data.image[0]);
                } else {
                    formData.append(key, data[key]);
                }
            });

            await axios.post("http://localhost:5000/api/schools", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("School added successfully!");
            reset();
        } catch (err) {
            console.error(err);
            alert("Error while adding school.");
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="form-box">
                <h2>Add School</h2>

                <input {...register("name", { required: "Name required" })} placeholder="School Name" />
                {errors.name && <p className="error">{errors.name.message}</p>}

                <input {...register("address", { required: "Address required" })} placeholder="Address" />
                {errors.address && <p className="error">{errors.address.message}</p>}

                <input {...register("city", { required: "City required" })} placeholder="City" />
                {errors.city && <p className="error">{errors.city.message}</p>}

                <input {...register("state", { required: "State required" })} placeholder="State" />
                {errors.state && <p className="error">{errors.state.message}</p>}

                <input
                    type="text"
                    placeholder="Contact Number"
                    {...register("contact", {
                        required: "Contact number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Contact must be exactly 10 digits",
                        },
                    })}
                    className="form-input"
                />
                {errors.contact && <p className="error">{errors.contact.message}</p>}


                <input type="email" {...register("email_id", { required: "Email required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid Email" } })} placeholder="Email" />
                {errors.email_id && <p className="error">{errors.email_id.message}</p>}

                <input type="file" accept="image/*" {...register("image", { required: "Image required" })} />
                {errors.image && <p className="error">{errors.image.message}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
