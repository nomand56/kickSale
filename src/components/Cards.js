import React from 'react'
import { Button, Grid, Typography, Box, Paper } from "@mui/material"
import card1 from "../assets/card1.png"
import { CardData } from '../assets/cardData'
import Images from '../assets/Images'
export default function Card() {
    return (<div className='bg-card'>
        <Box>
            <Typography variant='h3' className='text-center p-3'>
                KICKSALE PROJECTS
            </Typography>
        </Box>





        <Grid container  >
            {CardData.map((item) => {
                console.log(typeof card1)
                return <Grid item xs={12} md={6} className="flex justify-center item-center wrap">

                    <Paper sx={{ width: { md: "500px", xs: "387px" }, border: "10px solid #CB3694", marginTop: "30px" }}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Box sx={{ padding: "20px" }}>
                                    <img src={item.img} className="w-[347px]" />
                                </Box>
                            </Grid>
                            <Grid item xs={6} sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around"
                            }}>
                                <Box className="mt-6">
                                    <Typography variant="h4">
                                        Kickwe MiRL
                                    </Typography>
                                    <Typography variant='p' sx={{ color: "white" }}>
                                        the journey of kickwe is starting
                                    </Typography>

                                </Box>
                                <Box>
                                    <Button sx={{ backgroundColor: "#CB3694", color: "white", fontWeight: "700", fontSize: "12px" }}>
                                        Registration Opened
                                    </Button>

                                    <Typography variant="p" sx={{ color: "white" }}>

                                        Avax
                                    </Typography>
                                </Box>
                                <Typography>
                                    Whiteist end in:

                                </Typography>
                                <Button sx={{
                                    backgroundColor: "#5133D5", color: "white", width: {
                                        md: "200px", sx: "116.67px"
                                    }, margin: "5px", boxShadow: "0px 7px 22px 2px rgba(81, 51, 213, 0.6)"
                                }}>
                                    More Details
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            })


            }

        </Grid >
        {/* </Box> */}











    </div >
    )
}
