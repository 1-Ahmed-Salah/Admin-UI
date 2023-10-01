import { Button } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';

import './addModal.scss'
import 'react-toastify/dist/ReactToastify.css';


const AddModal = ({slug, columns, setOpen}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success('User added', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <div className="addModal">
            <div className="modal">
                <span className='close' onClick={()=> setOpen(false)}>X</span>
                <h2>Add new {slug}</h2>
                <form onSubmit={handleSubmit}>
                    {
                        columns
                        .filter(item => item.field !== 'id' && item.field !== 'img')
                        .map(item => (
                            <div key={item.field} className="item">
                                <label htmlFor="">{item.headerName}</label>
                                <input type={item.type} placeholder={item.headerName} />
                            </div>
                        ))
                    }
                    <Button 
                        className='btn'
                        variant='contained' 
                        fullWidth 
                        onClick={handleSubmit}
                        type='submit'
                        
                    >
                        Send
                    </Button>
                </form>
                    
            </div>
                <ToastContainer />
        </div>
    )
}

export default AddModal