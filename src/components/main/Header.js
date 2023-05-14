import { Stack } from "@mui/system";
import { TbMinusVertical } from "react-icons/tb";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Header(props) {
    const dispatch = useDispatch()
    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#27187e", alignItems: "center",
        backgroundColor: "#d7d0ff", borderRadius: "4px",
        marginTop: "20px"
        
    }
    const handleClickOpen = () => {
        /* Showing popUp to show the data*/
        dispatch({ type: "SHOW_POPUP", payload: true })
    };
    
    function button() {
        if (props.link)
            return (
                <Link to={props.link} textDecor>
                    <BorderColorIcon fontSize={"small"} className="edit" style={{ textDecoration: "none" }} />
                </Link>
            )
        else if (props.popup)
            return (
                <BorderColorIcon fontSize={"small"} className="edit" onClick={handleClickOpen} />
            )
        else return <BorderColorIcon fontSize={"small"} className="edit" />
    }

    return (
        <div style={style}>
            <span style={{display: "flex", flexDirection: "row", alignItems: "center" }} sx={{ }}>
                <TbMinusVertical className="vline" />
                {props.title}
            </span>
            {
                button()
            }
        </div>

    )
}
export default Header;