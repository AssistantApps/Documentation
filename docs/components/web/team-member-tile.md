# TeamMember tile

> Used to display the details of a TeamMember.

Available from: [github.com/AssistantApps/WebComponents](https://github.com/AssistantApps/WebComponents)

### Params
 - name: `string`
 - role: `string`
 - imageurl: `string`
 - linkname: `string` - **Optional**
 - linkurl: `string` - **Optional**

### CSS Variables
- `--assistantapps-font-family`: "Roboto", Helvetica, Arial, sans-serif
- `--assistantapps-font-weight`: "bold"
- `--assistantapps-team-member-background-colour`: rgba(255, 255, 255, 0.1)
- `--assistantapps-team-member-text-colour`: #f0f0f0
- `--assistantapps-team-member-link-text-colour`: #0000EE

### Example

```html
  <assistant-apps-team-tile
    name="Documentation test"
    role="Testing"
    imageurl="https://assistantapps.com/assets/favicon/favicon-96x96.png"
    linkname="Homepage"
    linkurl="https://assistantapps.com"
  />
```
<assistant-apps-team-tile
  name="Documentation test"
  role="Testing"
  imageurl="https://assistantapps.com/assets/favicon/favicon-96x96.png"
  linkname="Homepage"
  linkurl="https://assistantapps.com"
/>
