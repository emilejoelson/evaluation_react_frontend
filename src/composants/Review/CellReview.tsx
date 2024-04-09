import PreviewIcon from '@mui/icons-material/Preview';

import { Button } from "@mui/material";

type Props = {
    onReviewClick: () => void; 
};

const CellReview = ({ onReviewClick }: Props) => {
    return (
        <Button sx = {{color:"green"}} onClick={onReviewClick}>
            <PreviewIcon  />
        </Button>
    );
};

export default CellReview;
