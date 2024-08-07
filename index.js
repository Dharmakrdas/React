import {createRoot} from 'react-dom/client'
import AppLayout from './src/App';


const root = document.getElementById("app");
const app = createRoot(root);
app.render(<AppLayout/>);