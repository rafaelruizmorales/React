# Storybook

## Add Storybook:
```
    npx sb init
```

## Starts Storybook in development mode
```
    npm run storybook
```

## 3 main files for each Story!

#### Component.css

- Styles for the component

    ```css
    .storybook-button {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 700;
        border: 0;
        border-radius: 3em;
        cursor: pointer;
        display: inline-block;
        line-height: 1;
    }

    .storybook-button--s {
        font-size: 12px;
        padding: 10px 16px;
    }
    .storybook-button--m {
        font-size: 14px;
        padding: 11px 20px;
    }
    .storybook-button--l {
        font-size: 16px;
        padding: 12px 24px;
    }
    .storybook-button--xl {
        font-size: 20px;
        padding: 24px 48px;
    }
    ```


#### Component.js
- The Component that can be used in your project

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
    export const Button = ({ size, label, ...props }) => {
        return (
            <button
                type="button"
                className={['storybook-button', `storybook-button--${size}`].join(' ')}
                {...props}
            >
                {label}
            </button>
        );
    };

    Button.propTypes = {
        /**
         * How large should the button be?
         */
        size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
        
        /**
         * Button contents
         */
        label: PropTypes.string.isRequired,
        
        /**
         * Optional click handler
         */
        onClick: PropTypes.func,
    };

    Button.defaultProps = {
        size: 'm',
        onClick: undefined,
    };
```

#### Component.stories.js

- The Story that can be see on the Storyboard

```javascript
    import React from 'react';

    import { Button } from './Button';

    export default {
        title: 'Example/Button',
        component: Button,
    };

    const Template = (args) => <Button {...args} />;

    export const ExtraLarge = Template.bind({});
    ExtraLarge.args = {
        size: 'xl',
        label: 'Button',
    };

    export const Large = Template.bind({});
    Large.args = {
        size: 'l',
        label: 'Button',
    };

    export const Small = Template.bind({});
    Small.args = {
        size: 's',
        label: 'Button',
    };

```

## Use in your app

```javascript
    import { Button } from './stories/Button';
    import { Header } from './stories/Header';

    import logo from './logo.svg';

    import './App.css';

    export default function App() {

        const handleClick = () => alert("Click!!!")

        const handleLoggin = () => alert("Login!!!")
        const handleSignup = () => alert("Creating Acount!!!")

        return (
            <div className="App">
                <Header onLogin={handleLoggin} onCreateAccount={handleSignup} />
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <Button 
                    label="Learn React"
                    size="xl" 
                    onClick={handleClick}
                />
            </div>
        );
    }
```