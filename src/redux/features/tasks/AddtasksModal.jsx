import { useForm } from "react-hook-form";


function AddtasksModal() {

    const { register, handleSubmit } = useForm()

    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name')} />
                <input type="submit" value="add" />
            </form>
        </div>
    );
}

export default AddtasksModal;