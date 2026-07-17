import DataContext from "../context/ProductContext/ProductContext.jsx";
import { useContext } from "react";


const useDataContext = () => {
    return useContext(DataContext);
};

export default useDataContext