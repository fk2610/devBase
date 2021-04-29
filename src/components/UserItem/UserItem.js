import React from 'react';
import {
  Badge,
  Button,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class UserItem extends React.PureComponent {
  onItemPress = () => {
    const { userName, onPress } = this.props;
    onPress(userName);
  }

  render() {
    const { userName } = this.props;
    return (
      <Button
        transparent
        onPress={this.onItemPress}
      >
        <Badge primary style={styles.badge}>
          <Text style={styles.earnRate}>
            {userName}
          </Text>
        </Badge>
      </Button>
    );
  }
}

UserItem.propTypes = {
  userName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

UserItem.defaultProps = {
};

export default UserItem;
