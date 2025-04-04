import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'
import CategoryItem from '../../components/CategoryItem' // eger CategoryItem sayfasında export ile veriyorsan {CategoryItem} şeklinde yazamassın {} içine koyamazsın unutma


function index() {
    const [categories, setCategories] = useState<Category[]>(categoriesGetir)

    return (
        <View>
            <View style={styles.listContainer}>
                {
                    categories.map((item) => (
                        <CategoryItem key={item.id} item={item} />

                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        flex:1,
        flexDirection: 'row',// yatay yapar
        alignItems: 'flex-start',
        flexWrap: 'wrap'//aşağı doğru satır satır kareler yaptı
    },
})

export default index