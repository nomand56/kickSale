import React from 'react'
import { Box, Typography, Button } from "@mui/material"
import sml from "../assets/sml-plnt.png"
import lrg from "../assets/lrg-plnt.png"

function Planet() {
    return (
        <div className='bg-black plnt-img flex justify-between items-center relative '>
            <Box>
                <img src={sml} className="w-[300px] h-auto sm:w-[10px]" />

            </Box>
            <Box className='flex flex-col justify-evenly items-center sm:width-[200px]' >


                <Typography variant='p'>
                    ABOUT STUDIO
                </Typography>
                <Box className=''>

                    <Typography variant='h4' sx={{ textAlign: "center" }}>
                        Say Wow to Our New KickSale Display.
                    </Typography>

                    <Box className='max-w-[480px] text-center   '>

                        <Typography variant="p" sx={{ color: "white", textAlign: "center" }}>
                            Ideas that launch on Kicksale don't seem to be solely highly-vetted by our team of skilled analysts, however conjointly by industry-leading expertise.
                        </Typography>
                    </Box>

                </Box>
                <Box className='text-center m-4'>

                    <Button>Our Project </Button>

                    <Button>MetaVerse NFT</Button>

                </Box>


            </Box>
            <Box>
                <img src={lrg} className="w-[463px] h-auto" />
            </Box>


        </div >
    )
}

export default Planet