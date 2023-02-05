import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useAppSelector} from "../store/hooks";

const Test = () => {
    const posts = useAppSelector(state => state.posts);

    useEffect(() => {
        console.log('Test component');
        console.log(posts);
    },[])

    return (
        <div>
            fffffff
            <div>
                <button>Создать</button>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default Test;