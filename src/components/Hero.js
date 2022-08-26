import React from 'react'
import a2 from "../assets/a2.png"
import a1 from "../assets/a1.png"
import { Grid, Typography, Box } from "@mui/material"
import { CButton } from '../theme/theme'
function Hero() {
  return (
    <div className='bg-hero' >
      <Box className='flex flex-col  '>

        <Box>
          <img src={a2} className="sm:h-[84px] sm:w-[76px]" />
        </Box>

        <Box className="flex item-center justify-center items-center " >


          <Box sx={{ textAlign: "center", marginTop: "15rem" }} >

            <Typography sx={{ fontSize: { md: "50px", xs: "24px" }, textTransform: "uppercase" }}   >
              A Launchpad for
            </Typography>
            <Typography sx={{ fontSize: { md: "50px", xs: "24px" }, textTransform: "uppercase" }}>
              Initial Metaverse Offerings
            </Typography>
            <Box>

              <button className='md:w-[170px] md:h-[34px] bg-slate-600 sm:w-[252px] sm:h-[36px] m-4 rounded-3xl  bg-purple-700 text-white' >
                DISCOVER
              </button>
              <button className='md:w-[170px] md:h-[34px] bg-slate-600 sm:w-[252px] sm:h-[36px]  m-4 rounded-3xl  text-white'>
                BUY TOKEN
              </button>

            </Box>
          </Box>
          <Box className="absolute md:right-0 sm:right-[17px] overflow-hidden">
            <img src={a1} className="md:h-[500px] md:w-[auto] sm:h-[216px] sm:w-[134px]" />
          </Box>
        </Box>
      </Box>










    </div>



  )
}

export default Hero