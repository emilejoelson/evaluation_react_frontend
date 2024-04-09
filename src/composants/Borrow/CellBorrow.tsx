import { Button } from "@mui/material";
import TouchAppIcon from '@mui/icons-material/TouchApp';

type Props = {
    onBorrowClick: () => void; 
};

const CellBorrow = ({ onBorrowClick }: Props) => {
    return (
        <Button onClick={onBorrowClick}>
            <TouchAppIcon />
        </Button>
    );
};

export default CellBorrow;
