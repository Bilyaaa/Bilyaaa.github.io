import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';

const isAuth = true;
const AppRouter = () => {

    const {user} = useContext(Context)

    console.log(user)
    
    return (
        <Routes >
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
        </Routes>
    );
}

export {isAuth}
export default AppRouter;