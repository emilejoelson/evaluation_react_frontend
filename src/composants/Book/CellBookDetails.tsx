import { Button } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

type Props = {
    onBookDetailsClick: () => void; 
};

const CellBookDetails = ({ onBookDetailsClick }: Props) => {
    return (
        <Button onClick={onBookDetailsClick}>
            <RemoveRedEyeIcon />
        </Button>
    );
};

export default CellBookDetails;
