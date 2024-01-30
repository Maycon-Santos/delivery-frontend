import NextLink from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function StoreCard(props) {
  const { id, image, name, description } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component={NextLink} href={`/consumer/stores/${id}`}>
        <CardMedia component="img" height="140" image={image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
