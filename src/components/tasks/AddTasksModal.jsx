import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

function AddTasksModal({isOpen, setIsOpen}) {
const { register, handleSubmit, reset } = useForm()
const dispatch = useDispatch()

    const onCancel = () =>{
        reset();
        setIsOpen(false)
    }

    const onSubmit = (data) =>{
        dispatch(addTask(data))
        onCancel()
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='tufael khan'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3">
                <label htmlFor="title">Title</label>
                <input className="w-full rounded-lg" type="text" id="title" {...register('name')} />
               
                <label htmlFor="title">description</label>
                <input className="w-full rounded-lg" type="text" id="description" {...register('description')} />
                
                <label htmlFor="title">Title</label>
                <input className="w-full rounded-lg" type="date" id="date" {...register('date')} />
                
                <label htmlFor="title">Assign any one</label>
                <select className="w-full rounded-lg" id="assignedTo" {...register('assignedTo')}>
                <option value="choice one">Choice one</option>
                <option value="Tufael">Tufael</option>
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
                    <button onClick={()=>onCancel()} type="button" className="btn btn-danger mr-5">cancel</button>
                    <button  type="submit" className="btn btn-primary">submit</button>
                </div>
                </form>
                </Modal>
    );
}

export default AddTasksModal;