import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

function AddTasksModal({isOpen, setIsOpen}) {
const { register, handleSubmit } = useForm()

    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='tufael khan'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3">
                <label htmlFor="title">Title</label>
                <input className="w-full rounded-lg" type="text" id="title" {...register('name')} />
               
                <label htmlFor="title">Title</label>
                <input className="w-full rounded-lg" type="text" id="title" {...register('name')} />
                
                <label htmlFor="title">Title</label>
                <input className="w-full rounded-lg" type="text" id="title" {...register('name')} />
                
                <label htmlFor="title">Title</label>
                <input className="w-full rounded-lg" type="text" id="title" {...register('name')} />
                
                <label htmlFor="title">Title</label>
                <input className="w-full rounded-lg" type="text" id="title" {...register('name')} />
                
                <label htmlFor="title">Title</label>
                <input className="w-full rounded-lg" type="text" id="title" {...register('name')} />
               
                <label htmlFor="title">Title</label>
                <select className="w-full rounded-lg" id="assignedTo" {...register('assignedTo')}>
                <option value="Tufael khan">Tufael Khan</option>
                <option value="sujoy">sujoy</option>
                <option value="sonjoy">sonjoy</option>
                <option value="rakib">rakib</option>
                <option value="jahid">jahid</option>
                <option value="habib">habib</option>
                <option value="polash">polash</option>
                </select>
                    </div>
                    <div>
                        <label htmlFor="title" className="mb-2">priority</label>
                        <select className="w-full rounded-lg" id="priority" {...register('priority')}>
                        <option value="high">High</option>
                        <option value="medium">medium</option>
                        <option value="low">low</option>
                        </select>
                    </div>
                <div className="grid grid-cols-3 mt-5">
                    <button type="button" className="btn btn-danger">cancel</button>
                    <button type="submit" className="btn btn-primary">submit</button>
                </div>
                </form>
                </Modal>
    );
}

export default AddTasksModal;