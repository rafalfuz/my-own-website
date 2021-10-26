import React from 'react'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from '../theme/globalStyle'
import {theme} from '../theme/mainTheme'



const MainTemplate = ({children}) => (
    <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </div>
)
 
export default MainTemplate;