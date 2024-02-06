import { Box, Typography } from '@mui/material';

const CoreValues = () => {
    return (
        <Box sx={{ flexGrow: 1, display: 'flex'}}>
            <div className='grow text-center flex-row'>
                <h1 className='text-Gold text-2xl font-bold m-2'>
                    Core Values
                </h1>
                <h3 className=' text-xl font-semibold'>
                Integrity | Etiquette | Genuine Care | Synergy | Proactivity | Smile
                </h3>
            </div>
            <div>
                
           <h1 className='text-2xl text-Gold font-bold m-2'>
           Contact us for more information at:
           </h1>
            <h3 className='text-xl font-semibold decoration-solid underline decoration-Gold '>
            (435) 375-9454  or           office@sentrihomeservices.com
            </h3>            
            </div>
            
        </Box>
    );
}
export default CoreValues;