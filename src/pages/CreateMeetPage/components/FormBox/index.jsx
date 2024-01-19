import { useForm } from "react-hook-form"
import { Box, TextField, Button } from "@mui/material"
import { callAPI } from "../../../../domain/api"
import classes from './style.module.scss'


const FormBox = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const scheduleTimestamp = new Date(data.schedule);
            const dateString = scheduleTimestamp.toLocaleDateString();
            const timeString = scheduleTimestamp.toLocaleTimeString();
            data.schedule = `${dateString} ${timeString}`;
            console.log(data);
            await callAPI('/posts', 'POST', {}, {}, data);
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField id="outlined-basic" label="Room Creator Name" variant="outlined" {...register("roomMaster", { required: true })}
                        aria-invalid={errors.roomMaster ? "true" : "false"} />
                    {errors.roomMaster?.type === "required" && (
                        <p role="alert">Room creator name is required</p>
                    )}
                    <br /><br />
                    <input className={classes["time-input"]}  type="datetime-local" {...register("schedule", { required: true })}
                        aria-invalid={errors.schedule ? "true" : "false"} min={new Date().toISOString().split("T")[0]} />
                    {errors.schedule?.type === "required" && (
                        <p role="alert">Schedule is required</p>
                    )}
                    <br /><br />
                    <TextField id="outlined-basic" label="Location" variant="outlined"  {...register("location", { required: true })}
                        aria-invalid={errors.location ? "true" : "false"} />
                    {errors.location?.type === "required" && (
                        <p role="alert">Location is required</p>
                    )}
                    <br /><br />
                    <TextField id="outlined-basic" label="Description" variant="outlined"  {...register("description", { required: true })}
                        aria-invalid={errors.description ? "true" : "false"} />
                    {errors.description?.type === "required" && (
                        <p role="alert">Description is required</p>
                    )}
                    <br /><br />
                    <TextField id="outlined-basic" label="Duration" variant="outlined" {...register("duration", { required: true })}
                        aria-invalid={errors.duration ? "true" : "false"} />
                    {errors.duration?.type === "required" && (
                        <p role="alert">Duration is required</p>
                    )}
                    <br /><br />
                    <TextField id="outlined-basic" label="Contact Phone" variant="outlined"  {...register("contactPhone", { required: true })}
                        aria-invalid={errors.contactPhone ? "true" : "false"} />
                    {errors.contactPhone?.type === "required" && (
                        <p role="alert">Contact phone is required</p>
                    )}
                    <br /><br />
                    <input className={classes["submit-button"]} type="submit" />
                </form>
            </Box>
        </>
    )
}

export default FormBox