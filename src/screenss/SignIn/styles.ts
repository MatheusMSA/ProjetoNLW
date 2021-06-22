import { StyleSheet } from 'react-native';
import { theme } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        
          
    },
    image:{
        width:'100%',
        height:360
    },
    content:{
        marginTop: -40,
        paddingHorizontal: 50

    },
    title:{
        color:theme.colors.heading,
        textAlign:'center',
        marginBottom: 16,
        fontSize: 40,
        fontFamily: theme.fonts.title700,
        lineHeight: 40
    },
    subTitle:{
        color: theme.colors.heading,
        textAlign:'center',
        marginBottom: 64,
        fontSize: 15,
        fontFamily: theme.fonts.title500,
        lineHeight: 25
    }
    

    
});