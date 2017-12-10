import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts} from '../actions';
import { Card, Icon, Image } from 'semantic-ui-react'

class Posts extends Component {

    static propTypes = {
        props: PropTypes.array
    };

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const {allposts} = this.props;
        return (
            <div>
                <h6>Posts</h6>

                {allposts &&
                allposts.map(post => (

                    <div key={post.id} className="post-body">

                        <Card>
                            <Image src='/assets/images/avatar/large/matthew.png' />
                            <Card.Content>
                                <Card.Header>
                                    {post.title}
                                </Card.Header>
                                <Card.Meta>
        <span className='date'>
            {post.author}
        </span>
                                </Card.Meta>
                                <Card.Description>
                                    {post.body}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    {post.category}
                                </a>
                            </Card.Content>
                        </Card>



                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps({posts}) {
    return {
        allposts: posts
    }

}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts())
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Posts))

