import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {Paper, TextField} from '@mui/material'
import {Card,CardContent} from '@mui/material'
import {Button} from '@mui/material'

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      props.onNewMessage( msg );
      navigate("/display_msg"); 
  };
    
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Set Message</h1>
                <textarea 
                    rows="4"
                    cols="50"
                    placeholder="Enter your message here"
                    onChange={ (e) => setMsg(e.target.value) }
                    value={ msg }
                ></textarea>
                <input type="submit" value="Send Message" />
            </form>
            <Paper elevation={9}>
                <p>some text</p>
            </Paper>
            <Card>
                <CardContent>
                    <h2>This is card</h2>
                </CardContent>
                <CardContent>
                    <h2>This is second card content</h2>
                </CardContent>
            </Card>
            <p>betwween cards</p>
            <Card>
                <CardContent>This is New card</CardContent>
            </Card>
            <Button>Button from MUI</Button>
            <TextField variant='filled' value='test'/>
        </div>
    );
};
    
export default MessageForm;