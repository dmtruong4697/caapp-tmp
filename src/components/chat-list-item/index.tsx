import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons';
import { GroupInfo } from '../../services/group';

interface IProps {
    group_info: GroupInfo,
    onPress: () => void,
}

const ChatListItem: React.FC<IProps> = ({
    group_info,
    onPress,
}) => {

    const group_image = (group_info.group.type == 'PERSONAL')? group_info.members[0].user_info.avatar_image:group_info.group.group_image_url;

  return (
    <View style={styles.viewContainer}>
        <Image style={styles.imgGroupImage} source={{uri: group_image}}/>
    </View>
  )
}

export default ChatListItem