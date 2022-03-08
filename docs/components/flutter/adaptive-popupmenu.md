# PopupMenu

> A way to build up the popup menu that is displayed usually on the top right of a card. 

Available from: [github.com/AssistantApps/Flutter.Common](https://github.com/AssistantApps/Flutter.Common)

### Params
 - context: `BuildContext` - **Required**
 - onEdit: `Function` - **Optional**
 - onDelete: `Function` - **Optional**
 - iconColour: `Color` - **Optional**
 - customIcon: `IconData` - **Optional** - DefaultValue: `Icons.more_vert`
 - additionalItems: `List<PopupMenuActionItem>` - **Optional**
 - nothingToDisplay: `Widget` - **Optional**

### Example

```dart
    ListTile(
        title: Text('Actions on a Tile'),
        trailing: popupMenu(
            context,
            onEdit: () {},
            onDelete: () {},
        ),
    );
```
