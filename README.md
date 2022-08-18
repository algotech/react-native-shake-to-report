# `react-native-shake-to-report`

<img src="src/assets/screenshot.png" width="852" />

Using this library, you can add to your app the shake event listener,
which will trigger a custom list of options, each one with it's own logic.
When the 'Report a problem' option is selected an email with the device's
information will be sent or a callback function will pe triggered, depending
on the method provided.

## Installation

```sh
npm install react-native-shake-to-report
```

or

```sh
yarn add react-native-shake-to-report
```
On iOS, install cocoapods:

```bash
cd ios
pod install
```

## Usage

### Example

```javascript
import Shkr from 'react-native-shake-to-report';
```

```javascript
const extraItems = [{
  icon: extraItemIcon,
  title: "Extra Item Title",
  action: handleExtraItem,
}];

const reportIssue = (deviceInfo) => {
  // your code here
}

  <Shkr
    items={extraItems}
    email='example@example.com'
    reportIssue={(deviceInfo) => reportIssue(deviceInfo)}
  />
```

### Props

| Prop name      | Type     | Description                                                                                                                       |
|----------------|----------|-----------------------------------------------------------------------------------------------------------------------------------|
| items          | array    | An array of objects, each one having the 'icon', 'title' and 'action' keys. Their values will be added to the list of options.    |
| reportIssue    | function | A callback function with custom logic invoked when the 'Report a problem' option was selected.                                    |
| email          | string   | Used to receive the device information after the 'Report a problem' option was selected, if a callback function was not provided. |
| reportIcon     | element  | Used to replace the default report icon.                                                                                          |
| dismissIcon    | element  | Used to replace the default dismiss icon.                                                                                         |
| containerStyle | object   | Used to replace the default container styles.                                                                                     |
| listItemStyle  | object   | Used to replace the default style of each item in the list.                                                                       |

