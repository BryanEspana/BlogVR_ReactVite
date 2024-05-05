import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import { createPost, editBlog, getBlogById } from '../../hooks/conection';
import SimpleAlert from '../../components/alertDialog';
import { useParams } from 'react-router-dom';
import { BlogId } from '../../interfaces/blogsInterfaces';

    function EditBlog(){
        const { id } = useParams<{id: string}>();
        const [post, setPost] = useState<BlogId | null>(null);

        useEffect(() => {
            const fetchPosts = async () => {
                try {
                    const response = await getBlogById(id);
                    const data = response.data;
                    setPost(data);
                    console.log("Data del post:", data);
                    setFormData({
                        name_device: data.name_device || '',
                        image_url: data.image_url || '',
                        description: data.description || '',
                        information: data.Information || '',
                        relase_date: new Date().toISOString().split('T')[0] // Asignar fecha actual

                    });
                } catch (error) {
                    console.error('Error al obtener el blog:', error);
                }
            };
            fetchPosts();
        }, [id]);
        
        const [showAlert, setShowAlert] = useState<boolean>(false);
        const [alertText, setAlertText] = useState<string>('');
        const [alertSeverity, setAlertSeverity] = useState<"error" | "info" | "success" | "warning" | undefined>(undefined);
      
        const [formData, setFormData] = useState({
            name_device: '',
            image_url: '',
            description: '',
            information: '',
            relase_date: new Date().toISOString().split('T')[0] // Asignar fecha actual
            
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
            try {
                await editBlog(id, formData); // Suponiendo que updatePost es una función que acepta id y los datos a actualizar
                setAlertText('Blog actualizado con éxito');
                setAlertSeverity('success');
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
                alert('Blog actualizado con éxito');
                window.location.href = '/'; // O redirige a donde consideres apropiado tras la actualización
            } catch (error) {
                console.error('Error al actualizar el blog:', error);
                setAlertText('Error al actualizar el blog');
                setAlertSeverity('error');
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
                alert('Error al actualizar el blog');
            }
        };
        return(
            <div className='pageCenter'>
    <h1>Editar blog</h1>
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

    export default EditBlog;

