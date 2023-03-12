# App Notice list

> Used to display notices for an app that is part of the AssistantApps range.

Available from: [github.com/AssistantApps/WebComponents](https://github.com/AssistantApps/WebComponents)

### Params
 - appguid: `string`
 - langcode: `string`

### CSS Variables - _[ info](/components/web/general?id=css-variables)_
- `--assistantapps-font-family`: "Roboto", Helvetica, Arial, sans-serif
- `--assistantapps-font-weight`: "bold"

### Slots - _[ info](/components/web/general?id=slots)_
- `loading` - Displayed while the network request is loading
- `error` - Displayed when the network request has failed

### Example

```html
  <assistant-apps-app-notice-list
    appguid="589405b4-e40f-4cd9-b793-6bf37944ee09"
    langcode="en"
  />
```
<assistant-apps-app-notice-list
  appguid="589405b4-e40f-4cd9-b793-6bf37944ee09"
  langcode="en"
/>
