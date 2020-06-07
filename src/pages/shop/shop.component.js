import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync, setGender, setCategory, refreshCollections } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collectionpage.container';
import ItemPageContainer from '../itempage/itempage.container';

class ShopPage extends React.Component {

    constructor(props){
        super(props)
        props.refreshCollections();
    }

    componentDidMount() {
        console.log('didmount')
        const { fetchCollectionsStartAsync, match, setGender, setCategory } = this.props;

        fetchCollectionsStartAsync(match.params.category, match.params.gender);
        setGender(match.params.gender);
        setCategory(match.params.category);
    }

    render() {
        const { match } = this.props;
        console.log('shop.js')
        return (
            <>
                <Route
                    path={`${match.url}`}
                    exact
                    component={CollectionPageContainer}
                />
                <Route
                    path={`${match.url}/:id(\\d+)`}
                    exact
                    render={props => <ItemPageContainer {...props} />} // props have to be passed on this component to get match.params.id.
                />
            </>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: (category, gender) => dispatch(fetchCollectionsStartAsync(category, gender)),
    setGender: (gender) => dispatch(setGender(gender)),
    setCategory: (category) => dispatch(setCategory(category)),
    refreshCollections: () => dispatch(refreshCollections())
});

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);
