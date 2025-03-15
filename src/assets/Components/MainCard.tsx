import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
              <p className="pt-4 text-base font-medium">
                Slide to see other products. / Use the arrow button.{" "}
                <ArrowBackIcon /> & <ArrowForwardIcon />
                <br /> ------ <br /> Zoom in on the image to see the product
                more clearly.
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MainCard;
