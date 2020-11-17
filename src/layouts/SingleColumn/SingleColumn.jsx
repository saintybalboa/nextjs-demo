import React from 'react';
import classNames from 'classnames';
import { Container, Row, Col } from 'reactstrap';

const SingleColumn = ({ children, colClass = 'col-sm-12'}) => (
    <Container className="mt-5">
        <Row>
            <Col className={classNames({ 'mx-auto': true, [colClass]: colClass })}>{children}</Col>
        </Row>
    </Container>
);

export default SingleColumn;
