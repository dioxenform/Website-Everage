import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type CardTwoProps = {
  image: string;
  title: string;
  Description: string;
};

export default function CardTwo(props: CardTwoProps) {
  const { image, title, Description } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent sx={{ backgroundColor: "#1f2226" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "white", fontSize: "1.2rem" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          {Description}
        </Typography>
      </CardContent>
    </Card>
  );
}
