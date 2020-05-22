import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collectionpage.container';
import ItemPageContainer from '../itempage/itempage.container';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;

        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        const categoryOptions = "sneakers|running|boots|topsellers|new";
        const genderOptions = "mens|women";

        return (
            <div className='shop-page'>
                <Route
                    path={`${match.url}/:gender(${genderOptions})/:category(${categoryOptions})?`}
                    exact
                    render={props => (
                        <CollectionPageContainer  {...props} />
                    )}
                />
                <Route
                    path={`${match.url}/:gender(${genderOptions})/:category(${categoryOptions})/:id(\\d+)`}
                    exact
                    render={props => (
                        <ItemPageContainer {...props} /> //@Note: props have to be passed on the component to use params.
                    )} />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);
