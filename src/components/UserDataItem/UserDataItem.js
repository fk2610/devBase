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
import platform from '../../../native-base-theme/variables/platform';

class UserDataItem extends React.PureComponent {
  render() {
    const { name, avatar, location } = this.props;
    return (
      <Item style={{ marginLeft: platform.twentyScale, paddingVertical: platform.twentyScale }}>
        <Left style={{ flex: 0 }}>
          <Thumbnail source={{ uri: avatar }} />
        </Left>
        <Body success style={{ flex: 1, paddingLeft: platform.tenScale }}>
          <Text style={styles.earnRate}>
            {name}
          </Text>
          <Text note style={{ alignSelf: 'flex-start' }}>
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
