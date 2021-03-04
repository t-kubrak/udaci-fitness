import React, {Component} from 'react'
import {Text, View} from 'react-native'

class EntryDetail extends Component {

    componentDidMount(){
        this.setTitle(this.props.route.params.entryId);
    }

    setTitle = (entryId) => {
        if (!entryId) return;
        const year = entryId.slice(0, 4)
        const month = entryId.slice(5, 7)
        const day = entryId.slice(8)

        this.props.navigation.setOptions({
            title: `${month}/${day}/${year}`
        });
    };

    render() {
        const {entryId} = this.props.route.params;
        return (
            <View>
                <Text> Entry Detail - {JSON.stringify(entryId)} </Text>
            </View>
        )
    }
}

export default EntryDetail