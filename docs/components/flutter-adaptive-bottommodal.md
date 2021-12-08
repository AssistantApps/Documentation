# Flutter - BottomModal

> A material style sheet that scrolls up from the bottom. Looks better than a popup. Similar to this: [https://material.io/components/sheets-bottom](https://material.io/components/sheets-bottom)

Available from: [github.com/AssistantApps/Flutter.Common](https://github.com/AssistantApps/Flutter.Common)

### Params
 - context: `BuildContext` - **Required**
 - builder: `Widget Function(BuildContext)` - _Named_ - **Required**
 - hasRoundedCorners: `bool` - _Named_ - **Optional**


### Example

```dart
    adaptiveBottomModalSheet(
        context,
        hasRoundedCorners: true,
        builder: (BuildContext innerContext) => AnimatedSize(
            duration: const Duration(milliseconds: 250),
            child: Container(
                child: Text('Hi'),
            ),
        ),
    );
```
