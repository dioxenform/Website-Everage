import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type MainCardProps = {
  image: string;
  title: string;
  description: string;
};

const MainCard = (props: MainCardProps) => {
  const { image, title, description } = props;
  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent className="bg-gray-950 text-center tracking-wider min-h-[230px] ">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              {description}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              <p className="pt-4 text-lg">Slide Untuk Melihat Lebih</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MainCard;
