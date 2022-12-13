import {RouterProvider} from 'react-router-dom';
import router from '../src/routes';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
};



export default App;
