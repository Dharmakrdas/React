import {createRoot} from 'react-dom/client'
import Hello from './src/App';


const root = document.getElementById("app");
const app = createRoot(root);
app.render(<Hello/>);