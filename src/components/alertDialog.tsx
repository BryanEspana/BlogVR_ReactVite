// Suponiendo que este es el contenido de ../components/alertDialog
import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import 'animate.css';

interface SimpleAlertProps {
  text: string;
  severity: "error" | "info" | "success" | "warning" | undefined;
}

const SimpleAlert: React.FC<SimpleAlertProps> = ({ text, severity }) => {
  return (
    <div className='animate__animated animate__headShake' style={{margin:'10px'}}>
    <Alert icon={<CheckIcon fontSize="inherit" />} severity={severity}>
      {text}
    </Alert>
    </div>
  );
}

export default SimpleAlert;
