import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Attorna - ${title}`
    },[title])
};

export default useTitle;