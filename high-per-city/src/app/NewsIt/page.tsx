
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
export default function NewsIt(articles) {
    return (
      <Card className="mt-6 size-3/12">
        <CardHeader color="blue-gray" className="relative overflow-hidden">
          <img
            src={articles.article.urlToImage}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {articles.article.title?.substring(0,50)}
          </Typography>
          <Typography>
            {articles.article.description?.substring(0,100).concat("....")}<a className=" font-semibold text-green-700 hover:text-green-400" href={articles.article.url}target='-blank'>Read More</a>
          </Typography>
        </CardBody>
        
      </Card>
    );
  }
  