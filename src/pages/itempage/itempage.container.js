import ItemPage from "./itempage.component";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { compose } from 'redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const ItemPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ItemPage);

export default ItemPageContainer;