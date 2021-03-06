'use strict'
import React from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  Platform
} from 'react-native'
import { Navigation } from 'react-native-navigation'
import { AssetDataGraph } from '../../components/AssetDataGraph'
import { AssetList } from '../../components/AssetList'
import { COLORS } from '../../constants'

export class HomeAlt extends React.Component {
  constructor(props) {
    super(props)
    console.log('this.props should have componentId', this.props)
    Navigation.events().bindComponent(this) // <== Will be automatically unregistered when unmounted
//    this.pages = this.props.children.map((child, index) => width * -index)
    this.state = {
//      scrollLockPage: this.pages[this.props.scrollLockPage]
    }
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        leftButtons: [
          {
            id: 'myDynamicButtonLeft',
            text: 'PORTFOLIO',
            color: COLORS.PRIMARY_WHITE
          }
        ],
        title: {
          text: 'ONYX',
      //            fontFamily: 'Helvetica',
          color: COLORS.PRIMARY_WHITE
        },
        rightButtons: [
          {
            id: 'myDynamicButtonRight',
            text: 'ACTIONS',
            color: COLORS.PRIMARY_WHITE
          }
        ],
        background: {
          color: COLORS.PRIMARY_BLACK,
        }
      }
    })
  }
  static get options() {
    return {
      topBar: {
        leftButtons: [
          {
            id: 'myDynamicButtonLeft',
            text: 'PORTFOLIO',
            color: COLORS.PRIMARY_WHITE
          }
        ],
        title: {
          text: 'ONYX',
      //            fontFamily: 'Helvetica',
          color: COLORS.PRIMARY_WHITE
        },
        rightButtons: [
          {
            id: 'myDynamicButtonRight',
            text: 'ACTIONS',
            color: COLORS.PRIMARY_WHITE
          }
        ],
        background: {
          color: COLORS.PRIMARY_BLACK,
        }
      }
    }
  }
  render() {
    return (
      <View>
        <View>
          <Text style={[{ color: COLORS.PRIMARY_WHITE }]} >THU FEB 18, 3:00AM</Text>
        </View>
        <View>
          <Text style={[{ color: COLORS.PRIMARY_WHITE }]} >$26.81</Text>
          <Text style={[{ color: COLORS.PRIMARY_WHITE }]} >USD</Text>
        </View>
        {graphProps.data && graphProps.data.length > 0 && <AssetDataGraph />}
        <AssetList {...graphProps} />
      </View>
    )
  }
}
