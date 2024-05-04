import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import { createPost } from '../../hooks/conection';
import SimpleAlert from '../../components/alertDialog';

    function CreateBlog(){
        const [showAlert, setShowAlert] = useState<boolean>(false);
        const [alertText, setAlertText] = useState<string>('');
        const [alertSeverity, setAlertSeverity] = useState<"error" | "info" | "success" | "warning" | undefined>(undefined);
      
        const [formData, setFormData] = useState({
            name_device: '',
            image_url: '',
            description: '',
            information: ''
        });

        const handleChange = (event) => {
            const { name, value } = event.target; 
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
        

        const handleSubmit = async (event) => {
            event.preventDefault();
            const postData = {
                ...formData,
                relase_date: new Date().toISOString().split('T')[0] // Asignar fecha actual
            };
            try {
                await createPost(postData);
                setAlertText('Blog creado con exito');
                setAlertSeverity('success');
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
                alert('Blog creado con éxito');
                window.location.href = '/';
            } catch (error) {
                console.error('Error al crear el blog:', error);
                alert('Error al crear el blog');
            }
        };
        return(
            <div className='pageCenter'>
    <h1>Crear blog</h1>
    <form className='FormBlog' onSubmit={handleSubmit}>
        <div className='formInput'>
            <label>Nombre del blog</label>
            <TextField
                id="name_device"
                name="name_device"
                value={formData.name_device}
                onChange={handleChange}
                variant="outlined" />
        </div>
        
        <div className='formInput'>
            <label>URL de la imagen:</label>
            <TextField
                id="image_url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                variant="outlined" />
        </div>
        <div className='formInput'>
            <label>Descripción</label>
            <TextField
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                variant="outlined" />
        </div>
        <div className='formInput'>
            <label>Texto del blog</label>
            <TextareaAutosize
                aria-label="information"
                name="information"
                value={formData.information}
                onChange={handleChange}
                className='TextArea' />
        </div>
        <Button variant="contained" className='btn' type="submit">Crear Blog</Button>
    </form>
    {showAlert && <SimpleAlert text={alertText} severity={alertSeverity} />}

</div>

        )
    }

    export default CreateBlog;

function setAlertText(arg0: string) {
    throw new Error('Function not implemented.');
}

function setAlertSeverity(arg0: string) {
    throw new Error('Function not implemented.');
}
    