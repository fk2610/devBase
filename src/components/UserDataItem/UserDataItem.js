import React from 'react';
import {
  Left,
  Body,
  Text,
  Item,
  Thumbnail,
} from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class UserDataItem extends React.PureComponent {
  render() {
    const { name, avatar, location } = this.props;
    return (
      <Item>
        <Left>
          <Thumbnail source={{ uri: avatar }} />
        </Left>
        <Body success style={styles.badge}>
          <Text style={styles.earnRate}>
            {name}
          </Text>
          <Text style={styles.earnRate}>
            {location}
          </Text>
        </Body>
      </Item>
    );
  }
}

UserDataItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

UserDataItem.defaultProps = {
};

export default UserDataItem;
