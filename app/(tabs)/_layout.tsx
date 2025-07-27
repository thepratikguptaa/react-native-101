import { icons } from '@/constants/icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, View } from 'react-native'

const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <View className='flex flex-row items-center justify-center bg-white px-6 py-2 mt-2 rounded-full shadow-lg shadow-black/30'>
                <Image source={icon} tintColor="#0f0D23" className='size-6 justify-center items-center ml-4' />
            </View>
        )
    } return (
        <View className='justify-center items-center p-2 mt-2'>
            <Image source={icon} tintColor="#A8B5DB" className='size-6'/>
        </View>
    )
}

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                tabBarStyle: {
                    backgroundColor: '#0f0D23',
                    borderRadius: 50,
                    marginHorizontal: '20',
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#0f0d23'
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon 
                            focused={focused} 
                            icon={icons.home} 
                            title="Home" 
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon 
                            focused={focused} 
                            icon={icons.search} 
                            title="Search" 
                        />
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout