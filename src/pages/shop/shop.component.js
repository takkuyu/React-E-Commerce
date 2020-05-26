import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collectionpage.container';
import ItemPageContainer from '../itempage/itempage.container';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync, match } = this.props;

        fetchCollectionsStartAsync(match.params.category, match.params.gender);
    }

    render() {
        const { match } = this.props;
        // const categoryOptions = "sneakers|running|boots|topsellers|new";
        // const genderOptions = "mens|women";
        console.log('shop.js')
        return (
            <>
                <Route
                    path={`${match.url}`}
                    exact
                    // key={this.props.location.key}
                    render={props => (
                        <CollectionPageContainer  {...props} />
                    )}
                />
                <Route
                    path={`${match.url}/:id(\\d+)`}
                    exact
                    render={props => (
                        <ItemPageContainer {...props} /> // props have to be passed on the component to use match.params.
                    )} />
            </>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: (category, gender) => dispatch(fetchCollectionsStartAsync(category, gender))
});

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);
