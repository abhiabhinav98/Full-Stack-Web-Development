import React from "react";
import { Card, CardImg, CardBody,CardText, CardTitle} from "reactstrap";


    function formatDate({ date }) {
        return new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }

    function RenderDish({dish}) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    function RenderComments({comments}){
        if (comments != null) {

            let list = comments.map((comments)=>{

                let date = comments.date

                return(
                    <li key={comments.id} >
                        <div>
                            <p>{comments.comment}</p>
                            <p>--{comments.author}, {formatDate({date})}</p>
                        </div>
                    </li>

                )
            })

            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    const DishDetail = (props) => {
        const {dish} = props;
        console.log('dishdetail component render invoked');

        return dish?(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={dish.comments }/>
                </div>
            </div>
        ):(
            <div></div>
        )
    }

export default DishDetail;