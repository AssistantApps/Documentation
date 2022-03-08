# LazyLoadedSearchableList

> This loads elements as the user scrolls down. A good example of this is the "What is New" page in the [Assistant for No Man's Sky app](https://nmsassistant.com). It loads the top 20 What is New items initially and as the user reaches the bottom of the list, the next page is fetched and placed at the end of the list.

Available from: [github.com/AssistantApps/Flutter.Common](https://github.com/AssistantApps/Flutter.Common)

### Params
 - listGetter: `Future<ResultWithValue<List<T>>>` - **Required**
 - pageSize: `int`  - **Required**
 - listItemDisplayer: `Widget Function(BuildContext, T)`  - **Optional**
 - listItemWithIndexDisplayer: `Widget Function(BuildContext, T, int)`  - **Optional**
 - customKey: `Key`  - **Optional**
 - backupListGetter: `Future<ResultWithValue<List<T>>>`  - **Optional**
 - hintText: `String`  - **Optional**
 - loadingText: `String`  - **Optional**
 - addFabPadding: `bool`  - **Optional** - DefaultValue: `false`
 - loadMoreItemWidget: `Widget`  - **Optional**
 - errorMessage: `String`  - **Optional**
 - emptyMessage: `String`  - **Optional**

### Example

```dart
    LazyLoadSearchableList<VersionViewModel>(
        (int page) => getAssistantAppsVersions().getHistory(
            selectedLanguage,
            platforms,
            page: page,
        ),
        20,
        listItemWithIndexDisplayer: versionTilePresenter(context, currentWhatIsNewGuid, onTap),
        loadMoreItemWidget: loadMoreItemWidget,
    );
```

### Additional

Makes use of [SearchList](components/flutter-adaptive-searchablelist.md) internally.

