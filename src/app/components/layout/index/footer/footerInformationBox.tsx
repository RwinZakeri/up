import { Box, Typography } from '@mui/material'
import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import NavItems from '@/modules/layout/header/navItems/navItems';


const FooterInformationBox = () => {
    const footerInformation = [
        {id: 1, icon: <LocationOnOutlinedIcon className='text-lightGreen'/>, information: " ایران استان تهران میدان آزادی "},
        {id: 2, icon: <EmailOutlinedIcon className='text-lightGreen'/>, information: " hello@zoben.com"},
        {id: 3, icon: <PhoneIcon className='text-lightGreen'/>, information: " +44 4325 9878 5875 "},
    ]
  return (
    <Box className="flex flex-col gap-4">
    {footerInformation.map((item) => (
            <Box key={item.id} component="span" className='flex items-center gap-2'>
                {item.icon}
                <Typography component="span" variant='body1' className='text-gray-500'>
                    {item.information}
                </Typography>
            </Box>
    ))}
    </Box>
  )
}

export default FooterInformationBox
