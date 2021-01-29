import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HeaderComponent extends Component {
    render() {
        return (
            <View>
                <Text 
                style={{fontFamily: 'bold', fontSize: 28, color: '#001F45'}}> 
                Trang Chính 
                </Text>
            </View>
        )
    }
}
