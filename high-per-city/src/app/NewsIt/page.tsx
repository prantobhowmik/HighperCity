
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
export default function NewsIt(props) {
    console.log(props)
    return (
      <Card className="mt-6 w-80">
        <CardHeader color="blue-gray" className="relative">
          <img
            src={props.article.urlToImage}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {props.article.title}
          </Typography>
          <Typography>
            {props.article.content}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
  }
  