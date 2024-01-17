import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


const SkeletonAnime = () => {
  return (
    <div>
       <Skeleton variant="rectangular" width={210} height={118} />
       <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
    </div>
  )
}

export default SkeletonAnime
