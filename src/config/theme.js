import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

const muiTheme = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                dark: '#b4a230',
                main: '#e9d361',
                light: '#ffff92'
            },
            secondary: {
                dark: '#8d8d8d',
                main: '#bdbdbd',
                light: '#efefef'
            },
            //backgroundColor: { paper: '#ffffff' },
            text: {
                primary: '#000000',
                secondary: '#888888'
            },
            typography: {
                // Tell Material-UI what's the font-size on the html element is.
                htmlFontSize: 10
            }
        },
        overrides: {
            MuiTooltip: {
                tooltip: {
                    fontSize: '1em'
                }
            }
        }
    })
)

export default muiTheme
