import { Box } from "@mui/system";
import "./main.css"
import Header from "./Header";
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function MainPage() {
    const registerData = useSelector(state=>state.registerData)
    const allowanceData = useSelector(state=>state.allowancePopup)
    

    const styleFirstCol = {
        backgroundColor: "#F7F7F7", 
        fontWeight:"500", 
        padding: "10px 30px", 
        width:"70%", 
        fontSize:"14px"
    }
    
    return (
        <Box>
            <TableContainer>
                <Header title='Corporate Information' link='/register'/>
                <Table>
                    <TableBody>
                    
                        {
                            registerData?Object.keys(registerData).map(key => {
                                return (
                                    <TableRow sx={{width: "100%"}}>
                                        <TableCell style={{backgroundColor: "#F7F7F7", width:"30%"}}> {key}</TableCell>
                                        <TableCell style={{ width:"70%"}}>{registerData[key]}</TableCell>
                                    </TableRow>
                                )
                            }):null
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            
            <Box sx={{ display: "flex" }}>
                <TableContainer sx={{ width: "50%", marginRight: "30px" }}>
                    <Header title='Allowances' popup="true"/>
                    <Table>
                        {/* <TableHead>
                            <TableRow style={{width: "100%"}}  colSpan={2}>
                                <TableCell colSpan={2}>
                                    <Header title='Allowances' popup="true"/>
                                </TableCell>
                            </TableRow>
                        </TableHead> */}
                        
                        <TableBody>
                        {
                            allowanceData?Object.keys(allowanceData).map(key => {
                                return (
                                    <TableRow>
                                        <TableCell style={{backgroundColor: "#F7F7F7"}}> {key}</TableCell>
                                        <TableCell>{allowanceData[key]}</TableCell>
                                    </TableRow>
                                    
                                )
                            }):null
                        }
                        </TableBody>
                    </Table>
                </TableContainer>
                
                
                
                <Box sx={{ width: "50%" }}>
                    <TableContainer>
                        <Header title='Others' />
                        <Table>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell style={styleFirstCol}>Retention Rate Of New Graduate Hires</TableCell>
                                    <TableCell>Over 50%</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={styleFirstCol}>Work Style ( Overseas Bases )</TableCell>
                                    <TableCell>Yes</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={styleFirstCol}>Working Environment</TableCell>
                                    <TableCell>Not Working</TableCell>
                                </TableRow>      
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TableContainer>
                        <Header title='Holidays' />
                        <Table>
                            {/* <TableHead>
                                
                            </TableHead> */}
                            <TableBody>
                                <TableRow>
                                    <TableCell style={styleFirstCol}>Summer Holidays</TableCell>
                                    <TableCell>Yes</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={styleFirstCol}>Golden Weeks</TableCell>
                                    <TableCell>Yes</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={styleFirstCol}>Other Holidays</TableCell>
                                    <TableCell>Yes</TableCell>
                                </TableRow>      
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>

        </Box>
    )
}

export default MainPage;