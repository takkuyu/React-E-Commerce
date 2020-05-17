import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from "./collectionpage.component";
import ItemPage from "../itempage/itempage.component";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class Collection extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            // updateCollections(collectionsMap);
            console.log(collectionsMap);
            // this.setState({ loading: false });
        });
    }

    render() {
        // console.log('collection')
        // console.log(this.props)
        const { match } = this.props;
        const categoryOptions = "sneakers|running|boots|topsellers|new";
        const genderOptions = "mens|women";

        return (
            <div className='shop-page'>
                <Route path={`${match.url}/:gender(${genderOptions})/:category(${categoryOptions})?`} exact component={CollectionPage} />
                <Route path={`${match.url}/:gender(${genderOptions})/:category(${categoryOptions})/:id(\\d+)`} exact render={
                    props => <ItemPage {...props} updateCartCounter={this.updateCartCounter} toggleCartModal={this.toggleCartModal} /> //@Note: props have to be passed on the component to use params.
                } />
            </div>
        );
    }
}


export default Collection;
