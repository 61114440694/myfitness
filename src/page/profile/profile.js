import React  from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import {deepOrange, deepPurple} from '@material-ui/core/colors';
import {MDBCardBody} from 'mdbreact';
import {Row, Col} from 'react-bootstrap';
import { SystemUpdate } from '@material-ui/icons';
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));


function Profile() {
    const classes = useStyles()
    const [email , setEmail] = React.useState("worawit.pa.61@ubu.ac.th");
    const [num , setNum] = React.useState(false);
    const [fname, setFname] = React.useState("worawit");
    const [lname, setLname] = React.useState("panomroengchai");
    const [dis, setDis] = React.useState("มะเร็ง");
    const [age , setAge] = React.useState(20);
    const [height , setHeight] = React.useState(175);
    const [weight, setWeight] = React.useState(60);
    const [bloodGroup, setBloodGroup] = React.useState("B");
    const [BMI , setBMI] = React.useState(Math.round(weight / ((height/100)**2)));

    const bmiCal = ()=>{
        let m = Math.round(weight / ((height/100)**2))
        setBMI(m)
    }
    return (
        <div>
            <div className={
                classes.root
            }>
                <AppBar position="static"
                    style={
                        {backgroundColor: "#d35400"}
                }>
                    <Toolbar>
                        <IconButton edge="start"
                            className={
                                classes.menuButton
                            }
                            color="inherit"
                            aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6"
                            className={
                                classes.title
                        }>
                            News
                        </Typography>
                        <Button color="inherit"></Button>
                    </Toolbar>
                </AppBar>
            </div>





            <Container>
                <Grid container spacing={3} style={{backgroundColor:"color : black"}}>
                    <Grid item
                        xs={12}
                        md={2}></Grid>


                        {num===false?
                        <Grid item
                        xs={12}
                        md={8}
                        style={
                            {marginTop: 20}
                    }>
                        <Card className={
                                classes.root
                            }
                            color="#2f3640">
                            <center>
                                <avatar className="mx-auto white" >
                                    <img style={{ marginTop: 20 }} src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" alt="" className="rounded-circle img-fluid"/>
                                </avatar>
                            </center>


                            <MDBCardBody>

                                <center>
                                    <h1 onChange="change()">
                                        <b>{fname} {lname}</b>
                                    </h1>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16"
                                            style={
                                                {}
                                        }>
                                            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
                                        </svg>
                                    </a>
                                    <nbsp/>
                                    <nbsp/>
                                    <nbsp/>
                                    <nbsp/>
                                    <a style={
                                        {padding: "10px"}
                                    }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16" onClick={()=> setNum(!num)}>
                                            <path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                                        </svg>
                                    </a><br/>
                                </center><br/>
                                <hr/>
                                    <center>
<Grid container spacing={3}>
    <Grid item xs={12} md={3} style={{marginLeft: "80px"}}>
        <center>
            <Row>
        <h2>อีเมล</h2>
        <lebel name="email" style={{paddingRight:"30px",paddingLeft:"5px"}}>{email}</lebel>
       {/* <input name="fname" style={{paddingRight:"30px",paddingLeft:"5px"}} placeholder={email} onChange={(e) => setEmail(e.target.value)}></input> */}
            </Row>

            

            <Row>
        <h2>น้ำหนัก</h2>
       <lebel name="weight" style={{paddingRight:"30px",paddingLeft:"5px"}}>{weight}</lebel>
            </Row>

            


            <Row>
        <h2 style={{fontFamily:"Prompt"}}>โรคประจำตัว</h2>
       <lebel name="dis" style={{paddingRight:"30px",paddingLeft:"5px"}}>{dis}</lebel>
            </Row>

            
        </center>
    </Grid>




    <Grid item xs={12} md={3} style={{marginTop:"350px"}}>
    </Grid>
    
    <Grid item xs={12} md={3}>
    <Row>
        <h2>อายุ</h2>
       <lebel name="age" style={{paddingRight:"30px",paddingLeft:"5px"}}>{age}</lebel>
            </Row>

            <Row>
        <h2>ส่วนสูง</h2>
       <lebel name="height" style={{paddingRight:"30px",paddingLeft:"5px"}}>{height}</lebel>
            </Row>

            <Row>
        <h2>กรุ๊ปเลือด</h2>
       <lebel name="bloodGroup" style={{paddingRight:"30px",paddingLeft:"5px"}}>{bloodGroup}</lebel>
            </Row>

            
    </Grid>
    

</Grid>
</center>

<center>
<div>
        <Row>
    <h2>BMI</h2>
       <lebel name="bmi" style={{paddingRight:"30px",paddingLeft:"5px",alignItems:"center" }}>{BMI}</lebel>
            </Row>
    </div>
</center>
    <br/><br/><br/>
    </MDBCardBody>
    </Card>
    </Grid>
                        
                        
            // -------------------------------------- หน้าเปลี่ยน ---------------------------  
                        
                        :<Grid item
                        xs={12}
                        md={8}
                        style={
                            {marginTop: 20}
                    }>
                        <Card className={
                                classes.root
                            }
                            color="#2f3640">


                            <MDBCardBody>

                                <center>
                                    
                                    
                                    <h1>แก้ไขโปรไฟล์</h1>
                                    <br/>
                                </center><br/>
                                <hr/>
                                    <center>
<Grid container spacing={3}>
    <Grid item xs={12} md={3} style={{marginLeft: "80px"}}>
        <center>
        <Row>
        <TextField name="fname" id="outlined-basic" label="ชื่อ" variant="outlined"  style={{width: 200,marginTop: "20px"}} onChange={(e)=> setFname(e.target.value)}/>
            </Row>

            <Row>
        <TextField name="lname" id="outlined-basic" label="อีเมล" variant="outlined"  style={{width: 200,marginTop: "20px"}} onChange={(e)=> setEmail(e.target.value)}/>
            </Row>

            

            <Row>
        <TextField name="weight" id="outlined-basic" label="น้ำหนัก" variant="outlined"  style={{width: 200,marginTop: "20px"}} onChange={(e)=> setWeight(e.target.value)}/>
            </Row>

            


            <Row>
    
        <TextField name="dis" id="outlined-basic" label="โรคประจำตัว" variant="outlined"  style={{width: 200,marginTop: "20px"}} onChange={(e)=> setDis(e.target.value)}/>
            </Row>

            
        </center>
    </Grid>




    <Grid item xs={12} md={3} style={{marginTop:"350px"}}>
    </Grid>
    
    <Grid item xs={12} md={3}>
    <Row>
        <TextField name="lname" id="outlined-basic" label="สกุล" variant="outlined" style={{width: 200 , marginTop: "20px"}} onChange={(e)=> setLname(e.target.value)}/>
            </Row>

    <Row>
       <TextField name="age" id="outlined-basic" label="อายุ" variant="outlined" style={{width: 200,marginTop: "20px"}} onChange={(e)=> setAge(e.target.value)}/>
            </Row>

            <Row>
        
        <TextField name="height" id="outlined-basic" label="ส่วนสูง" variant="outlined" style={{width: 200,marginTop: "20px"}} onChange={(e)=> setHeight(e.target.value)}/>
            </Row>

            <Row>
    
        <TextField name="bloodGroup" id="outlined-basic" label="กรุ๊ปเลือด" variant="outlined"  style={{width: 200,marginTop: "20px"}} onChange={(e)=> setBloodGroup(e.target.value)}/>
            </Row>

            
    </Grid>
    <Grid item xs={12}>
    <center>
        <Button color="primary" onClick={()=>
            {
                setNum(!num)
                bmiCal()
            } 
             
             }>confirm</Button>
           </center> 
           


            
    </Grid>


    

</Grid>
</center>
    <br/><br/><br/>
    </MDBCardBody>
    </Card>
    </Grid>}


                    
                    <Grid item
                        xs={12}
                        md={2}
                        style={{marginTop: 20}}>  
                    </Grid>
                
                </Grid>
            </Container>
            </div>
    )
}

export default Profile;
