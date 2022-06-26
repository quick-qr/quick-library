import { Box,CircularProgress } from '@mui/material';
import styles from './Loading.module.scss'

const LoadingComponent = () => {
    return(
        <Box className={styles.loading}>
            <CircularProgress variant="indeterminate" size={40} thickness={4} value={100}/>
        </Box>
    )
};

export default LoadingComponent;
