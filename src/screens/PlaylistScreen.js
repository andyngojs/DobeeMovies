import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';

export default class PlaylistScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
                <ScrollView>
                   <View style={{paddingVertical: 12, marginHorizontal: 21, }}>
                       <Text 
                       style={{fontWeight: 'bold', fontSize: 28, color: '#001f45'}}>
                        Playlist</Text>
                   </View>

                   <View>
                       <Text>COMING_SOON</Text>
                   </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
