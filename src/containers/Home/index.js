import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  Container,
  Text,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ScreenTitle from '../../components/ScreenTitle';
import ActionHeader from '../../components/ActionHeader';
import { onAppReady } from '../../stores/actions';
import UserItem from '../../components/UserItem';

import platform from '../../../native-base-theme/variables/platform';

const mapDispatchToProps = (dispatch) => ({
  onAppReadyAction: () => dispatch(onAppReady()),
});

const mapStateToProps = (state) => {
  const { usersReducer } = state;
  return {
    usersList: usersReducer.usersList,
  };
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    marginTop: platform.tenScale,
    marginBottom: platform.twentyScale,
    paddingHorizontal: platform.twelveScale,
    paddingBottom: platform.tenScale,
  },
  subtitle: {
    color: platform.brandPrimary,
    fontSize: platform.fontSizeH3,
  },
  header: {
    height: platform.tenScale,
  },
  content: {
    flexGrow: 1,
    padding: platform.tenScale,
  },
  emptyText: {
    paddingHorizontal: platform.thirtyScale,
    paddingTop: platform.tenScale,
    fontStyle: 'italic',
  },
  titleContainer: {
    alignItems: 'center',
  },
  circle: {
    marginBottom: platform.twentyScale,
  },
  footerSeparator: {
    marginBottom: platform.fourtyScale,
  },
});

class HomeContainer extends React.PureComponent {
  componentDidMount() {
    const { onAppReadyAction } = this.props;
    onAppReadyAction();
  }

  navigate = (route, params) => {
    const {
      navigation: {
        navigate,
      },
    } = this.props;
    return navigate(route, params);
  }

  renderHeader = () => (
    <View style={styles.titleContainer}>
      <ScreenTitle
        bold
        type="H1"
        customStyle={styles.title}
      >
        Top 5 GitHub Users
      </ScreenTitle>
      <ScreenTitle
        bold
        type="H3"
        customStyle={styles.title}
      >
        Tap the username to see more information
      </ScreenTitle>
    </View>
  );

  renderEmptyComponent = () => (
    <Text style={styles.emptyText}>
      You have no GitHub users.
    </Text>
  );

  onDetailUser = (userName) => this.navigate('Person', { userName });

  renderItem = ({ item }) => (<UserItem userName={item} onPress={this.onDetailUser} />)

  keyExtractor = (userName) => userName

  render() {
    const {
      usersList,
    } = this.props;
    return (
      <Container>
        <ActionHeader
          title="Home"
        />
        <FlatList
          data={usersList}
          horizontal={false}
          numColumns={3}
          ListHeaderComponent={this.renderHeader}
          ListEmptyComponent={this.renderEmptyComponent}
          renderItem={this.renderItem}
          style={styles.content}
          keyExtractor={this.keyExtractor}
        />
      </Container>
    );
  }
}

HomeContainer.propTypes = {
  onAppReadyAction: PropTypes.func.isRequired,
  usersList: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

HomeContainer.defaultProps = {
  usersList: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
