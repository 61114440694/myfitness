import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import SvgIcon from '@material-ui/core/SvgIcon';





const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    root: {
        '& > svg': {
          margin: theme.spacing(2),
        },
      },
  }));
  



function Home() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor:"#d35400"}} >
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Srikai Fitness
                        </Typography>
                        <Button color="inherit" href="../login/login" >Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="600"
                image="https://www.sarakadeelite.com/wp-content/uploads/2020/06/fitness-first-open2.jpg"
                title="Contemplative Reptile"
            />

            <Container >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} style={{ marginTop: 20 }} >
                        <Card className={classes.root} color="#2f3640">
                            <CardActionArea style={{ backgroundColor: "#bdc3c7" }}>
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        สมาชิกราย 1 เดือน
                                    </Typography>
                                    <Typography variant="body2" component="p" >
                                        สามารถใช้อุปกรณ์เเละสถานที่ออกกำลังกายได้อย่างเต็มที่และสิ่งอำนวยความสะดวก
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ backgroundColor: "#1e272e" }}>
                                <Grid>
                                    <Grid item sx="12">
                                        <font color="white">
                                            <h1>
                                                THB 150
                                            </h1>
                                        </font>
                                    </Grid>
                                    <Grid item xs="12" >
                                        <Button
                                            style={{ backgroundColor: "#d35400", marginLeft: "20" }}
                                            variant="contained"
                                            color=""
                                            fullWidth>
                                            สมัค
                                         </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ marginTop: 20 }} >
                        <Card className={classes.root}>
                            <CardActionArea style={{ backgroundColor: "#bdc3c7" }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        สมาชิกราย 3 เดือน
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        สามารถใช้อุปกรณ์เเละสถานที่ออกกำลังกายได้อย่างเต็มที่  ลดทันที่ 100
                                    </Typography>
                                </CardContent>
                            </CardActionArea >
                            <CardActions style={{ backgroundColor: "#1e272e" }}>

                                <Grid>
                                    <Grid item sx="12">
                                        <font color="white">
                                            <h1>
                                                THB 350
                                            </h1>
                                        </font>
                                    </Grid>
                                    <Grid item xs="12">
                                        <Button
                                            style={{ backgroundColor: "#d35400", marginLeft: "20" }}
                                            variant="contained"
                                            color=""
                                            fullWidth>
                                            สมัค
                                         </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ marginTop: 20 }} >
                        <Card className={classes.root}>
                            <CardActionArea style={{ backgroundColor: "#bdc3c7" }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        สมาชิกราย 6 เดือน + เทรนเนอร์ฟรี
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        สามารถใช้อุปกรณ์เเละสถานที่ออกกำลังกายได้อย่างเต็มที่ เเละมีเทรนเนอร์ค่อยให้บริการตลอดเวลาการฝึก
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ backgroundColor: "#1e272e" }}>

                                <Grid>
                                    <Grid item sx="12">
                                        <font color="white">
                                            <h1>
                                                THB 1200
                                            </h1>
                                        </font>
                                    </Grid>
                                    <Grid item xs="12">
                                        <Button
                                            style={{ backgroundColor: "#d35400", marginLeft: "20" }}
                                            variant="contained"
                                            color=""
                                            fullWidth>
                                            สมัค
                                         </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid><br></br><br></br><br></br>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <Typography gutterBottom variant="h5" component="h2">
                            ติดต่อเรา
                        </Typography>
                        <Typography variant="body2" component="p">
                            หากคุณมีคำถามเกี่ยวกับเรา
                            ต้องการทำงานร่วมกัน หรือมีอยากส่วนร่วมและสร้างโอกาสใหม่ทางธุรกิจ
                            เรายินดีที่จะรับพูดคุยกับคุณ
                        </Typography>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="ชื่อ-นามสกุล" />
                        </form>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="อีเมล" />
                        </form>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="คำถามเกี่ยวกับเรา" />
                        </form><br></br>
                        <Button
                            style={{ backgroundColor: "#d35400", marginLeft: "20" }}
                            variant="contained"
                            color=""
                        >
                            ส่งข้อความ
                         </Button>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card className={classes.root} color="#2f3640">
                            <CardActionArea style={{ backgroundImage: "../home/img/fitness.jpg" }}>
                                <CardContent >
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="200"
                                        image="data:image/jpeg;base64,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"
                                        title="Contemplative Reptile"
                                    />
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ backgroundColor: "#636e72" }}>
                                <Grid>
                                    <Typography gutterBottom variant="h5" component="h2" >
                                        TRAINER A
                                    </Typography>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card className={classes.root} color="#2f3640">
                            <CardActionArea >
                                <CardContent >
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="200"
                                        image="data:image/jpeg;base64,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"
                                        title="Contemplative Reptile"
                                    />
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ backgroundColor: "#636e72" }}>
                                <Grid>
                                    <Typography gutterBottom variant="h5" component="h2" >
                                        TRAINER B
                                    </Typography>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <CardActionArea >
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    เรื่องราวของเรา
                                    </Typography>
                                <Typography variant="body1" component="p">
                                    นับตั้งแต่การเริ่มต้นเล็ก ๆ ของเราในปี 2005
                                    เราได้กลายเป็นหนึ่งในแบรนด์การออกกำลังกายที่ใหญ่ที่สุดในม.อุบล
                                    เราคือแบรนด์ที่เชื่อถือได้และยั่งยืน โดยมีทีมงานที่มีความรู้
                                    เทคโนโลยีใหม่ ๆ และคลับระดับโลก หลายปีที่ผ่านมา
                                    เราได้เห็นการเปลี่ยนแปลงมากมายและเราพัฒนามาไกลมาก แต่เป้าของเรายังคงชัดเจน
                                    เราคือผู้นำด้านการออกกำลังกายที่จะสร้างแรงบันดาลใจให้ทุกคนก้าวต่อไปข้างหน้า
                                    ด้วยสมาชิกกว่า 500 คนในม.อุบล เรามองหาวิธีใหม่ในการสนับสนุนและสร้างแรงบันดาลใจ
                                    ให้กับสมาชิกเสมอ และไม่ใช่แค่ในยิมเท่านั้น
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>

                </Grid>

            </Container>

        </div >
    )
}

export default Home;