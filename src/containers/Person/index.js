import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Rect } from 'react-content-loader/native';
import { NavigationActions } from 'react-navigation';

import ActionHeader from '../../components/ActionHeader';
import ContentLoader from '../../components/ContentLoader';
import UserDataItem from '../../components/UserDataItem';
import { onAppReady } from '../../stores/actions';
import { getUserInfo } from '../../stores/actions/users';

import platform from '../../../native-base-theme/variables/platform';

const mapDispatchToProps = (dispatch) => ({
  onAppReadyAction: () => dispatch(onAppReady()),
  getFullData: () => dispatch(getUserInfo()),
});

const mapStateToProps = (state) => {
  const { usersReducer } = state;
  return {
    userData: usersReducer.userData,
    isLoadingUserData: usersReducer.isLoadingUserData,
  };
};

const styles = StyleSheet.create({
});

class PersonContainer extends React.PureComponent {
  componentDidMount() {
    this.loadUserData();
  }

  loadUserData = () => {
    const { getFullData, navigation: { getParam } } = this.props;
    const userName = getParam('userName');
    getFullData(userName);
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.dispatch(NavigationActions.back());
  }

  renderContentLoader = () => (
    <ContentLoader
      height={platform.threeHundredFifty}
      useAnimation={false}
    >
      <Rect
        x="10"
        y="52%"
        rx="3"
        ry="3"
        width="95%"
        height={platform.seventyScale}
      />
    </ContentLoader>
  )

  render() {
    const {
      userData,
      isLoadingUserData,
    } = this.props;
    const {
      name,
      avatar_url: avatar,
      location,
    } = userData;
    return (
      <Container>
        <ActionHeader
          leftAction={this.goBack}
          title="Home"
        />
        <Content>
          {isLoadingUserData
            ? this.renderContentLoader()
            : (
              <UserDataItem
                name={name}
                avatar={avatar}
                location={location}
              />
            )}
        </Content>
      </Container>
    );
  }
}

PersonContainer.propTypes = {
  onAppReadyAction: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    location: PropTypes.string,
  }),
  getFullData: PropTypes.func.isRequired,
  isLoadingCashFlow: PropTypes.bool.isRequired,
};

PersonContainer.defaultProps = {
  userData: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);
