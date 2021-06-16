import React, { useRef, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ironComps, tractorZoom } from '../packages/theme/src/index';
import '../styles.css';

function loadScript(src, position, id) {
    if (!position) {
        return;
    }
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const isCSR = () => typeof window !== 'undefined';

function App({ Component, pageProps }) {
    const loaded = useRef(false);

    if (isCSR() && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`,
                document.querySelector('head'),
                'google-maps'
            );
        }

        loaded.current = true;
    }

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const [theme, setTheme] = useState(tractorZoom);
    const changeTheme = (props) => {
        const targetTheme = props.target.value;

        if (targetTheme === 'tractorZoom') {
            setTheme(tractorZoom);
        } else if (targetTheme === 'ironComps') {
            setTheme(ironComps);
        }
    };
    return (
        <ThemeProvider theme={theme}>
            <label>
                {'Choose Theme: '}
                <select onChange={changeTheme}>
                    <option value={'tractorZoom'}>Tractor Zoom</option>
                    <option value={'ironComps'}>Iron Comps</option>
                </select>
            </label>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
