import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

export const GlobalStyles = createGlobalStyle`



*{
    margin: 0;
    
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

li{
    list-style-type: none
}
:focus{
    outline: none !important;
    box-shadow: none;
}
ul{
    padding: 0;
    margin: 0;
}

a{
    text-decoration: none;
    color: #272727;
}


h1{
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 22px;

    ${theme.breakpoints.up('lg')}{
        font-size: 45px;
    }
}


h2{
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 18px;
}


p ,li, label{
    font-family: 'Open Sans', sans-serif;
    line-height: 25px;
}

a{
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
}
`
