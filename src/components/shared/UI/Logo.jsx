import { useNavigate } from "react-router"

export const Logo = ({ click, className }) => {
    const navigate = useNavigate()

    return (
        <img
            className={`cursor-pointer ${className}`}
            src="https://www.digikala.com/static/files/bc60cf05.svg"
            alt="digiKalaLogo"
            onClick={() => navigate('/')} />
    )
}

