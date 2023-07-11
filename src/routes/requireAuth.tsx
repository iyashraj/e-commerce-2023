import {Outlet,  NavLink, useNavigate, useLocation, Navigate} from 'react-router-dom'

const RequireAuth = () => {
const [authed] = AuthConsumer()
const location = useLocation()
    return authed.auth === true ? (
        children
    ) : (
        <Navigate to={"/login"} replace state={{path: location.pathname}}></Navigate>
    )
}

export default RequireAuth