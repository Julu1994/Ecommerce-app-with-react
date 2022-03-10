import React, { useEffect } from "react";
import Header from "../Components/Header";
import Body from "../Components/Body";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/Features/Slice";
import { Container, Row } from "react-bootstrap";
import { Fragment } from "react";
import Cart from "../Components/Cart"

const items = (item) => {
    return (
        <Body
            image={item.image}
            title={item.title}
            price={item.price}
            key={item.id}
        />
    );
};

const Home = () => {
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const { posts, loading } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);
    console.log(posts);

    return (
        <Fragment>
            <Header />
            {showCart && <Cart />}
            <Container>
                <Row>{posts.map(items)}</Row>
            </Container>
        </Fragment>
    );
};

export default Home;
