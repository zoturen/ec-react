import MainLayout from "./MainLayout.jsx";
import Description from "./Description.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SubLayout = ({currentPage, description, children}) => {
    return (
        <MainLayout>
            <Description currentPage={currentPage} description={description} />
            <ToastContainer />
            {children}
        </MainLayout>
    )
}

export default SubLayout