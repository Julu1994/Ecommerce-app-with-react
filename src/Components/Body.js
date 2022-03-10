import React from "react";
import { Card, Button } from "react-bootstrap";
import { Col} from "react-bootstrap";
import {useDispatch} from "react-redux";
import { cartActions } from "../Redux/Features/latestSlice";

const Body = (props) => {
    const dispatch = useDispatch();
    const {title, price, description, id, image} = props;
    const addingProduct = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
            image 
        }))
    }

    const p = "$";

    return (
                    <Col sm={4}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {price} {p}
                                </Card.Text>
                                <Button onClick={addingProduct} variant="primary">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
    );
};

export default Body;
